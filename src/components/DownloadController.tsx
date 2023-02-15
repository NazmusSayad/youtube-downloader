'use client'

import useActiveState from '@/utils/useActiveState'
import { memo, useMemo } from 'react'
import css from './DownloadController.module.scss'

const DownloadController = ({ formats }) => {
  const [isActive, setIsActive, ref] = useActiveState() as any

  const list = useMemo(() => {
    const listItems = Object.keys(formats).map((key) => {
      const formatsNote = formats[key]

      return (
        <>
          <h4 key={key}>{key}</h4>
          {formatsNote.map((str) => (
            <li key={str}>{str.replace('&', ' FPS:')}</li>
          ))}
        </>
      )
    })

    return <ul className={css.ul}>{listItems}</ul>
  }, [formats])

  return (
    <div className={css.DownloadController}>
      <div className={css.select} ref={ref}>
        <button onClick={() => setIsActive()}>Show</button>
        {isActive && list}
      </div>

      <button type="button">Download</button>
    </div>
  )
}

export default memo(DownloadController)
