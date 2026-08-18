function starPoints(cx, cy, outerR, rotation = -90, innerR = outerR * 0.38) {
  const points = [];
  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? outerR : innerR;
    const angle = (Math.PI / 5) * i + (rotation * Math.PI) / 180;
    points.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
  }
  return points.join(' ');
}

const NORDIC_CROSS = {
  Denmark: { bg: '#c8102e', cross: '#ffffff', vx: 45, vw: 14, hy: 42, hh: 16, inner: null },
  Sweden: { bg: '#006aa7', cross: '#fecc02', vx: 45, vw: 14, hy: 42, hh: 16, inner: null },
  Norway: {
    bg: '#ba0c2f',
    cross: '#ffffff',
    vx: 40,
    vw: 24,
    hy: 38,
    hh: 24,
    inner: { color: '#00205b', vx: 46, vw: 12, hy: 44, hh: 12 },
  },
};

function NordicCrossFlag({ country }) {
  const c = NORDIC_CROSS[country];
  return (
    <>
      <rect x="0" y="0" width="150" height="100" fill={c.bg} />
      <rect x={c.vx} y="0" width={c.vw} height="100" fill={c.cross} />
      <rect x="0" y={c.hy} width="150" height={c.hh} fill={c.cross} />
      {c.inner && (
        <>
          <rect x={c.inner.vx} y="0" width={c.inner.vw} height="100" fill={c.inner.color} />
          <rect x="0" y={c.inner.hy} width="150" height={c.inner.hh} fill={c.inner.color} />
        </>
      )}
    </>
  );
}

function CambodiaFlag() {
  return (
    <>
      <rect x="0" y="0" width="150" height="100" fill="#032ea1" />
      <rect x="0" y="25" width="150" height="50" fill="#e00025" />
      <g fill="#ffffff">
        <rect x="58" y="52" width="34" height="14" />
        <polygon points="63,52 63,38 68,30 73,38 73,52" />
        <polygon points="70,52 70,34 75,25 80,34 80,52" />
        <polygon points="77,52 77,38 82,30 87,38 87,52" />
      </g>
    </>
  );
}

function CanadaFlag() {
  return (
    <>
      <rect x="0" y="0" width="150" height="100" fill="#ffffff" />
      <rect x="0" y="0" width="37.5" height="100" fill="#d52b1e" />
      <rect x="112.5" y="0" width="37.5" height="100" fill="#d52b1e" />
      <polygon
        points="75,32 79,44 90,40 84,51 94,55 84,59 87,70 75,63 63,70 66,59 56,55 66,51 60,40 71,44"
        fill="#d52b1e"
      />
    </>
  );
}

function ChinaFlag() {
  return (
    <>
      <rect x="0" y="0" width="150" height="100" fill="#de2910" />
      <polygon points={starPoints(30, 24, 10, -90)} fill="#ffde00" />
      <polygon points={starPoints(52, 10, 3.2, -66)} fill="#ffde00" />
      <polygon points={starPoints(60, 21, 3.2, -100)} fill="#ffde00" />
      <polygon points={starPoints(58, 35, 3.2, -140)} fill="#ffde00" />
      <polygon points={starPoints(48, 43, 3.2, 172)} fill="#ffde00" />
    </>
  );
}

function CzechFlag() {
  return (
    <>
      <rect x="0" y="0" width="150" height="50" fill="#ffffff" />
      <rect x="0" y="50" width="150" height="50" fill="#d7141a" />
      <polygon points="0,0 0,100 75,50" fill="#11457e" />
    </>
  );
}

function EnglandFlag() {
  return (
    <>
      <rect x="0" y="0" width="150" height="100" fill="#ffffff" />
      <rect x="68" y="0" width="14" height="100" fill="#ce1124" />
      <rect x="0" y="42" width="150" height="16" fill="#ce1124" />
    </>
  );
}

function FranceFlag() {
  return (
    <>
      <rect x="0" y="0" width="50" height="100" fill="#0055a4" />
      <rect x="50" y="0" width="50" height="100" fill="#ffffff" />
      <rect x="100" y="0" width="50" height="100" fill="#ef4135" />
    </>
  );
}

function GermanyFlag() {
  return (
    <>
      <rect x="0" y="0" width="150" height="33.3" fill="#000000" />
      <rect x="0" y="33.3" width="150" height="33.3" fill="#dd0000" />
      <rect x="0" y="66.6" width="150" height="33.4" fill="#ffce00" />
    </>
  );
}

function ItalyFlag() {
  return (
    <>
      <rect x="0" y="0" width="50" height="100" fill="#009246" />
      <rect x="50" y="0" width="50" height="100" fill="#ffffff" />
      <rect x="100" y="0" width="50" height="100" fill="#ce2b37" />
    </>
  );
}

function JapanFlag() {
  return (
    <>
      <rect x="0" y="0" width="150" height="100" fill="#ffffff" />
      <circle cx="75" cy="50" r="20" fill="#bc002d" />
    </>
  );
}

function MexicoFlag() {
  return (
    <>
      <rect x="0" y="0" width="50" height="100" fill="#006847" />
      <rect x="50" y="0" width="50" height="100" fill="#ffffff" />
      <rect x="100" y="0" width="50" height="100" fill="#ce1126" />
      <circle cx="75" cy="50" r="9" fill="#8a6d3b" opacity="0.85" />
      <circle cx="75" cy="50" r="4" fill="#4a7729" opacity="0.85" />
    </>
  );
}

