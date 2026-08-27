'use client'

export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Box body */}
      <rect x="6" y="22" width="36" height="20" rx="3" fill="#2d0e0e" stroke="#c9a87c" strokeWidth="1.5"/>
      
      {/* Box lid */}
      <rect x="4" y="16" width="40" height="8" rx="2" fill="#4a1a1a" stroke="#c9a87c" strokeWidth="1.5"/>
      
      {/* Ribbon vertical */}
      <rect x="21" y="16" width="6" height="26" rx="1" fill="#c9a87c" opacity="0.9"/>
      
      {/* Ribbon horizontal */}
      <rect x="4" y="18" width="40" height="4" rx="1" fill="#c9a87c" opacity="0.7"/>
      
      {/* Bow left */}
      <ellipse cx="19" cy="14" rx="6" ry="4" fill="#c9a87c" transform="rotate(-15 19 14)"/>
      
      {/* Bow right */}
      <ellipse cx="29" cy="14" rx="6" ry="4" fill="#c9a87c" transform="rotate(15 29 14)"/>
      
      {/* Bow center knot */}
      <circle cx="24" cy="15" r="2.5" fill="#d4b88a"/>
      
      {/* Sparkle left */}
      <circle cx="10" cy="12" r="1" fill="#c9a87c" opacity="0.6"/>
      
      {/* Sparkle right */}
      <circle cx="38" cy="10" r="0.8" fill="#c9a87c" opacity="0.5"/>
      
      {/* Sparkle top */}
      <circle cx="24" cy="6" r="1.2" fill="#c9a87c" opacity="0.4"/>
    </svg>
  )
}

export function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="22" width="36" height="20" rx="3" fill="#1a0a0a" stroke="#c9a87c" strokeWidth="2"/>
      <rect x="4" y="16" width="40" height="8" rx="2" fill="#2d0e0e" stroke="#c9a87c" strokeWidth="2"/>
      <rect x="21" y="16" width="6" height="26" rx="1" fill="#c9a87c"/>
      <rect x="4" y="18" width="40" height="4" rx="1" fill="#c9a87c" opacity="0.7"/>
      <ellipse cx="19" cy="14" rx="6" ry="4" fill="#c9a87c" transform="rotate(-15 19 14)"/>
      <ellipse cx="29" cy="14" rx="6" ry="4" fill="#c9a87c" transform="rotate(15 29 14)"/>
      <circle cx="24" cy="15" r="2.5" fill="#d4b88a"/>
    </svg>
  )
}
