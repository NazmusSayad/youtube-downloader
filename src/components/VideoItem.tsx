import { YtInfo } from '@/types/YTInfo'
import { useEffect, useState } from 'react'
import css from './VideoItem.module.scss'

const VideoItem = ({
  info,
  selectedFormat: [selectedKey, selectedValue],
}: {
  info: YtInfo
  selectedFormat: [string, string]
}) => {
  const [active, setActive] = useState(true)
  const [matchedFormat, setMatchedFormat] = useState(false as any)
  if (active && matchedFormat) {
    info.format_to_download = matchedFormat
  } else {
    delete info.format_to_download
  }

  useEffect(() => {
    setMatchedFormat(findFormat(info.formats, [selectedKey, selectedValue]))
  }, [selectedKey, selectedValue])

  return (
    <div
      className={css.Item}
      {...{ active: active ? '' : undefined }}
      onClick={() => setActive((prev) => !prev)}
    >
      <img src={info.thumbnail} alt={info.title} />
      <div>
        <h4>{info.title}</h4>
        <p>{matchedFormat ? '' : 'Hello world!'}</p>
      </div>
    </div>
  )
}

export default VideoItem
export const findFormat = (formats, [selectedKey, selectedValue]) => {
  let matchedFormat
  const [ext] = selectedKey.split('-')
  const videoOnly = selectedKey.endsWith('-video')

  if (videoOnly) {
    const [resulation, fps] = selectedValue.split('@')
    matchedFormat = formats.find((format) => {
      return format.format_note === resulation && format.fps === +fps
    })
  } else {
    matchedFormat = formats.find((format) => {
      return format.format_note === selectedValue && format.ext === ext
    })
  }

  return matchedFormat
}
