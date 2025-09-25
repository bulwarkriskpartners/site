import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PROTECTED = [/^\/admin($|\/)/, /^\/api\/admin\//];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (!PROTECTED.some((re) => re.test(pathname))) return NextResponse.next();

  const auth = req.headers.get('authorization') || '';
  const [scheme, encoded] = auth.split(' ');
  if (scheme !== 'Basic' || !encoded) {
    return new NextResponse('Auth required', { 
      status: 401, 
      headers: { 'WWW-Authenticate': 'Basic realm="Bulwark Admin"' } 
    });
  }
  
  const [user, pass] = Buffer.from(encoded, 'base64').toString().split(':');
  if (user !== process.env.BASIC_AUTH_USER || pass !== process.env.BASIC_AUTH_PASS) {
    return new NextResponse('Unauthorized', { 
      status: 401, 
      headers: { 'WWW-Authenticate': 'Basic realm="Bulwark Admin"' } 
    });
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/admin/:path*', '/api/admin/:path*'],
};
