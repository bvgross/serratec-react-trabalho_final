import { Navbar } from "../../components/navbar/navbar";
import { useCarrinho } from "../../context/carrinhoContext";
import styles from "./carrinho.module.css"
import { Footer } from "../../components/footer/footer";

export function CarrinhoPage() {
    const { carrinho, total, editarItens } = useCarrinho();

    const handleChange = (item) => (e) => {

        const value = e.target.value
        if (value === "") return
        const novaQuantidade = Number(value)
        if (isNaN(novaQuantidade) || novaQuantidade < 0) return
        editarItens({ ...item, quantity: novaQuantidade })
    }


    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.carrinho}>
                <div className={styles.carrinhoConteudo}>
                    {carrinho.length > 0 ? (
                        carrinho.map((item) => (
                            <div className={styles.item} key={item.id}>
                                <p className={styles.itemName}>{item.title}</p>
                                <div className={styles.itemQuantidadePreco}>
                                    <p className={styles.quantidade}>
                                        <input
                                            type="number"
                                            min="0"
                                            value={item.quantity}
                                            className={styles.quantidadeText}
                                            onChange={handleChange(item)}
                                        />
                                    </p>
                                    <p className={styles.preco}>
                                        R$ {(item.price).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Seu carrinho está vazio.</p>
                    )}

                </div>
                <div className={styles.checkout}>
                    <p>Total: R$ {Number(total).toFixed(2)}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
