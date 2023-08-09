import Image from 'next/image'
import typescriptSVG from '../svg/typescript.svg'

export const TypescriptIcon = ({ width = 100, height = 100 }) => (
  <Image src={typescriptSVG} width={width} height={height} alt="Next JS" />
)
