import { CardProduto } from "../../components/cardProduto/cardProduto"
import styles from "./home.module.css"
import apiProdutos from "../../services/api"
import { useState, useEffect } from "react";
import {carrinhoContext} from "../../context/carrinhoContext"

export function HomePage(){
    const [produtos, setProdutos] = useState([]);
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

    return(
        <div className={styles.container}>
       {
        produtos.map((produto) => (
            <CardProduto key={produto.id} produto={produto} />
        ))
       }
       </div>
    )
}