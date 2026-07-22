const VARIANTS = {
  person: (
    <>
      <circle cx="50" cy="32" r="16" fill="currentColor" opacity="0.3" />
      <rect x="34" y="54" width="32" height="36" rx="6" fill="currentColor" opacity="0.25" />
    </>
  ),
  landscape: (
    <>
      <polygon points="15,75 40,30 65,75" fill="currentColor" opacity="0.25" />
      <polygon points="50,75 70,40 95,75" fill="currentColor" opacity="0.3" />
      <circle cx="78" cy="25" r="8" fill="currentColor" opacity="0.2" />
    </>
  ),
  book: (
    <>
      <rect x="25" y="15" width="50" height="70" rx="4" fill="currentColor" opacity="0.25" />
      <rect x="30" y="25" width="30" height="4" rx="2" fill="currentColor" opacity="0.35" />
      <rect x="30" y="35" width="35" height="3" rx="1.5" fill="currentColor" opacity="0.2" />
      <rect x="30" y="43" width="25" height="3" rx="1.5" fill="currentColor" opacity="0.2" />
      <line x1="25" y1="15" x2="25" y2="85" stroke="currentColor" strokeWidth="3" opacity="0.35" />
    </>
  ),
  code: (
    <>
      <polyline points="30,35 18,50 30,65" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.35" />
      <polyline points="70,35 82,50 70,65" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.35" />
      <line x1="58" y1="28" x2="42" y2="72" stroke="currentColor" strokeWidth="3" opacity="0.25" />
    </>
  ),
  heart: (
    <>
      <path
        d="M50 80 C50 80 15 55 15 35 C15 22 25 15 35 15 C42 15 48 20 50 25 C52 20 58 15 65 15 C75 15 85 22 85 35 C85 55 50 80 50 80Z"
        fill="currentColor"
        opacity="0.25"
      />
    </>
  ),
  globe: (
    <>
      <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      <ellipse cx="50" cy="50" rx="16" ry="32" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.25" />
      <line x1="18" y1="50" x2="82" y2="50" stroke="currentColor" strokeWidth="2" opacity="0.2" />
      <line x1="50" y1="18" x2="50" y2="82" stroke="currentColor" strokeWidth="2" opacity="0.2" />
    </>
  ),
};

export default function PlaceholderSvg({ variant = 'landscape', color = 'var(--color-accent)' }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      aria-hidden="true"
      style={{ color }}
    >
      {VARIANTS[variant] ?? VARIANTS.landscape}
    </svg>
  );
}
