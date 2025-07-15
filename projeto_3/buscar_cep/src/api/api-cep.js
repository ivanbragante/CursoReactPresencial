// Importação do axios para o funcionamento da api e buscar o CEP na data base do via CEP!

import axios from "axios";

//  Referencia da URL para a API!
// https://viacep.com.br/ws/01001000/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

// Exporta a API para o uso da aplicação
export default api;