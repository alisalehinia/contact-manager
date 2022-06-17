import http from "./httpService";
export default function getContactById(id) {
    return http.get(`/contacts/${id}`);
}