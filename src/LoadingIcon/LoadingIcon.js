import React from 'react'
import Monster from '@/components/Monster/Monster'

const LoadingIcon = () => {
  const fontStyle = {
    'color': 'white',
    'fontSize': '15px',
  }

  const loadingContainer = {
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center'
  }

  return (
    <div style={loadingContainer}>
      <p style={fontStyle}>Loading...</p>
      <Monster />
    </div>
  );
}
export default LoadingIcon;