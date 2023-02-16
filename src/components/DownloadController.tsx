import useActiveState from '@/utils/useActiveState'
import { memo, useMemo } from 'react'
import css from './DownloadController.module.scss'

const DownloadController = ({
  formats,
  selectedFormat,
  setSelectedFormat,
  onDownload,
}) => {
  const [isActive, setIsActive, ref] = useActiveState() as any

  const list = useMemo(() => {
    const listItems = Object.keys(formats).map((key) => {
      const formatsNote = formats[key]

      return (
        <div key={key}>
          <h4>{key}</h4>
          {formatsNote.map((str) => {
            const handleClick = () => {
              setSelectedFormat([key, str])
            }

            return (
              <li key={str}>
                <button onClick={handleClick}>{str}</button>
              </li>
            )
          })}
        </div>
      )
    })

    return <ul className={css.ul}>{listItems}</ul>
  }, [formats])

  return (
    <div className={css.DownloadController}>
      <div className={css.select} ref={ref}>
        <button
          className={css.button}
          onClick={() => setIsActive()}
          disabled={Object.keys(formats).length === 0}
        >
          {(selectedFormat[0] && selectedFormat.join(' ')) || 'Show'}
        </button>
        {isActive && list}
      </div>

      <button className={css.button} type="button" onClick={onDownload}>
        Download
      </button>
    </div>
  )
}

export default memo(DownloadController)
