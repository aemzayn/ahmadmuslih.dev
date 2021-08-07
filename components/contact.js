const { AiOutlineGithub, AiOutlineInstagram } = require('react-icons/ai')

const Contact = ({ iconSize = '1em' }) => {
  return (
    <section className="w-full bg-darkBlue" id="contact">
      <div className="w-full flex gap-5 text-blue-700 items-center">
        <a
          href="https://github.com/aemzayn"
          referrerPolicy="no-referrer"
          title="redirect"
        >
          <AiOutlineGithub size={iconSize} aria-label="Github link" />
        </a>
        <a
          href="https://instagram.com/aemzayn"
          referrerPolicy="no-referrer"
          title="redirect"
        >
          <AiOutlineInstagram size={iconSize} aria-label="Instagram link" />
        </a>
      </div>
    </section>
  )
}

export default Contact
