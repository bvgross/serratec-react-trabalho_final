import { useState } from "react";
import apiUsuarios from "../../services/apiUsuarios";
import styles from "./cadastro.module.css";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import perfil from "../../assets/perfil.png"
import { useNavigate } from "react-router-dom";

export function CadastroPage() {
    const navigate = useNavigate()

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const postUsuario = async () => {
        const user = {
            name,
            password,
            email,
            cpf,
            phone,
            address
        };
        if (password !== confirmPass) {
            alert("As senhas não coincidem!");
            return;
        }
        if (!name.trim() || !password.trim() || !confirmPass.trim() || !email.trim() || !cpf.trim() || !phone.trim() || !address.trim()) {
            alert("Todos os campos devem ser preenchidos");
            return;
        }

        try {
            const response = await apiUsuarios.post("/users", user);
            console.log("Usuário cadastrado", response.data);
            alert("Usuário cadastrado com sucesso!");
            navigate("/login")
        } catch (erro) {
            console.error("Erro ao cadastrar:", erro);
            alert("Erro ao cadastrar usuário.");
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        postUsuario();
    };
    return (
        <div className={styles.cadastro}>
            <Navbar></Navbar>
            <div className={styles.box}>
                <img src={perfil} alt="perfil" />
                <h2>Cadastrar Nova Conta</h2>
                <div className={styles.divForm}>

                    <form onSubmit={handleSubmit}>

                        <div className={styles.linha}>
                            <div className={styles.formGrupo}>
                                <label>Nome</label>
                                <input type="text" placeholder="Digite seu nome" value={name} onChange={(e) =>
                                    setName(e.target.value)} />
                            </div>

                            <div className={styles.formGrupo}>
                                <label>E-mail</label>
                                <input type="email" placeholder="Digite seu e-mail" value={email} onChange={(e) =>
                                    setEmail(e.target.value)} />
                            </div>
                        </div>

                        <div className={styles.linha}>
                            <div className={styles.formGrupo}>
                                <label>CPF</label>
                                <input type="text" placeholder="00000000000" value={cpf} onChange={(e) =>
                                    setCpf(e.target.value.replace(/\D/g, ''))} minLength={11} maxLength={11} />
                            </div>

                            <div className={styles.formGrupo}>
                                <label>Telefone</label>
                                <input type="text" placeholder="(00)00000-0000" value={phone} onChange={(e) =>
                                    setPhone(e.target.value)} minLength={11} maxLength={14} />
                            </div>
                        </div>

                        <div className={styles.linha}>
                            <div className={styles.formGrupo}>
                                <label>Endereço</label>
                                <input type="text" placeholder="Digite seu endereço" value={address} onChange={(e) =>
                                    setAddress(e.target.value)} />
                            </div>

                            <div className={styles.formGrupo}>
                                <label>Senha</label>
                                <input type="password" placeholder="Digite sua senha" value={password} onChange={(e) =>
                                    setPassword(e.target.value)} />
                            </div>
                        </div>

                        <div className={styles.linha}>
                            <div className={styles.formGrupo}>
                                <label>Confirma senha</label>
                                <input type="password" placeholder="Confirme sua senha" value={confirmPass}
                                    onChange={(e) => setConfirmPass(e.target.value)} />
                            </div>
                            <div className={styles.divButton}>
                                <button type="submit">Cadastrar</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}