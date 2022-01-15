import React from 'react'
import {createGlobalStyle} from 'styled-components'
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #fff;
  }
  
  .anime {
    transition: 1s ease-in-out;
  }
`

const SpringApp = ({Component, pageProps}) => {
  return (
    <>
      <Head>
        <title>History in Motion</title>
        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css' rel='stylesheet' />
      </Head>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}

export default SpringApp
