import { api } from "../axios"

export const getUser = ({nom, prenom, sexe, userMail, date})=>{
    return api.get('/users', { nom, prenom, sexe,userMail, date })
}
