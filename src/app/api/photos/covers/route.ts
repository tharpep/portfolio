import { NextRequest, NextResponse } from 'next/server';
import { getCollectionCover } from '@/lib/azure-photos';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const collections = searchParams.get('collections');
    
    if (!collections) {
      return NextResponse.json(
        { covers: {}, success: false, error: 'Collections parameter is required' },
        { status: 400 }
      );
    }

    // Parse collections (comma-separated)
    const collectionNames = collections.split(',').map(c => c.trim());
    const covers: Record<string, string | null> = {};

    // Get cover photo for each collection
    await Promise.all(
      collectionNames.map(async (collection) => {
        try {
          const sanitizedCollection = collection.replace(/[^a-zA-Z0-9\-_]/g, '');
          covers[sanitizedCollection] = await getCollectionCover(sanitizedCollection);
        } catch (error) {
          console.error(`Error getting cover for collection ${collection}:`, error);
          covers[collection] = null;
        }
      })
    );

    return NextResponse.json(
      {
        covers,
        success: true,
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        headers: {
          'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
        },
      }
    );
  } catch (error) {
    
    return NextResponse.json(
      { 
        covers: {}, 
        success: false, 
        error: 'Failed to fetch collection covers'
      },
      { status: 500 }
    );
  }
}