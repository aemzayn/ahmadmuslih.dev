import {
  NextJsIcon,
  NodeJsIcon,
  PostgresIcon,
  TailwindIcon,
  TypescriptIcon,
} from 'assets/icons'

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="About section"
      className="flex flex-col items-center gap-10 py-20 text-center lg:py-40"
    >
      <h1 className="title gradient-text-light font-monument text-6xl">
        About me
      </h1>
      <p className="max-w-4xl px-4 tracking-widest md:text-2xl">
        Hi! I'm Ahmad Muslih Zain, Indonesian software engineer in Turkey.
        Currently I am working on Germany-based company in Istanbul Vivavis
        Turkey. Here is my current stack.
      </p>
      <div className="flex flex-col items-center gap-x-10 gap-y-5 lg:flex-row">
        <NextJsIcon />
        <TypescriptIcon />
        <TailwindIcon />
        <NodeJsIcon />
        <PostgresIcon />
      </div>
    </section>
  )
}
