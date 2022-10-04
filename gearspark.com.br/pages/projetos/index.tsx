import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { projsData } from '../../utils/projetos'
import Page from '../default'
import Card from './card'

const Home: NextPage = () => {
  console.log(projsData);
  projsData.forEach((p) => console.log(p.title));
  return (
    <Page>
      <>
        <h1 className={styles.title}>
          <Link href={"/"}>Gearspark Engenharia</Link>
        </h1>

        <p className={styles.description}>
          Descrição dos serviços prestados em todos tipos de {' '}
          <code className={styles.code}>PROJETOS</code>
        </p>

        <div className={styles.grid}>
          <>
            {
              projsData.forEach((projData) => (
                <Card title={projData.title} text={projData.text} link={projData.link} icon={projData.icon} />
              ))
            }
          </>
        </div>
      </>
    </Page>
  )
}

export default Home
