import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  
  if (!url || !key) {
    return NextResponse.json({ error: 'Missing server environment variables' }, { status: 500 });
  }

  const supabase = createClient(url, key, { auth: { persistSession: false } });
  
  const { data, error } = await supabase
    .from('leads')
    .select('created_at,name,email,company,revenue_band')
    .order('created_at', { ascending: false })
    .limit(200);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  
  return NextResponse.json({ leads: data ?? [] });
}
