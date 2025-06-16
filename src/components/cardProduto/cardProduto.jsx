import { useState } from "react";
import styles from './cardProduto.module.css';
import { useCarrinho } from "../../context/carrinhoContext";
import { FaCartPlus, FaChevronDown, FaChevronUp } from "react-icons/fa";

export function CardProduto({ produto }) {
  const [verDescricao, serVerDescricao] = useState(false);
  const [animarBotao, setAnimarBotao] = useState(false);
  const { adicionarItens } = useCarrinho();

  const descricao = verDescricao
    ? produto.description
    : produto.description.substring(0, 100) + '...';

  const handleAdicionarCarrinho = () => {
    adicionarItens(produto);
    setAnimarBotao(true);
    setTimeout(() => setAnimarBotao(false), 300);
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{produto.title}</h2>
      <img className={styles.img} src={produto.image} alt={produto.title} />
      <p className={styles.description}>{descricao}</p>

      <div className={styles.botoesContainer}>
        <button
          className={styles.botaoDescricao}
          onClick={() => serVerDescricao(!verDescricao)}
        >
          {verDescricao ? (
            <>
              Ver menos <FaChevronUp />
            </>
          ) : (
            <>
              Ver mais <FaChevronDown />
            </>
          )}
        </button>

        <button
          className={`${styles.botaoCarrinho} ${animarBotao ? styles.efeitoClique : ''}`}
          onClick={handleAdicionarCarrinho}
        >
          <FaCartPlus /> Adicionar ao Carrinho
        </button>
      </div>

      <p className={styles.preco}>R$ {produto.price}</p>
    </div>
  );
}
