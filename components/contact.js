const { AiOutlineGithub, AiOutlineInstagram } = require("react-icons/ai");

const Contact = () => {
  return (
    <div className="w-full flex gap-5 text-blue-700 items-center px-10 bg-darkBlue pt-20 pb-10">
      <a
        href="https://github.com/aemzayn"
        referrerPolicy="no-referrer"
        title="redirect"
      >
        <AiOutlineGithub className="text-2xl" aria-label="Github link" />
      </a>
      <a
        href="https://instagram.com/aemzayn"
        referrerPolicy="no-referrer"
        title="redirect"
      >
        <AiOutlineInstagram className="text-2xl" aria-label="Instagram link" />
      </a>
    </div>
  );
};

export default Contact;
