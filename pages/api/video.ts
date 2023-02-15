import middlewareStack from '@/utils/middlewareStack'
import ydl from 'youtube-dl-exec'

export default middlewareStack(async (req, res, next) => {
  if (!Array.isArray(req.body.list)) {
    throw new Error('Use an array for list')
  }

  const videosInfoPromise = req.body.list.map((url) => {
    return ydl(url, { dumpSingleJson: true })
  })

  const videoInfo = await Promise.all(videosInfoPromise)
  res.finish({ list: videoInfo })
})
