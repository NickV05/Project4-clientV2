import axios from "axios"

export const get = (route) => {
    return axios.get(import.meta.env.VITE_SERVER_URL + route)
}

export const post = (route, body) => {
    return axios.post(import.meta.env.VITE_SERVER_URL + route, body)
}