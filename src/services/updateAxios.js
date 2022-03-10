import { api } from "../axios"

export const updateAxios = ({nom, prenom, sexe, birthDay, userMail, userPass}) => {
    return api.put('/users',{nom, prenom, sexe, birthDay, userMail, userPass})
}