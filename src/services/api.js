import axios from "axios"

const api = axios.create({
    baseURL: "https://tkmanagement.herokuapp.com",
})

export default api