import React from 'react'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #fff;
  }
`

const SpringApp = ({Component, pageProps}) => {
  return (
    <>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}

export default SpringApp
