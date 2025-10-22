import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function POST(request: NextRequest) {
  try {
    const { email, name, company } = await request.json();
    
    // Validate required fields
    if (!email || !name || !company) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // In a real implementation, you would:
    // 1. Save the lead to your CRM/database
    // 2. Send a welcome email with the report
    // 3. Track the download event
    
    // For now, just return success
    return NextResponse.json({ 
      success: true,
      downloadUrl: '/sample-diagnostic-report.pdf',
      message: 'Sample report ready for download'
    });
    
  } catch (error) {
    console.error('Error processing sample report request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Return the sample report file
  try {
    const filePath = path.join(process.cwd(), 'public', 'sample-diagnostic-report.pdf');
    const fileBuffer = fs.readFileSync(filePath);
    
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="sample-diagnostic-report.pdf"',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('Error serving sample report:', error);
    return NextResponse.json(
      { error: 'File not found' },
      { status: 404 }
    );
  }
}
