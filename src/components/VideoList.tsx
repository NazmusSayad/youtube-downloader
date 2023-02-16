import VideoItem from './VideoItem'
import css from './VideoList.module.scss'

const VideoList = ({ list, selectedFormat }) => {
  return (
    <div className={css.List}>
      {list.map((info) => {
        return (
          <VideoItem
            selectedFormat={selectedFormat}
            key={info.id}
            info={info}
          />
        )
      })}
    </div>
  )
}

export default VideoList
