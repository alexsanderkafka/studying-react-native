import axios from "axios";

//https://free.currencyconverterapi.com/api/v5/convert?q=USD_BRL&compact=ultra&apiKey=COLA_AQUI_SUA_API

const api = axios.create({
    baseURL: 'https://free.currencyconverterapi.com/api/v5'
});

export default api;