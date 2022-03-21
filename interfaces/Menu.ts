import { Dispatch } from 'react'

export interface IMenuAction {
  type: string
}

export interface IStateMenuContext {
  isOpen: boolean
  dispatch: Dispatch<IMenuAction>
}

export interface MenuProviderProps {
  children: React.ReactNode
}
