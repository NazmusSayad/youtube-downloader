import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useApi } from '@/utils/http'

import { RootWrapper } from '@/layouts/Wrapper'

import DownloadController from '@/components/DownloadController'
import VideoList from '@/components/VideoList'
import VideoUrlInput from '@/components/VideoUrlInput'

const Home: NextPage = () => {
  const api = useApi()
  const [videosInfo, setVideosInfo] = useState([])

  return (
    <>
      <Head>
        <title>Hello</title>
      </Head>

      <RootWrapper>
        <VideoUrlInput
          onStart={async (urlList) => {
            const data = await api.post('/api/video', { list: urlList })
            setVideosInfo(data?.list ?? [])
          }}
        />

        <DownloadController />

        <VideoList list={videosInfo} />
      </RootWrapper>
    </>
  )
}

export default Home
