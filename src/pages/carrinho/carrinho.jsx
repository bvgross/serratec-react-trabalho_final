import { Navbar } from "../../components/navbar/navbar";
import { useCarrinho } from "../../context/carrinhoContext";
import styles from "./carrinho.module.css"
import { Footer } from "../../components/footer/footer";

export function CarrinhoPage() {
  const { carrinho } = useCarrinho();
  const { total } = useCarrinho();

  return (
    <div className={styles.carrinho}>
      <Navbar />
      
      <div className={styles.carrinhoConteudo}>
        {carrinho.length > 0 ? (
          carrinho.map((item) => (
            <div key={item.id}>
              <p>Produto: {item.title}</p>
              <p>Quantidade: {item.quantity}</p>
              <p>R$: {item.price}</p>
            </div>
          ))
        ) : (
          <p>Seu carrinho está vazio.</p>
        )}

        <p>Total: R${Number(total).toFixed(2)}</p>
      </div>

      <Footer />
    </div>
  );
}
