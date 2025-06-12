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
            
                <p>{descricao}</p>
                <button onClick={() => serVerDescricao(!verDescricao)}>
                    {verDescricao ? 'Ver menos' : 'Ver mais'}
                </button>
                
            <p>{produto.price}</p>
            <span>{produto.category}</span>
            <Button>Gaste seu dinheiro suado</Button>
        </div>
    );
}