import styles from './navbar.module.css';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Home, User, LogIn, LogOut, Search } from 'lucide-react';
import { useCarrinho } from '../../context/carrinhoContext';
import { useState } from 'react';

export function Navbar() {
  const irPara = useNavigate();
  const { carrinho } = useCarrinho();
  const nomeUsuario = localStorage.getItem("nomeusuariologado");

  const quantidadeCarrinho = carrinho.reduce((acc, item) => acc + item.quantity, 0);

  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("");

  const categorias = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ];

  const categoriasPT = {
    electronics: "Eletrônicos",
    jewelery: "Joias",
    "men's clothing": "Roupas Masculinas",
    "women's clothing": "Roupas Femininas"
  };

  const handleBuscar = () => {
    irPara(`/?busca=${encodeURIComponent(busca)}&categoria=${encodeURIComponent(categoria)}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("nomeusuariologado");
    localStorage.removeItem("usuariologado");
    irPara("/");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} onClick={() => irPara("/")}>
        🛍️ <span className={styles.logoText}>SerraStore</span>
      </div>

      <div className={styles.buscaContainer}>
        <input
          type="text"
          placeholder="Buscar produtos..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          <option value="">Todas as categorias</option>
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {categoriasPT[cat]}
            </option>
          ))}
        </select>
        <button onClick={handleBuscar}><Search size={16} /></button>
      </div>

      <ul className={styles.navItens}>
        <li className={styles.navItem} onClick={() => irPara("/")}>
          <Home size={20} />
          <span>Início</span>
        </li>

        <li className={styles.navItem} onClick={() => irPara("/carrinho")}>
          <ShoppingCart size={20} />
          <span>Carrinho</span>
          {quantidadeCarrinho > 0 && (
            <span className={styles.cartBadge}>{quantidadeCarrinho}</span>
          )}
        </li>

        {nomeUsuario ? (
          <>
            <li className={styles.navItem}>
              <User size={20} />
              <span>{nomeUsuario}</span>
            </li>
            <li className={styles.navItem} onClick={handleLogout} style={{ cursor: 'pointer' }}>
              <LogOut size={20} />
              <span>Sair</span>
            </li>
          </>
        ) : (
          <li className={styles.navItem} onClick={() => irPara("/login")}>
            <LogIn size={20} />
            <span>Entrar</span>
          </li>
        )}
      </ul>
    </nav>
  );
}
