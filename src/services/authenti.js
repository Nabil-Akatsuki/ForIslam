import { api } from "../axios"

export const logIn = ({userMail, userPass}) =>{
    return api.post('/users/login', {userMail, userPass})
}