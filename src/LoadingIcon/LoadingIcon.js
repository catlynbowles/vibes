import React from 'react'
import Image from 'next/image'

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
      {/* <Image
        src="http://i.stack.imgur.com/SBv4T.gif"
        height="30"
        width={30}
        alt=""
      /> */}
    </div>
  );
}
export default LoadingIcon;