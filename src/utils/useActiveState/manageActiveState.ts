import { useLayoutEffect, useRef } from 'react'

let prevActiveSelector: any | string | Element = null
let prevActiveSetOpen: any | Function = null
export const manageActiveState = (
  setState?: Function | any,
  selector?: string | Element
): void => {
  if (prevActiveSetOpen === setState) return

  if (prevActiveSetOpen) {
    prevActiveSetOpen(false)
    prevActiveSetOpen = null
    prevActiveSelector = null
  }

  if (setState instanceof Function) {
    prevActiveSetOpen = setState
    prevActiveSelector = selector
    setState(true)
  }
}

const handleInEvent = (e: any) => {
  if (
    (typeof prevActiveSelector === 'string' &&
      e.target.closest(prevActiveSelector)) ||
    (prevActiveSelector instanceof Element &&
      prevActiveSelector.contains(e.target))
  ) {
    return
  }

  manageActiveState()
}

export const ActiveStateProvider = ({ children }) => {
  let evAdded = useRef(false)

  useLayoutEffect(() => {
    if (!evAdded.current) {
      window.addEventListener('contextmenu', manageActiveState)
      window.addEventListener('blur', manageActiveState)
      document.addEventListener('click', handleInEvent)
      document.addEventListener('focusin', handleInEvent)
      evAdded.current = true
    }
  }, [])

  return children
}

export default manageActiveState
