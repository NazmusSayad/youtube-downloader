import { useMemo, useState } from 'react'
import css from './VideoUrlInput.module.scss'

const VideoUrlInput = ({ onStart }) => {
  const [rawValue, setRawValue] = useState('')

  const valuesArray = useMemo(() => {
    const strParts = rawValue.split('\n')
    return strParts.filter((str, ind) => str || ind === strParts.length - 1)
  }, [rawValue])

  return (
    <div className={css.urlInput}>
      <textarea
        autoComplete="url"
        value={valuesArray.join('\n')}
        onChange={(e) => setRawValue(e.target.value)}
        rows={valuesArray.length > 5 ? 5 : valuesArray.length || 1}
      />

      <button
        type="button"
        onClick={() => {
          const filteredList = valuesArray.filter((str) => str)
          const uniqueList = new Set(filteredList)
          onStart([...uniqueList])
        }}
      >
        Start
      </button>
    </div>
  )
}

export default VideoUrlInput
