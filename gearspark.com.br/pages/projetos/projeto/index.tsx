import styles from '../../../styles/Home.module.css'
import Page from '../../default';

type PageProps = {
  title: string,
  text: string,
  icon: React.ReactNode,
  children: React.ReactNode;
}
const Projeto = ({ title, text, icon, children }: PageProps) => {
  return (
    <Page>
      {icon}
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{text}</p>
      {children}
    </Page>
  );
}

export default Projeto
