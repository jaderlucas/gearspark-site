import type { NextPage } from 'next';
import { projsData } from '../../../utils/projetos';
import Projeto from '../projeto';

const Home: NextPage = () => {
  const projData: any = projsData.get('automacao');
  return (
    <>
      <Projeto title={projData.title} text={projData.text} icon={projData.icon}>
      </Projeto>
    </>
  )
}

export default Home
