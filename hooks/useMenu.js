import { useContextDispatch, useContextState } from 'context'
import types from 'context/types'

const useMenu = () => {
  const dispatch = useContextDispatch()
  const { menu } = useContextState()

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

  return {
    isOpen,
    isClose,
    toggle,
    setOpen,
    setClose
  }
}

export default useMenu
