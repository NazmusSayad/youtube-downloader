'use client'

import useActiveState from '@/utils/useActiveState'
import css from './DownloadController.module.scss'

const DownloadController = () => {
  const [active, isActive, ref] = useActiveState()

  return (
    <div className={css.DownloadController}>
      <button type="button" className={css.select}>
        Select
      </button>

      <button type="button">Download</button>
    </div>
  )
}

export default DownloadController
