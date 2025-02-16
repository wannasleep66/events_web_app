import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://telegram-events-wannasleep66.amvera.io/api',
})
