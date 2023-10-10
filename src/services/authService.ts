import axios from "axios"

export const get = (route:string) => {
    let token = localStorage.getItem('authToken')

    return axios.get(import.meta.env.VITE_SERVER_URL + route, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export const post = (route:string, body:any) => {
    let token = localStorage.getItem('authToken')

    return axios.post(import.meta.env.VITE_SERVER_URL + route, body, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export const put = (route:string, body:any) => {
    let token = localStorage.getItem('authToken')

    return axios.put(import.meta.env.VITE_SERVER_URL + route, body, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export const axiosDelete = (route:string) => {
    let token = localStorage.getItem('authToken')

    return axios.delete(import.meta.env.VITE_SERVER_URL + route, {
        headers: { Authorization: `Bearer ${token}` }
    })
}