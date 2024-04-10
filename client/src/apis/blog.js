import axios from "axios";

export default axios.create({
    baseURL: "https://nginx-proxy.icysky-8546baf3.westus2.azurecontainerapps.io/api/"
    // baseURL: "http://localhost:3000/api/"
});