export default function Head() {
  return (
    <>
      <title>Shreedhar Masale - Premium Indian Spices</title>
      <meta name="description" content="Authentic Konkan spices made with traditional recipes" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Favicon links: PNG for modern browsers, ICO fallback for older browsers */}
      <link rel="icon" href="/logo.png" type="image/png" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
      <meta name="theme-color" content="#ffffff" />

      {/* Optional manifest (add site.webmanifest in public/ for PWA metadata) */}
      <link rel="manifest" href="/site.webmanifest" />
    </>
  );
}
