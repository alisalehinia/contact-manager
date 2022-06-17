import http from './httpService'
export default function addContacts(data) {
    return http.post('/contacts', data);
}