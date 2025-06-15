import styles from "./login.module.css";
import { Input } from "../../components/Input/Input";
import { useEffect, useState } from "react";
import apiUsuarios from "../../services/apiUsuarios";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";

export function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [usuarios, setUsuarios] = useState([]);

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
            localStorage.setItem("usuariologado", user.email);
            localStorage.setItem("nomeusuariologado", user.name);
            navigate("/");
        } else {
            alert("Usuário ou senha incorretos.");
        }
    };

    useEffect(() => {
        getUsuarios();
    }, []);

    return (
        <div className={styles.login}>
            <Navbar />

            <div className={styles.loginBox}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label>Email:
                        <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label>Senha:
                        <Input
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <button type="submit">Entrar</button>
                </form>

                <a className={styles.link} onClick={() => navigate("/cadastro")}>Cadastrar</a>
            </div>

            <Footer />
        </div>
    );
}