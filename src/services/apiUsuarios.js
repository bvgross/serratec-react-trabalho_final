import axios from "axios";

const apiUsuarios = axios.create({
    
    baseURL: "https://681cefc3f74de1d219ae5154.mockapi.io/api/v1"
});

export default apiUsuarios;