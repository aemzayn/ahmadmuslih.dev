import useMenu from 'hooks/useMenu'

const HamburgerMenu = () => {
  const { openMenu } = useMenu()
  return (
    <button onClick={openMenu}>
      <img
        src="/images/hamburger.png"
        alt="hamburger menu"
        className="w-8 h-8 md:w-10 md:h-10 hamburger-menu"
      />
    </button>
  )
}

export default HamburgerMenu
