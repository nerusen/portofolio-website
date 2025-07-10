export const runtime = 'edge'

export const alt = 'Dev: Lauvigne - Full Stack Developer & Entrepreneur'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new Response(
    `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#000000;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1a1a1a;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#8b5cf6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#06b6d4;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Background -->
      <rect width="1200" height="630" fill="url(#bg)"/>
      
      <!-- Logo -->
      <g transform="translate(80, 200) scale(0.8)">
        <path d="M3.15689 122.295L64.2553 10.4142C67.7615 3.99386 74.4931 0 81.8084 0H83.9619C99.1039 0 108.754 16.1737 101.562 29.4989L68.2028 91.31C61.6781 103.4 70.4332 118.073 84.171 118.073H86.2774C99.1545 118.073 107.303 131.897 101.067 143.163C98.0892 148.542 92.4257 151.881 86.2774 151.881H20.71C5.52443 151.881 -4.12142 135.623 3.15689 122.295Z" fill="url(#accent)"/>
        <path d="M109.082 102.431H106.471C93.767 102.431 85.6032 88.9416 91.4962 77.6867C94.4133 72.1152 100.182 68.6239 106.471 68.6239H173.236C188.434 68.6239 198.079 84.9059 190.776 98.2343L129.75 209.61C126.24 216.017 119.516 220 112.211 220H109.728C94.5408 220 84.8951 203.739 92.1763 190.411L125.302 129.776C132.031 117.459 123.117 102.431 109.082 102.431Z" fill="url(#accent)"/>
      </g>
      
      <!-- Text -->
      <text x="350" y="280" fill="white" font-family="Inter, system-ui, sans-serif" font-size="48" font-weight="700">Dev: Lauvigne</text>
      <text x="350" y="340" fill="#94a3b8" font-family="Inter, system-ui, sans-serif" font-size="24" font-weight="400">Full Stack Developer & Entrepreneur</text>
      <text x="350" y="400" fill="#64748b" font-family="Inter, system-ui, sans-serif" font-size="18" font-weight="300">Transforming ideas into digital experiences</text>
    </svg>`,
    {
      headers: {
        'Content-Type': 'image/svg+xml',
      },
    }
  )
}
