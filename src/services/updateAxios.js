import { api } from "../axios"

export const updateAxios = (id = null, { nom, prenom, sexe, birthDay, userMail, userPass }) => {
    return api.put(`/users/${id}`, { nom, prenom, sexe, birthDay, userMail, userPass })
}
export const blockUser = (userId) =>{
    return api.put(`/users/blocus/${userId}`, {checked: false})
}