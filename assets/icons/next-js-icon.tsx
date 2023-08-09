import Image from 'next/image'
import NextjsSVG from '../svg/next-js.svg'

export const NextJsIcon = ({ width = 100, height = 100 }) => (
  <Image src={NextjsSVG} width={width} height={height} alt="Next JS" />
)
