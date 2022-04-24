import axios from 'axios';
const url = "http://localhost:5000/";

export default {
    login(credentials) {
        return axios
            .post(url + 'login', credentials)
            .then(response => response.data);
    },

}
