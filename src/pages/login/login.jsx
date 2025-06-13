import styles from "./login.module.css"
import { Input } from "../../components/Input/Input"
import { useEffect, useState } from "react"
import apiUsuarios from "../../services/apiUsuarios"
import { useFetcher } from "react-router-dom"
import { Navbar } from "../../components/navbar/navbar";

export function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [usuarios, setUsuarios] = useState([]);  // estado para lista de usuários
    const getUsuarios = async () => {
        try {
            const response = await apiUsuarios.get("/users");
            setUsuarios(response.data);
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
            alert("Erro ao carregar lista de usuários.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = usuarios.find(usuario => usuario.email === email);

        if (user && user.password === password) {
            alert("Usuário logado com sucesso!");
            localStorage.setItem("usuariologado", user.email)
            localStorage.setItem("nomeusuariologado", user.name)
        } else {
            alert("Usuário ou senha incorretos.");
        }
    };

    useEffect(() => {
        getUsuarios();
    }, []);

    return (

        <div>
            <Navbar></Navbar>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label>Email:
                    <Input type="email" placeholder="Email" value={email} onChange={(e) =>
                        setEmail(e.target.value)} />
                </label>
                <label>Senha:
                    <Input type="password" placeholder="Senha" value={password} onChange={(e) =>
                        setPassword(e.target.value)} />
                </label>

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}