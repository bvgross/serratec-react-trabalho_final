import { Navigate } from "react-router-dom";

export function RotaPrivada({ children }) {
  const usuarioLogado = localStorage.getItem("usuarioLogado");

  if (!usuarioLogado) {
    return <Navigate to="/login" />; // redireciona se não tiver login
  }

  return children; // mostra a página protegida se estiver logado
}