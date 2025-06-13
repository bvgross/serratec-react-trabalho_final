import { Navbar } from "../../components/navbar/navbar";
import { useCarrinho } from "../../context/carrinhoContext";
import styles from "./carrinho.module.css"

export function CarrinhoPage() {
  const { carrinho } = useCarrinho();
  const { total } = useCarrinho();


  return (
    <div>
      <Navbar></Navbar>
      <div className={styles.container} >

        {
          carrinho.map((item) => (
            <div key={item.id}>
              <p>Produto{item.title}</p>
              <p>Quantidade: {item.quantity}</p>
              <p>R$: {item.price}</p>

            </div>
          ))}
        <p>Total: R${Number(total).toFixed(2)}</p>

      </div>
    </div>
  )
}