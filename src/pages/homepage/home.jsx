import { CardProduto } from "../../components/cardProduto/cardProduto"
import styles from "./home.module.css"
import apiProdutos from "../../services/apiProdutos"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/navbar/navbar";


export function HomePage() {
    const [produtos, setProdutos] = useState([]);
    const navigate = useNavigate();
    const getProdutos = () => {
        apiProdutos.get("/products?limit=15")
            .then((responde) => {
                setProdutos(responde.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar produtos:", error);
            })
            .finally(() => {
                console.log("Requisição finalizada");
            });
    }
    useEffect(() => {
        getProdutos();
    }, []);

    return (
        <div>
            
            <Navbar>
                
            </Navbar>
            <div className={styles.container}>

                <button onClick={() => (navigate("/carrinho"))}>ir para o carrinho</button>
                {
                    produtos.map((produto) => (
                        <CardProduto key={produto.id} produto={produto} />
                    ))
                }
            </div>
        </div>
    )
}