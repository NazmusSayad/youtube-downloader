import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useApi } from '@/utils/http'

import { RootWrapper } from '@/layouts/Wrapper'

import DownloadController from '@/components/DownloadController'
import VideoList from '@/components/VideoList'
import VideoUrlInput from '@/components/VideoUrlInput'
import { YtInfo } from '@/types/YTInfo'

const Home: NextPage = () => {
  const api = useApi()
  const [videosInfo, setVideosInfo] = useState([] as YtInfo[])

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

        <DownloadController
          formats={(() => {
            const output = {}

            videosInfo
              .map((info) => info.formats)
              .flat()
              .map((format) => {
                const audioOnly = Boolean(!format.height && format.asr)
                const videoOnly = Boolean(!format.asr && format.height)

                const keySuffix =
                  (audioOnly && 'audio') || (videoOnly && 'video')
                const key = format.ext + (keySuffix ? '-' + keySuffix : '')

                output[key] ??= []
                output[key].push(
                  videoOnly
                    ? format.height + '&' + format.fps
                    : format.format_note
                )
                output[key] = [...new Set(output[key])]
              })

            return output
          })()}
        />

        <VideoList list={videosInfo} />
      </RootWrapper>
    </>
  )
}

export default Home
