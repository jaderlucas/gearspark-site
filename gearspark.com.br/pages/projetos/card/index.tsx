import Link from 'next/link'
import styles from '../../../styles/Home.module.css'

export type CardProps = {
  title: string,
  text: string,
  link: string,
  icon: React.ReactNode
}

const Card = ({ title, text, link, icon }: CardProps) => {
  return (
    <div className={styles.card}>
      <div>{icon}</div>
      <div>
        <h2><Link href={link}>{title} &rarr;</Link></h2>
        <p><Link href={link}>{text}</Link></p>
      </div>
    </div>
  )
}

export default Card
