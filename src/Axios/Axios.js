import axios from "axios"

// Create an axios instance that will be used to get data from the movid db
export const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})
