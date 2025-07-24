import axios from "axios"

const apiFetch = axios.create({
    baseURL: import.meta.env.VITE_HTTP_API_BASE_URL
})

import type { Lot } from "@/stores/auction"

export function fetchAllLots() {
    return apiFetch.get<Array<Lot>>("/auction/lot/all").then(res => res.data)
}