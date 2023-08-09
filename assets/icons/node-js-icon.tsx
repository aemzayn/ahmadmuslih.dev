import Image from 'next/image'
import nodejsSVG from '../svg/node-js.svg'

export const NodeJsIcon = ({ width = 100, height = 100 }) => (
  <Image src={nodejsSVG} alt="Node js icon" width={width} height={height} />
)
