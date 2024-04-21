import axios from "axios"

const instancePalnts = axios.create({
    baseURL: "http://localhost:3001/plants"
})

export const getPlants = async () => {
    try {
        const res = await instancePalnts.get("")
        console.log(res.data);
        return res
    } catch (error) {
        throw error
    }
}

export const getPlantById = async (id) => {
    try {
        const res = await instancePalnts.get(`?id=${id}`)
        console.log(res);
        return res
    } catch (error) {
        throw error
    }
}

export const getPlantByCategory = async (category) => {
    try {
        const res = await instancePalnts.get(`?category=${category}`)
        console.log(res);
        return res

    } catch (error) {
        throw error
    }
}

export const patchPlant = async (id, obj) => {
    try {
        const res = await instancePalnts.patch(`/${id}`, obj)
        return res
    } catch (error) {
        throw error
    }
}

export const getPlantLiked = async () => {
    try {
        const res = await instancePalnts.get("?is_liked=true")
        return res
    } catch (error) {
        throw error
    }
}

export const getSearchPlant = async (text) => {
    try {
        const res = await instancePalnts.get(`?name=${text}`)
        return res
    } catch (error) {
        throw error
    }
}