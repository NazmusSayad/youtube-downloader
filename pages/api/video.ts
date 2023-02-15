import middlewareStack from '@/utils/middlewareStack'
import ydl from 'youtube-dl-exec'

export default middlewareStack(async (req, res, next) => {
  if (!Array.isArray(req.body.list)) {
    throw new Error('Use an array for list')
  }

  const videosInfoPromise = req.body.list.map((url) => {
    return ydl(url, {
      dumpSingleJson: true,
      noCheckCertificates: true,
      noWarnings: true,
      preferFreeFormats: true,
      addHeader: ['referer:youtube.com', 'user-agent:googlebot'],
    })
  })

  const videoInfo = await Promise.all(videosInfoPromise)
  const finalInfo = videoInfo.map((info) => {
    const filteredFormats = info.formats.filter((format) => {
      return format.ext !== 'mhtml'
    })

    return { ...info, formats: filteredFormats }
  })

  res.finish({ list: finalInfo })
})
