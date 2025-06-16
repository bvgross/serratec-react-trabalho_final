import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { CardProduto } from "../../components/cardProduto/cardProduto";
import apiProdutos from "../../services/apiProdutos";
import styles from "./home.module.css";
import { motion } from "framer-motion";

export function HomePage() {
  const [produtos, setProdutos] = useState([]);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const busca = queryParams.get("busca") || "";
  const categoria = queryParams.get("categoria") || "";

 
  const getProdutos = async () => {
    try {
      const response = await apiProdutos.get("/products");
      let produtosRecebidos = response.data;

     
      if (categoria) {
        produtosRecebidos = produtosRecebidos.filter(
          (produto) => produto.category === categoria
        );
      }

      
      if (busca) {
        produtosRecebidos = produtosRecebidos.filter((produto) =>
          produto.title.toLowerCase().includes(busca.toLowerCase())
        );
      }

      setProdutos(produtosRecebidos);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  useEffect(() => {
    getProdutos();
  }, [location.search]);

  return (
    <div className={styles.homeWrapper}>
      <Navbar />

      <section className={styles.heroSection}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>SerraStore</h1>
          <p>Designs exclusivos para mentes criativas.</p>
        </motion.div>
      </section>

      <motion.section
        className={styles.cardSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className={styles.cardGrid}>
          {produtos.length > 0 ? (
            produtos.map((produto, index) => (
              <motion.div
                key={produto.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CardProduto produto={produto} />
              </motion.div>
            ))
          ) : (
            <p>Nenhum produto encontrado.</p>
          )}
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
