import axios from "axios"

const instanceBasket = axios.create({
    baseURL: "http://localhost:3001/basket"
})

export const postBasket = async (obj) => {
    try {
        const res = await instanceBasket.post("", obj)
        return res
    } catch (error) {
        throw error
    }
}

export const getBasketPlant = async () => {
    try {
        const res = await instanceBasket.get("")
        return res
    } catch (error) {
        throw error
    }
}

export const deletePlantBasket = async (id) => {
    try {
        const res = await instanceBasket.delete(`/${id}`)
        return res
    } catch (error) {
        throw error
    }
}