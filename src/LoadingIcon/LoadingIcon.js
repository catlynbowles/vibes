import React from 'react'

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
      <img src='http://i.stack.imgur.com/SBv4T.gif' height='30'alt=""/>
    </div>
  )
}
export default LoadingIcon;