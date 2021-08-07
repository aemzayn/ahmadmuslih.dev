const { AiOutlineGithub, AiOutlineInstagram } = require('react-icons/ai')

const Contact = ({ iconSize = '1em' }) => {
  return (
    <section className="w-full" id="contact">
      <div className="w-full flex gap-5 text-blue-700 items-center">
        <a
          href="https://github.com/aemzayn"
          referrerPolicy="no-referrer"
          title="redirect"
        >
          <AiOutlineGithub
            size={iconSize}
            aria-label="Github link"
            className="hidden md:block"
          />
          <AiOutlineGithub
            size={25}
            aria-label="Github link"
            className="md:hidden"
          />
        </a>
        <a
          href="https://instagram.com/aemzayn"
          referrerPolicy="no-referrer"
          title="redirect"
        >
          <AiOutlineInstagram
            size={iconSize}
            aria-label="Instagram link"
            className="hidden md:block"
          />
          <AiOutlineInstagram
            size={25}
            aria-label="Instagram link"
            className="md:hidden"
          />
        </a>
      </div>
    </section>
  )
}

export default Contact
