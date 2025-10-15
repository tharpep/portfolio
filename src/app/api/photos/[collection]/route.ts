import { NextRequest, NextResponse } from 'next/server';
import { listSecurePhotos } from '@/lib/azure-photos';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ collection: string }> }
) {
  try {
    const { collection } = await context.params;

    // Validate collection parameter
    if (!collection || collection.trim() === '') {
      return NextResponse.json(
        { photos: [], success: false, error: 'Collection parameter is required' },
        { status: 400 }
      );
    }

    // Sanitize collection name to prevent path traversal
    const sanitizedCollection = collection.replace(/[^a-zA-Z0-9\-_]/g, '');
    
    if (sanitizedCollection !== collection) {
      return NextResponse.json(
        { photos: [], success: false, error: 'Invalid collection name' },
        { status: 400 }
      );
    }

    // Fetch photos from Azure with secure URLs
    const photos = await listSecurePhotos(sanitizedCollection);
    
    return NextResponse.json(
      { 
        photos, 
        success: true,
        collection: sanitizedCollection,
        count: photos.length,
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
      },
      {
        headers: {
          'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
        },
      }
    );
  } catch {
    
    return NextResponse.json(
      { 
        photos: [], 
        success: false, 
        error: 'Failed to fetch photos',
      },
      { status: 500 }
    );
  }
}