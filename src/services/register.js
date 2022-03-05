import { api } from "../axios"

export const register = ({nom, prenom, sexe, birthDay, userMail, userPass}) => {
    return api.post('/users',{nom, prenom, sexe, birthDay, userMail, userPass})
}