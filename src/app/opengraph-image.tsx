import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Pryce Tharpe – Software Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#171717',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtle radial gradient accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(34,211,238,0.08) 0%, transparent 70%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <p
            style={{
              fontSize: '18px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(34,211,238,0.7)',
              margin: 0,
            }}
          >
            pryce-tharpe.dev
          </p>
          <h1
            style={{
              fontSize: '80px',
              fontWeight: 700,
              color: '#ffffff',
              margin: 0,
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}
          >
            Pryce Tharpe
          </h1>
          <div
            style={{
              width: '60px',
              height: '2px',
              background: '#22d3ee',
              display: 'flex',
              marginTop: '4px',
            }}
          />
          <p
            style={{
              fontSize: '28px',
              color: 'rgba(255,255,255,0.5)',
              margin: 0,
              fontWeight: 400,
            }}
          >
            Software Engineer
          </p>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
