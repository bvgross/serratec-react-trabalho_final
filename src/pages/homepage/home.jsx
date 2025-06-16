import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { CardProduto } from "../../components/cardProduto/cardProduto";
import apiProdutos from "../../services/apiProdutos";
import styles from "./home.module.css";
import { motion } from "framer-motion";

export function HomePage() {
    const [produtos, setProdutos] = useState([]);
    const navigate = useNavigate();

    const getProdutos = () => {
        apiProdutos.get("/products?limit=15")
            .then((res) => setProdutos(res.data))
            .catch((error) => console.error("Erro ao buscar produtos:", error));
    };

    useEffect(() => {
        getProdutos();
    }, []);

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
                    {produtos.map((produto, index) => (
                        <motion.div
                            key={produto.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <CardProduto produto={produto} />
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            <Footer />
        </div>
    );
}
