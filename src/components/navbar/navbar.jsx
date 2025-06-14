import styles from './navbar.module.css';
import { useNavigate } from 'react-router-dom';

export function Navbar() {
  const navigate = useNavigate();

  const usuario=localStorage.getItem("nomeusuariologado")

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navItens}>
        <li onClick={() => navigate("/")}>home</li>
        <li onClick={() => navigate("/carrinho")}>carrinho</li>
        <li>{usuario? usuario:
            (<li onClick={()=>navigate("/login")}>login</li>)
            }</li>
      </ul>
    </nav>
  );
}