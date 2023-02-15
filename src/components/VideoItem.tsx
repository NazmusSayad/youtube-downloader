import { useState } from 'react'
import css from './VideoItem.module.scss'

const VideoItem = ({ info }) => {
  const [active, setActive] = useState(true)
  info.active = active

  return (
    <div
      className={css.Item}
      {...{ active: active ? '' : undefined }}
      onClick={() => setActive((prev) => !prev)}
    >
      <img src={info.thumbnail} alt={info.title} />
      <div>
        <h4>{info.title}</h4>
        <p>Error</p>
      </div>
    </div>
  )
}

export default VideoItem
