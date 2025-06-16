import { Navbar } from "../../components/navbar/navbar";
import { CardPerfil } from "../../components/cardPerfil/cardPerfil";
import styles from "./about.module.css";

export function AboutPage() {

    return (
        <>
            <Navbar></Navbar>

            <div className={styles.cont}>
                <h1 className={styles.cabecalho}>Equipe de Desenvolvedores</h1>
                <div className={styles.grid}>
                    <CardPerfil
                        imagem="/imagens/leticia.jpeg"
                        nome="Leticia Teles"
                        github="LeticiiaTeles"
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
                    />
                    <CardPerfil
                        imagem="/imagens/beatriz.jpg"
                        nome="Beatriz Pinheiro"
                        github="beatrizpinheirods"
                    />
                    <CardPerfil
                        imagem="/imagens/arthur.png"
                        nome="Arthur Gomes"
                        github="arthSGM"
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
