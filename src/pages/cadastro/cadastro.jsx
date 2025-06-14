import { useState } from "react";
import apiUsuarios from "../../services/apiUsuarios";
import { Input } from "../../components/Input/Input";
import styles from "./cadastro.module.css";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";

export function CadastroPage() {
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
        try {
            const response = await apiUsuarios.post("/users", user);
            console.log("Usuário cadastrado", response.data);
            alert("Usuário cadastrado com sucesso!");
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
            <form className={styles.form} onSubmit={handleSubmit}>
                <label>Nome:
                    <Input type="text" placeholder="Nome" value={name} onChange={(e) =>
                        setName(e.target.value)} />
                </label>
                <label>Senha:
                    <Input type="password" placeholder="Senha" value={password} onChange={(e) =>
                        setPassword(e.target.value)} />
                </label>
                <label>Confirmar Senha:
                    <Input type="password" placeholder="Confirmar Senha" value={confirmPass}
                        onChange={(e) => setConfirmPass(e.target.value)} />
                </label>
                <label>Email:
                    <Input type="email" placeholder="Email" value={email} onChange={(e) =>
                        setEmail(e.target.value)} />
                </label>
                <label>CPF:
                    <Input type="text" placeholder="CPF" value={cpf} onChange={(e) =>
                        setCpf(e.target.value)} />
                </label>
                <label>Telefone:
                    <Input type="text" placeholder="Telefone" value={phone} onChange={(e) =>
                        setPhone(e.target.value)} />
                </label>
                <label>Endereço:
                    <Input type="text" placeholder="Endereço" value={address} onChange={(e) =>
                        setAddress(e.target.value)} />
                </label>
                <button type="submit">Cadastrar</button>
            </form>
             <Footer></Footer>
        </div>
    );
}