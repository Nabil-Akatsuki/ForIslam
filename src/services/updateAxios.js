import { api } from "../axios"

export const updateAxios = (id = null, { nom, prenom, sexe, birthDay, userMail, userPass }) => {
    return api.put(`/users/${id}`, { nom, prenom, sexe, birthDay, userMail, userPass })
}