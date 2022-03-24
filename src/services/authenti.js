import { api } from "../axios"

export const logIn = ({userMail, userPass}) =>{
    return api.post('/users/login', {userMail, userPass})
}

export const me = (userId = null)=>{
    return api.get(`/users/${userId}`);
}
export const getData = ({nom, prenom, sexe, userMail}) => {
    return api.get('/users', {nom, prenom, sexe, userMail})
}