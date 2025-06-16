import styles from "./cardPerfil.module.css";

export function CardPerfil({imagem, nome, github}){

    return(
        <div className={styles.cardPer}>
        <img src={imagem} alt={`imagem de perfil ${nome}`} className={styles.imagem}/>
        <h2>{nome}</h2>
        <a href={`https://github.com/${github}`}target="_blank" rel="noopener noreferrer">@{github}</a>
        </div>
    );
}