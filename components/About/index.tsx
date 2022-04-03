export type AboutProps = {}

export default function About({}: AboutProps) {
  return (
    <section
      id="about"
      aria-labelledby="About section"
      className="flex flex-col items-center gap-10 py-20 text-center"
    >
      <h1 className="title gradient-text-light font-monument text-6xl">
        About
      </h1>
      <p className="max-w-4xl text-sm tracking-widest md:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nihil
        iure illo corporis porro a veritatis qui molestias sint beatae, aperiam
        voluptatem amet unde exercitationem suscipit nisi nobis eaque molestiae
        eum minima vitae sapiente? In, repellendus, soluta molestiae veritatis
        nobis accusantium voluptatem quos voluptatum possimus atque praesentium
        deleniti aut neque.
      </p>
    </section>
  )
}
