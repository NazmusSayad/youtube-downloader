import type { AppProps } from 'next/app'
import getClassName from 'get-classnames'

window.$cn = getClassName
declare global {
  var $cn: typeof getClassName
}

import '@/styles/index.scss'
import Nav from '@/components/Nav'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
