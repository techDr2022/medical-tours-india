"use client"

export function SEOHead() {
  return (
    <>
      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content="Medical Tours India" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Medical Tours India" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileColor" content="#0ea5e9" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="theme-color" content="#0ea5e9" />
      
      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://wa.me" />
    </>
  )
}
