import axios from "axios";

const instanceUser = axios.create({
    baseURL: "http://localhost:3001/user"
})

export const getUserInfo = async () => {
    try {
        const res = await instanceUser.get("")
        console.log(res);
        return res
    } catch (error) {
        throw error
    }
}

export const patchUser = async (obj) => {
    try {
        const res = await instanceUser.patch("/1", obj)
        return res
    } catch (error) {
        throw error
    }
}

