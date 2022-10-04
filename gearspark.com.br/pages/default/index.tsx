import type { NextPage } from 'next'
import Rodape from '../../components/footer'
import Cabecalho from '../../components/head'
import styles from '../../styles/Home.module.css'

type PageProps = {
  children: React.ReactNode;
}
const Page = ({ children }: PageProps) => {
  return (
    <div className={styles.container}>
      <Cabecalho />
      <main className={styles.main}>
        {children}
      </main>
      <Rodape />
    </div>
  );
}

export default Page
