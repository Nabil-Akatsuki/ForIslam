import { api } from "../axios"

export const removeUser = (userId) =>{
    return api.delete(`/users/${userId}`)
}