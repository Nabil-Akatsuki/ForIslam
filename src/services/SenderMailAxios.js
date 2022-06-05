import { api } from "../axios"

export const senderMailAxios = ({ senderMail, senderMessage }) => {
    return api.post('/sendmail', { senderMail, senderMessage })
}