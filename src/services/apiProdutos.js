import axios from "axios";

const apiProdutos = axios.create({
    baseURL: "https://fakestoreapi.com",
});


export default apiProdutos;
