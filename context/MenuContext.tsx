import { createContext, useContext, useReducer } from 'react'
import {
  IStateMenuContext,
  IMenuAction,
  MenuProviderProps,
} from 'interfaces/Menu'
import types from './types'

const MenuStateContext = createContext<IStateMenuContext>({
  isOpen: false,
  dispatch: () => {},
})

const menuReducer = (state: IStateMenuContext, action: IMenuAction) => {
  const menuOverlay = document.getElementById('menu-overlay')
  const bodyEl = document.documentElement

  switch (action.type) {
    case types.MENU_OPEN:
      bodyEl.classList.add('no-scroll')
      menuOverlay.classList.add('overlay-open')
      return {
        ...state,
        isOpen: false,
      }
    case types.MENU_CLOSE:
      bodyEl.classList.remove('no-scroll')
      menuOverlay.classList.remove('overlay-open')
      return {
        ...state,
        isOpen: false,
      }
    default:
      throw new Error(`Unhandled action type of ${action.type}`)
  }
}

const MenuProvider = ({ children }: MenuProviderProps) => {
  const [state, dispatch] = useReducer(menuReducer, {
    isOpen: false,
    dispatch: () => {},
  })

  return (
    <MenuStateContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MenuStateContext.Provider>
  )
}

const useMenuContext = () => useContext(MenuStateContext)

export default MenuStateContext
export { MenuProvider, useMenuContext }
