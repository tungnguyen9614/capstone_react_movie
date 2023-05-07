import axios from "axios"

export const TOKEN_CYBERSOFT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udGVuZCA3NCIsIkhldEhhblN0cmluZyI6IjE2LzA5LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5NDgyMjQwMDAwMCIsIm5iZiI6MTY2ODI3MjQwMCwiZXhwIjoxNjk0OTcwMDAwfQ.3TXoqM7cOKUQgRGc0plbpUsV406snlZBBeHlA7RxJYk"

const http = axios.create()
const baseURL = "https://movienew.cybersoft.edu.vn/"

http.interceptors.request.use((config)=>{
    return {
        ...config,
        headers: {
            TokenCybersoft: TOKEN_CYBERSOFT,
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('user'))?.accessToken}`,
           
        },
        baseURL,
    }
})

export default http;
