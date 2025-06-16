import { Navbar } from "../../components/navbar/navbar";
import { CardPerfil } from "../../components/cardPerfil/cardPerfil";
import styles from "./about.module.css";

export function AboutPage() {

    return (
        <>
            <Navbar />

            <div className={styles.cont}>
                <h1 className={styles.cabecalho}>Equipe de Desenvolvedores</h1>
                <div className={styles.grid}>
                    <CardPerfil
                        imagem="/imagens/arthur.png"
                        nome="Arthur Gomes"
                        github="arthSGM"
                        descricao="Tenho 24 anos e venho do mundo dos drinks 
                         — trabalho como barman — mas resolvi trocar a coqueteleira pelo teclado e migrar pra área de tecnologia. 
                         Comecei a estudar programação e, no início, estava curtindo bastante o front-end... até chegar o temido React.
                          Hoje em dia, estou numa relação de amor e ódio com o código — na real, ando odiando o front e o back na mesma medida.
                           Mesmo com as dificuldades, sigo tentando, porque acredito que no fim essa virada vai valer a pena."
                    />
                    <CardPerfil
                        imagem="/imagens/beatriz.jpg"
                        nome="Beatriz Pinheiro"
                        github="beatrizpinheirods"
                        descricao="Procurando um novo caminho para trilhar, encontrou o caminho da programação.  
                        Apesar das dificuldades de ser iniciante, sente q se encontrou, especialmente em front-end. 
                        Possui muita persistência e trabalha bem equipe."
                    />
                    <CardPerfil
                        imagem="/imagens/bruno.jpg"
                        nome="Bruno Gross"
                        github="bvgross"
                    />
                    <CardPerfil
                        imagem="/imagens/leo.png"
                        nome="Carlos Leonardo Otoline"
                        github="OtolineLeo"
                        descricao="Ouvinte atento e motivado
                         com paixão por desenvolvimento front-end e back-end. 
                         Possui pensamento analítico apurado e é um verdadeiro companheiro de equipe.
                          Atualmente cursando Ciência da Computação no 3º período,
                           é um hard worker dedicado a entregar o melhor em cada desafio."
                    />
                    <CardPerfil
                        imagem="/imagens/leticia.jpeg"
                        nome="Leticia Teles"
                        github="LeticiiaTeles"
                        descricao="Comunicativa, empática e curiosa, 
                       se destaca pela facilidade em colaborar e resolver problemas com lógica e criatividade.
                        Tem preferência por desenvolvimento back-end, mas se encanta pela parte visual no front-end.
                         Gosta de trabalhar em grupo, é flexível e valoriza a prática constante como forma de aprendizado."
                    />
                    <CardPerfil
                        imagem="/imagens/lucas.jpg"
                        nome="Lucas Prado"
                        github="LucasPrado2805"
                        descricao="Natural de São Paulo e atualmente moro em Petrópolis. 
                        Estou cursando o quarto semestre de Engenharia de Computação e 
                        venho construindo minha trajetória com foco em me tornar um profissional de tecnologia completo,
                         tanto no aspecto técnico quanto no comportamental. Valorizo o trabalho com propósito,
                          busco evolução contínua e acredito que a tecnologia deve ser usada para melhorar as relações entre pessoas e sociedade,
                           incentivando o uso consciente e construtivo da tecnologia. Acho desafiador trabalhar tanto com frontend quanto com backend, 
                           e encaro esses desafios como oportunidades de crescimento."
                    />
                </div>
            </div>
        </>
    );
}