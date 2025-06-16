import { useState } from "react";
import styles from "./cardPerfil.module.css";

export function CardPerfil({ imagem, nome, github, descricao }) {
    const [expandido, setExpandido] = useState(false);

    function toggleExpandir() {
        setExpandido(!expandido);
    }

    const mostrarBotaoVerMais = (descricao ?? "").length > 100;

    return (
        <div className={styles.cardPer}>
            <img src={imagem} alt={`imagem de perfil ${nome}`} className={styles.imagem} />
            <h2>{nome}</h2>
            <p className={`${styles.descricao} ${expandido ? styles.expandida : ""}`}>
                {descricao}
            </p>

            {mostrarBotaoVerMais && (
                <button className={styles.verMaisBtn} onClick={toggleExpandir}>
                    {expandido ? "Ver menos" : "Ver mais"}
                </button>
            )}

            <a
                className={styles.github}
                href={`https://github.com/${github}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                @{github}
            </a>
        </div>
    );
}
