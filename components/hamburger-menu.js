import useMenu from 'hooks/useMenu'

const HamburgerMenu = () => {
  const { openMenu } = useMenu()
  return (
    <button onClick={openMenu}>
      {/* <img
        src="/images/hamburger.png"
        alt="hamburger menu"
        className="hamburger-menu h-8 w-8 md:h-10 md:w-10"
      /> */}
    </button>
  )
}

export default HamburgerMenu
