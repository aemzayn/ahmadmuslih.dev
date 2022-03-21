import { gsap } from 'gsap'
import { useMenuContext } from 'context/MenuContext'
import types from 'context/types'

const useMenu = () => {
  const { isOpen, dispatch } = useMenuContext()
  const tl = gsap.timeline()

  const toggle = () => {
    if (isOpen) {
      dispatch({ type: types.MENU_CLOSE })
    } else {
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
      opacity: 1,
    })
  }

  return {
    isOpen,
    isClose: !isOpen,
    toggle,
    setOpen,
    setClose,
    openMenu,
  }
}

export default useMenu
