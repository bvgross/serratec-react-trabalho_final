import { useNavigate } from "react-router-dom";
import styles from "./footer.module.css";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
    const navigate = useNavigate();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.section}>
                    <h4 className={styles.titulo}>Institucional</h4>
                    <ul>
                        <li className={styles.link} onClick={() => navigate("/about")}>Sobre</li>
                        <li className={styles.link} onClick={() => navigate("/termos")}>Termos de Uso</li>
                        <li className={styles.link} onClick={() => navigate("/privacidade")}>Política de Privacidade</li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h4 className={styles.titulo}>Contato</h4>
                    <ul>
                        <li>Email: contato@serrastore.com</li>
                        <li>Telefone: (11) 99999-9999</li>
                        <li className={styles.link} onClick={() => navigate("/contato")}>Fale Conosco</li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h4 className={styles.titulo}>Redes Sociais</h4>
                    <div className={styles.socialIcons}>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <Instagram size={24} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <Facebook size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <Twitter size={24} />
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.copy}>
                <p>© 2025 SerraStore. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
