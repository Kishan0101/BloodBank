import axios from "axios";

const baseURL = "https://blood-bank-one-rho.vercel.app/";

export default axios.create({ baseURL: baseURL });
