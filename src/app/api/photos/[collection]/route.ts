import { NextRequest, NextResponse } from 'next/server';
import { listSecurePhotos } from '@/lib/azure-photos';

export async function GET(
  request: NextRequest,
  { params }: { params: { collection: string } }
) {
  try {
    // Validate collection parameter
    if (!params.collection || params.collection.trim() === '') {
      return NextResponse.json(
        { photos: [], success: false, error: 'Collection parameter is required' },
        { status: 400 }
      );
    }

    // Sanitize collection name to prevent path traversal
    const sanitizedCollection = params.collection.replace(/[^a-zA-Z0-9\-_]/g, '');
    
    if (sanitizedCollection !== params.collection) {
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
        collection: params.collection
      },
      { status: 500 }
    );
  }
}