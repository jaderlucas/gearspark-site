import { IoMdFlash } from 'react-icons/io';
import { RiSunFoggyFill } from 'react-icons/ri';
import { BsPlugFill } from 'react-icons/bs';
import { GiBrodieHelmet, GiRobotLeg } from 'react-icons/gi';
import { FaFireExtinguisher } from 'react-icons/fa';
import { CardProps } from '../pages/projetos/card';

export const projsData = new Map<String, CardProps>([
    ['eletrico', {
        title: "Projetos Elétricos",
        text: "Projeto de instalações elétricas de baixa, média e alta tensão garantindo a segurança de pessoas, da instalação e dos bens.",
        link: "/projetos/eletricos",
        icon: <BsPlugFill />
    }],
    ['spda', {
        title: "Projetos SPDA",
        text: "Sistema de proteção contra descargas atmosféricas e seus efeitos dissipando a energia para a terra por um caminho mais seguro.",
        link: "/projetos/spda",
        icon: <IoMdFlash />
    }],
    ['fotovoltaico', {
        title: "Projetos Fotovoltaicos",
        text: "Sistema de captação de energia da luz solar para economia da conta de luz com uso de energia renovável e limpa.",
        link: "/projetos/fotovoltaicos",
        icon: <RiSunFoggyFill />
    }],
    ['nr10', {
        title: "Treinamento NR10",
        text: "Treinamento de segurança em instalações e serviços com eletricidade e no sistema elétrico de potência e suas proximidades (NR10).",
        link: "/projetos/nr10",
        icon: <GiBrodieHelmet />
    }],
    ['conformidade', {
        title: "Conformidade Elétrica",
        text: "Inspeção das instalações elétricas de baixa tensão das edificações e áreas de risco atendendo às exigências da Lei.",
        link: "/projetos/conformidade",
        icon: <FaFireExtinguisher />
    }],
    ['automacao', {
        title: "Automação e Controle",
        text: "Projeto de sistemas automáticos e acionamento remoto em processos integrando às tecnologias de informação.",
        link: "/projetos/automacao",
        icon: <GiRobotLeg />
    }]
]);
