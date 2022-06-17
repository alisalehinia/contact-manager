import http from "./httpService";
export default function deleteContacts(id) {
    return http.delete(`/contacts/${id}`);
}