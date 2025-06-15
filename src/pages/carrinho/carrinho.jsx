import { Navbar } from "../../components/navbar/navbar";
import { useCarrinho } from "../../context/carrinhoContext";
import styles from "./carrinho.module.css"
import { Footer } from "../../components/footer/footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function CarrinhoPage() {
    const { carrinho, setCarrinho, total, setTotal, editarItens } = useCarrinho();

    const navigate = useNavigate()

    const [tipoPagamento, setTipoPagamento] = useState("cartao")
    const [compraConcluida, setCompraConcluida] = useState(false)

    const descontos = {
        pix: 0.85,
        boleto: 0.90,
        cartao: 1
    };

    const totalComDesconto = (total * descontos[tipoPagamento]).toFixed(2);

    const handleChange = (item) => (e) => {

        const value = e.target.value
        if (value === "") return
        const novaQuantidade = Number(value)
        if (isNaN(novaQuantidade) || novaQuantidade < 0) return
        editarItens({ ...item, quantity: novaQuantidade })
    }

    const handleVoltar = () => {
        setCarrinho([])
        navigate("/")
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
                {carrinho.length > 0 ? (
                    <div className={styles.pagamento}>
                        <label className={styles.tipoPagamento}>
                            <input
                                name="tipoPagamento"
                                type="radio"
                                value="pix"
                                checked={tipoPagamento === "pix"}
                                onChange={(e) => setTipoPagamento(e.target.value)}
                            />
                            <p className={styles.tipoPagamentoText}>
                                Pix (15% de desconto)
                            </p>
                        </label>
                        <label className={styles.tipoPagamento}>
                            <input
                                name="tipoPagamento"
                                type="radio"
                                value="boleto"
                                checked={tipoPagamento === "boleto"}
                                onChange={(e) => setTipoPagamento(e.target.value)}
                            />
                            <p className={styles.tipoPagamentoText}>
                                Boleto (10% de desconto)
                            </p>
                        </label>
                        <label className={styles.tipoPagamento}>
                            <input
                                name="tipoPagamento"
                                type="radio"
                                value="cartao"
                                checked={tipoPagamento === "cartao"}
                                onChange={(e) => setTipoPagamento(e.target.value)}
                            />
                            <p className={styles.tipoPagamentoText}>
                                Cartão de crédito
                            </p>
                        </label>
                    </div>
                ) : ""}
                <div className={styles.checkout}>
                    <p className={styles.totalText}>
                        Total: <span className={styles.totalValor}>R$ {totalComDesconto}</span>
                    </p>
                    <p
                        className={styles.comprar}
                        onClick={() => setCompraConcluida(true)}>
                        COMPRAR
                    </p>
                </div>
            </div>
            {
                compraConcluida && (
                    <div className={styles.compraConcluida}>
                        <div className={styles.compraConteudo}>
                            <p className={styles.agradecimento}>Obrigado pela sua compra!</p>
                            <div className={styles.itensComprados}>
                                <p>Você comprou:</p>
                                {
                                    carrinho.map(item => (
                                        <div className={styles.itemComprado}>
                                            <p className={styles.itemCompradoNome}>{item.title}</p>
                                            <p>
                                                {item.quantity} {item.quantity == 1 ? "item" : "itens"}
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>
                            <p
                                className={styles.voltar}
                                onClick={handleVoltar}>
                                VOLTAR PARA O INÍCIO
                            </p>
                        </div>
                    </div>
                )
            }
            <Footer />
        </div>
    );
}
