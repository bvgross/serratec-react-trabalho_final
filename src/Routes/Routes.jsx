import {Route, Routes} from "react-router-dom";
import {HomePage} from "../pages/homepage/home";
import {LoginPage} from "../pages/login/login";
import {CarrinhoPage} from "../pages/carrinho/carrinho";
import { CadastroPage } from "../pages/cadastro/cadastro";
import { AboutPage } from "../pages/about/about";

export function Routes(){
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/carrinho" element={<CarrinhoPage/>}/>
            <Route path="/cadastro" element={<CadastroPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
        </Routes>
    )
};