import Image from 'next/image'
import postgresqlSVG from '../svg/postgresql.svg'

export const PostgresIcon = ({ width = 100, height = 100 }) => (
  <Image src={postgresqlSVG} width={width} height={height} alt="Next JS" />
)
