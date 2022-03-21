import Image from 'next/image'
import useMenu from 'hooks/useMenu'

const HamburgerMenu = () => {
  const { openMenu } = useMenu()
  return (
    <button onClick={openMenu}>
      <div className="hamburger-menu">
        <Image
          src="/images/hamburger.png"
          alt="hamburger menu"
          width={50}
          height={50}
        />
      </div>
    </button>
  )
}

export default HamburgerMenu
