import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get("host") || ""

  // Redirect www to non-www for cost.medicaltoursindia.com
  // This ensures canonicalization - both www and non-www resolve to non-www
  if (hostname === "www.cost.medicaltoursindia.com") {
    url.hostname = "cost.medicaltoursindia.com"
    url.protocol = "https:"
    // Preserve the pathname and query string
    return NextResponse.redirect(url, 301) // Permanent redirect for SEO
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt, sitemap.xml (SEO files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
}
