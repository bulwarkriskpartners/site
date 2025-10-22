import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ client: string; reportId: string }> }
) {
  const { client, reportId } = await params;
  
  try {
    const reportPath = path.join(process.cwd(), 'data', 'reports', client, `${reportId}.json`);
    
    if (!fs.existsSync(reportPath)) {
      return new NextResponse('Report not found', { status: 404 });
    }
    
    // In production, use Puppeteer to generate PDF from the print route
    // For now, return a placeholder with proper headers
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const printUrl = `${baseUrl}/reports/${client}/${reportId}/print`;
    
    // TODO: Implement actual Puppeteer PDF generation
    // const puppeteer = require('puppeteer');
    // const browser = await puppeteer.launch();
    // const page = await browser.newPage();
    // await page.goto(printUrl, { waitUntil: 'networkidle0' });
    // const pdf = await page.pdf({
    //   format: 'Letter',
    //   printBackground: true,
    //   margin: { top: '0.5in', right: '0.5in', bottom: '0.6in', left: '0.5in' }
    // });
    // await browser.close();
    
    // For development, return a simple message with proper PDF headers
    const pdfContent = `PDF generation for ${client}/${reportId} would be implemented here using Puppeteer.\n\nPrint URL: ${printUrl}`;
    
    return new NextResponse(pdfContent, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="${client}-${reportId}.pdf"`,
        'Content-Length': Buffer.byteLength(pdfContent).toString(),
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  } catch (error) {
    console.error('PDF generation error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
