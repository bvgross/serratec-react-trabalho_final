import { Button } from "../button/button";
import styles from './cardProduto.module.css';
import { useState } from "react";
export function CardProduto({produto}) {
    const [verDescricao, serVerDescricao] = useState(false);
    const descricao=verDescricao
        ? produto.description
        : produto.description.substring(0, 100) + '...';
    return (
        <div className={styles.card}>
            <h2 >{produto.title}</h2>
                <img src={produto.image} alt={produto.title} />
            
                <p className={styles.description}>{descricao}</p>
                <button onClick={() => serVerDescricao(!verDescricao)}>
                    {verDescricao ? 'Ver menos' : 'Ver mais'}
                </button>
                
            <p>R$ {produto.price}</p>
            <Button>Adicionar ao carrinho</Button>
        </div>
    );
}