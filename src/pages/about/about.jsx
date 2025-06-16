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
                    />
                    <CardPerfil
                        imagem="/imagens/beatriz.jpg"
                        nome="Beatriz Pinheiro"
                        github="beatrizpinheirods"
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
                    />
                </div>
            </div>
        </>
    );
}