import { Navigate } from "react-router-dom";
import { useCarrinho } from "../context/carrinhoContext";

export function RotaPrivada({ children }) {
  const usuarioLogado = localStorage.getItem("usuariologado");
  const { limparCarrinho } = useCarrinho();

  if (!usuarioLogado) {
    limparCarrinho();  
    return <Navigate to="/login" />;
  }

  return children;
}