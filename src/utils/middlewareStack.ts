export default (...args: Function[]) => {
  return (req, res) => {
    res.finish = (data) => {
      const statusCode = res.statusCode

      const status = (() => {
        if (statusCode < 400) return 'success'
        if (statusCode < 500) return 'fail'
        return 'error'
      })()

      res.json({ status, [statusCode < 400 ? 'data' : 'message']: data })
    }

    const newList = args.map((fn, ind) => {
      return async () => {
        const nextFn = newList[ind + 1]

        try {
          const rv = fn(req, res, () => nextFn && nextFn())
          if (rv instanceof Promise) await rv
        } catch (err: any) {
          res.status(400).finish(err.message)
        }
      }
    })

    const firstFn = newList[0]
    firstFn && firstFn()
  }
}
