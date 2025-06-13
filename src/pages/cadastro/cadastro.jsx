import { useEffect, useState } from "react"
import apiUsuarios from "../../services/apiUsuarios"
import { Input } from "../../components/Input/Input"
import styles from "./cadastro.module.css"


export function CadastroPage() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");


    const postUsuario =  async () => {
        try{
     const response = await apiUsuarios.post("/users", user);
     console.log("Usuário cadastrado", response.data);
         } catch (erro) {
          console.error("Erro ao cadastrar:", erro);
        }
    };

    const getUsuarios = async () => {
        try{
            const response = await apiUsuarios.get("/users");
            console.log("Usuários:", response.data);
        }catch (erro) {
            console.error("Erro ao buscar usuários:", erro);
        }
    };


    return (
        <form className= {styles.form}>
            <label>Nome: 
            <Input
            type="text"
            placeholder="Nome"
            value={name}
            // onChange={}
            />    
            </label>
            <label>Senha:  
            <Input type="text" />
            </label>
            <label>Confirmar Senha:  
            <Input type="text" />
            </label>
            <label>Email: 
            <Input type="text" />
            </label>
            <label>Cpf: 
            <Input type="text" />
            </label>
            <label>Telefone: 
            <Input type="text" />
            </label>
            <label>Endereço: 
            <Input type="text" />
            </label> 
        </form>
    )
}