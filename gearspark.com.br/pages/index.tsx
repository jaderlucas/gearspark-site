import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Page from './default'

const Home: NextPage = () => {
  return (
    <Page>
      <>
        <h1 className={styles.title}>
          <span><Image src="/logored.png" alt="Gearspark Logo" width={72} height={72} /></span>
          {' '}Gearspark Engenharia
          <Image src="/logo.svg" width={72} height={72} />
        </h1>

        <p className={styles.description}>
          Acesse todos os projetos{' '}
          <code className={styles.code}><Link href="/projetos">clicando aqui</Link></code>
        </p>
      </>
    </Page>
  )
}

export default Home
