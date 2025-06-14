import { useNavigate } from "react-router-dom";
import styles from "./footer.module.css"
export function Footer() {

    const navigate = useNavigate();

    return (
        <footer className={styles.footer}>
            <li className={styles.about} onClick={() => navigate("/about")}>sobre</li>

        </footer>
    )
}