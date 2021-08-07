import { createContext, useContext, useReducer } from 'react'
import types from './types'

export const GlobalStateContext = createContext()

export const GlobalDisplayContext = createContext()

const globalReducer = (state, action) => {
  const menuOverlay = document?.getElementById('menu-overlay')

  switch (action.type) {
    case types.MENU_OPEN:
      document.documentElement.classList.add('no-scroll')
      menuOverlay.classList.add('overlay-open')
      return {
        ...state,
        menu: true
      }
    case types.MENU_CLOSE:
      document.documentElement.classList.remove('no-scroll')
      menuOverlay.classList.remove('overlay-open')
      return {
        ...state,
        menu: false
      }
    default:
      throw new Error(`Unhandled action type of ${action.type}`)
  }
}

export const GlobalContext = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    menu: false
  })

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDisplayContext.Provider value={dispatch}>
        {children}
      </GlobalDisplayContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export const useContextState = () => useContext(GlobalStateContext)
export const useContextDispatch = () => useContext(GlobalDisplayContext)
