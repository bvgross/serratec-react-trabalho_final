import styles from './navbar.module.css';
import { useNavigate } from 'react-router-dom';

export function Navbar() {
  const navigate = useNavigate();

  const usuario=localStorage.getItem("nomeusuariologado")

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navItens}>
        <li style={{cursor: 'pointer'}}onClick={() => navigate("/about")}>sobre</li>
        <li>contato</li>
        <li>perguntas frequentes</li>
        <li>{usuario? usuario:
            (<button onClick={()=>navigate("/login")}>login</button>)
            }</li>
      </ul>
    </nav>
  );
}