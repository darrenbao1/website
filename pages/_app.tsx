import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar } from '../components/Navbar'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Background } from '../components/Background'

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkMode,setIsDarkMode] = useState(true);
  useEffect(() => {
    if (typeof window !== "undefined") {
      let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if(matched)
          setIsDarkMode(true);
        else
          setIsDarkMode(false);
    }
  },[])
      

  return (
  <div style={{position:"fixed"}}>
    <Head>
    <title>Seraph Labs</title>
    <link rel="icon" href={isDarkMode ? "/favicon.ico" : "/faviconLight.png"} />
    </Head>
  <Navbar/>
  <Background/>
  <Component {...pageProps} />
  </div>)
}
