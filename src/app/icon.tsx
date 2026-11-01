import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#050508',
          borderRadius: '8px',
          border: '1.5px solid #00f0ff',
          color: '#00f0ff',
          fontSize: '15px',
          fontWeight: 800,
          fontFamily: 'sans-serif',
          letterSpacing: '-0.5px',
        }}
      >
        AB
      </div>
    ),
    { ...size }
  );
}
