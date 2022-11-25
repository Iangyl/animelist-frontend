import React from 'react';
import ErrorOutlined from './ErrorOutlined';

const style: React.CSSProperties = {
  maxWidth: '300px',
  width: '100%',
  height: '400px',
  backgroundColor: 'gray',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
};

export default function EmptyAnimeCover() {
  return (
    <div style={style}>
      <div>
        <ErrorOutlined />
      </div>
      <div>Image doesn&apos;t exist or was corrupted!</div>
    </div>
  );
}
