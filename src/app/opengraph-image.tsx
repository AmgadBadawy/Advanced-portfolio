import { ImageResponse } from 'next/og';

export const alt = 'Amged Badawy — Frontend Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: '#050508',
          color: '#ffffff',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Ambient Glows */}
        <div
          style={{
            position: 'absolute',
            top: '-150px',
            right: '-100px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.15), transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-150px',
            left: '-100px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12), transparent 70%)',
          }}
        />

        {/* Top Header Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '56px',
              height: '56px',
              borderRadius: '28px',
              background: 'rgba(0, 240, 255, 0.12)',
              border: '2px solid rgba(0, 240, 255, 0.4)',
              color: '#00f0ff',
              fontSize: '22px',
              fontWeight: 800,
            }}
          >
            AB
          </div>
          <div
            style={{
              display: 'flex',
              padding: '8px 20px',
              borderRadius: '9999px',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: '#10b981',
              fontSize: '16px',
              fontWeight: 600,
            }}
          >
            ● Available for Frontend Roles
          </div>
        </div>

        {/* Main Center Typography */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              fontSize: '72px',
              fontWeight: 900,
              letterSpacing: '-2px',
              color: '#ffffff',
            }}
          >
            Amged Badawy
          </div>
          <div
            style={{
              fontSize: '36px',
              fontWeight: 700,
              color: '#00f0ff',
              letterSpacing: '-0.5px',
            }}
          >
            Frontend Developer &amp; UI Architect
          </div>
          <div
            style={{
              fontSize: '22px',
              color: '#94a3b8',
              maxWidth: '850px',
              lineHeight: 1.5,
            }}
          >
            Specializing in React 19, Next.js (App Router), TypeScript, Arabic RTL interfaces, and high-performance component engineering.
          </div>
        </div>

        {/* Bottom Tech Pills */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Arabic RTL', 'Three.js'].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  display: 'flex',
                  padding: '8px 18px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#cbd5e1',
                  fontSize: '16px',
                  fontWeight: 500,
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
