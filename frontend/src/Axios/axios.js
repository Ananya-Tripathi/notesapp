import axios from "axios"
const instance = axios.create({
    baseURL:"https://noteapp-apqs.onrender.com/api"
})
export default instance