import type { NextPage } from 'next';
import { projsData } from '../../../utils/projetos';
import Projeto from '../projeto';

const Home: NextPage = () => {
  const projData: any = projsData.get('conformidade');
  return (
    <>
      <Projeto title={projData.title} text={projData.text} icon={projData.icon}>
      </Projeto>
    </>
  )
}

export default Home
