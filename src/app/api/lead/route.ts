import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Log the lead (in production, send to CRM/email service)
    console.log('Lead received:', {
      type: body.type, // 'quick' or 'advanced'
      timestamp: body.timestamp,
      email: body.email,
      name: body.name,
      company: body.company,
      utm: {
        source: body.utm_source,
        medium: body.utm_medium,
        campaign: body.utm_campaign,
        content: body.utm_content,
        term: body.utm_term,
      },
      // Additional fields for advanced form
      ...(body.type === 'advanced' && {
        role: body.role,
        industry: body.industry,
        size: body.size,
        objective: body.objective,
        data_readiness: body.data_readiness,
        urgency: body.urgency,
        budget: body.budget,
      }),
    });

    // TODO: In production, integrate with:
    // - Email service (SendGrid, Postmark, etc.)
    // - CRM (HubSpot, Salesforce, etc.)
    // - Webhook to Slack/Discord for notifications
    
    // Example email service integration:
    // await sendEmail({
    //   to: process.env.LEAD_EMAIL,
    //   subject: `New ${body.type} lead from ${body.email}`,
    //   body: JSON.stringify(body, null, 2),
    // });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { error: 'Failed to process lead' },
      { status: 500 }
    );
  }
}
