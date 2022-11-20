import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar } from '../components/Navbar'
import { BackgroundVideo } from '../components/BackgroundVideo'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <div style={{position:"fixed"}}>
    <title>Seraph Labs</title>
  <Navbar/>
  <BackgroundVideo/>
  <Component {...pageProps} />
  </div>)
}
