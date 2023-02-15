import type { AppProps } from 'next/app'
import getClassName from 'get-classnames'

try {
  globalThis.$cn = getClassName
  global.$cn = getClassName
  window.$cn = getClassName
} catch {}
declare global {
  var $cn: typeof getClassName
}

import '@/styles/index.scss'
import Nav from '@/components/Nav'
import { ActiveStateProvider } from '@/utils/useActiveState/manageActiveState'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <main>
        <ActiveStateProvider>
          <Component {...pageProps} />
        </ActiveStateProvider>
      </main>
    </>
  )
}

export default MyApp
