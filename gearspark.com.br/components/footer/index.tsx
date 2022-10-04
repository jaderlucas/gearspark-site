import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const Rodape = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://www.sparkgear.com.br"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className={styles.logo}>
          <Image src="/sparkgear.svg" alt="Sparkgear Logo" width={24} height={24} />
        </span>
        Sparkgear Sistemas
      </a>
    </footer>
  )
}

export default Rodape
