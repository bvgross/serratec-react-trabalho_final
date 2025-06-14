import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { CardProduto } from "../../components/cardProduto/cardProduto";
import apiProdutos from "../../services/apiProdutos";
import styles from "./home.module.css";

export function HomePage() {
  const [produtos, setProdutos] = useState([]);
  const location = useLocation();

  const getProdutos = () => {
    const params = new URLSearchParams(location.search);
    const busca = params.get("busca") || "";
    const categoria = params.get("categoria") || "";

    let endpoint = "/products";
    let options = { params: { limit: 15 } };

    if (categoria) {
      endpoint = `/products/category/${encodeURIComponent(categoria)}`;
    }

    apiProdutos
      .get(endpoint, options)
      .then((res) => {
        let lista = res.data;

        if (busca) {
          lista = lista.filter((produto) =>
            produto.title.toLowerCase().includes(busca.toLowerCase())
          );
        }

        setProdutos(lista);
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
        setProdutos([]);
      });
  };

  useEffect(() => {
    getProdutos();
  }, [location.search]);

  return (
    <div className={styles.pageContainer}>
      <Navbar />

      <main className={styles.content}>
        <div className={styles.container}>
          {produtos.length > 0 ? (
            produtos.map((produto) => (
              <CardProduto key={produto.id} produto={produto} />
            ))
          ) : (
            <p>Nenhum produto encontrado.</p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}