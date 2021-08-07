import useMenu from 'hooks/useMenu'

const MenuOverlay = () => {
  const { isOpen, setClose } = useMenu()

  return <div className={`hidden absolute ${isOpen && 'overlay-open'}`}></div>
}

export default MenuOverlay
