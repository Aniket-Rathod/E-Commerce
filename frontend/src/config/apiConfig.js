import axios from "axios"


export const AIP_BASE_URL = "http://localhost:8080"

const jwt = localStorage.getItem("jwt")

export const api = axios.create({
    baseURL: AIP_BASE_URL,
    headers: {
        "Authorization": `Bearer ${jwt}`,
        "Content-Type": "application/json"
    }
})