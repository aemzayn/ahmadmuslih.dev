import { useContextDispatch, useContextState } from 'context'
import types from 'context/types'
import { gsap } from 'gsap'

const useMenu = () => {
  const dispatch = useContextDispatch()
  const { menu } = useContextState()
  const tl = gsap.timeline()

  let isOpen = menu
  let isClose = !menu

  const toggle = () => {
    if (isOpen) {
      dispatch({ type: types.MENU_CLOSE })
    } else if (isClose) {
      dispatch({ type: types.MENU_OPEN })
    }
  }

  const setOpen = () => {
    dispatch({ type: types.MENU_OPEN })
  }

  const setClose = () => {
    dispatch({ type: types.MENU_CLOSE })
  }

  const openMenu = () => {
    setOpen()
    tl.to('#menu-overlay', {
      duration: 1,
      opacity: 1
    })
  }

  return {
    isOpen,
    isClose,
    toggle,
    setOpen,
    setClose,
    openMenu
  }
}

export default useMenu
