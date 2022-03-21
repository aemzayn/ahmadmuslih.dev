import { createContext, useContext, useState } from 'react'

export type HeaderContext = {
  menuOpen: boolean
}

const HeaderContext = createContext<HeaderContext>({
  menuOpen: false,
})

export const useHeaderContext = () => useContext(HeaderContext)

export type HeaderProviderProps = {
  children: React.ReactNode
}

export const HeaderProvider = ({ children }: HeaderProviderProps) => {
  const [menuOpen] = useState(false)

  return (
    <HeaderContext.Provider value={{ menuOpen }}>
      {children}
    </HeaderContext.Provider>
  )
}

export default HeaderContext