// Each pattern entry is one bar, top to bottom: true = solid (yang), false = broken (yin).
function Trigram({ cx, cy, pattern }) {
  const ys = [cy - 6, cy, cy + 6];
  return (
    <g stroke="#0b0b0b" strokeWidth="2.4">
      {pattern.map((solid, i) =>
        solid ? (
          <line key={i} x1={cx - 8} y1={ys[i]} x2={cx + 8} y2={ys[i]} />
        ) : (
          <g key={i}>
            <line x1={cx - 8} y1={ys[i]} x2={cx - 2} y2={ys[i]} />
            <line x1={cx + 2} y1={ys[i]} x2={cx + 8} y2={ys[i]} />
          </g>
        )
      )}
    </g>
  );
}

function SouthKoreaFlag() {
  return (
    <>
      <rect x="0" y="0" width="150" height="100" fill="#ffffff" />
      <defs>
        <clipPath id="kr-taegeuk-clip">
          <circle cx="75" cy="50" r="20" />
        </clipPath>
      </defs>
      {/* Taegeuk: a red/blue circle split by an S-curve, built from a half-circle
          plus two half-radius bulge circles, then rotated so red sits upper-right. */}
      <g clipPath="url(#kr-taegeuk-clip)" transform="rotate(-45 75 50)">
        <circle cx="75" cy="50" r="20" fill="#003478" />
        <rect x="75" y="30" width="20" height="40" fill="#c60c30" />
        <circle cx="75" cy="40" r="10" fill="#c60c30" />
        <circle cx="75" cy="60" r="10" fill="#003478" />
      </g>
      {/* Geon (heaven, ☰) */}
      <Trigram cx={33} cy={27} pattern={[true, true, true]} />
      {/* Gam (water, ☵) */}
      <Trigram cx={117} cy={27} pattern={[false, true, false]} />
      {/* Ri (fire, ☲) */}
      <Trigram cx={33} cy={73} pattern={[true, false, true]} />
      {/* Gon (earth, ☷) */}
      <Trigram cx={117} cy={73} pattern={[false, false, false]} />
    </>
  );
}

function PortugalFlag() {
  return (
    <>
      <rect x="0" y="0" width="60" height="100" fill="#006600" />
      <rect x="60" y="0" width="90" height="100" fill="#ff0000" />
      <circle cx="60" cy="50" r="15" fill="none" stroke="#ffcc00" strokeWidth="2.5" />
      <ellipse cx="60" cy="50" rx="8" ry="15" fill="none" stroke="#ffcc00" strokeWidth="2" />
      <rect x="53" y="40" width="14" height="18" rx="2" fill="#ffffff" stroke="#ff0000" strokeWidth="1.5" />
      <g fill="#003399">
        <circle cx="57" cy="45" r="1.3" />
        <circle cx="63" cy="45" r="1.3" />
        <circle cx="60" cy="49" r="1.3" />
        <circle cx="57" cy="53" r="1.3" />
        <circle cx="63" cy="53" r="1.3" />
      </g>
    </>
  );
}

function SpainFlag() {
  return (
    <>
      <rect x="0" y="0" width="150" height="25" fill="#aa151b" />
      <rect x="0" y="25" width="150" height="50" fill="#f1bf00" />
      <rect x="0" y="75" width="150" height="25" fill="#aa151b" />
      <rect x="22" y="38" width="16" height="24" fill="#aa151b" stroke="#f1bf00" strokeWidth="1.5" />
    </>
  );
}

function ThailandFlag() {
  return (
    <>
      <rect x="0" y="0" width="150" height="100" fill="#a51931" />
      <rect x="0" y="16.7" width="150" height="66.6" fill="#ffffff" />
      <rect x="0" y="33.3" width="150" height="33.4" fill="#2d2a4a" />
    </>
  );
}

function VietnamFlag() {
  return (
    <>
      <rect x="0" y="0" width="150" height="100" fill="#da251d" />
      <polygon points={starPoints(75, 50, 22, -90)} fill="#ffcd00" />
    </>
  );
}

const FLAGS = {
  Cambodia: <CambodiaFlag />,
  Canada: <CanadaFlag />,
  China: <ChinaFlag />,
  'Czech Republic': <CzechFlag />,
  Denmark: <NordicCrossFlag country="Denmark" />,
  England: <EnglandFlag />,
  France: <FranceFlag />,
  Germany: <GermanyFlag />,
  Italy: <ItalyFlag />,
  Japan: <JapanFlag />,
  Mexico: <MexicoFlag />,
  Norway: <NordicCrossFlag country="Norway" />,
  Portugal: <PortugalFlag />,
  'South Korea': <SouthKoreaFlag />,
  Spain: <SpainFlag />,
  Sweden: <NordicCrossFlag country="Sweden" />,
  Thailand: <ThailandFlag />,
  Vietnam: <VietnamFlag />,
};

export default function CountryFlag({ country }) {
  return (
    <svg
      viewBox="0 0 150 100"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label={`Flag of ${country}`}
    >
      {FLAGS[country]}
    </svg>
  );
}
