import { YtInfo } from '@/types/YTInfo'
import axios from 'axios'

export const downloadVideo = async (video: YtInfo, onProgress) => {
  const url = video.format_to_download?.url as string
  downloadFile(url, video.title + '.' + video.ext)
  console.log(video)
}

const downloadFile = (url, fileName) => {
  const a = document.createElement('a')
  a.href = url
  // a.target = '_blank'
  a.title = fileName
  a.download = fileName
  a.innerHTML = fileName

  // document.body.appendChild(a)
  a.click()
  a.remove()
}
