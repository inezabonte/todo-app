import axios from 'axios'

const token = window.localStorage.getItem('loginToken')


const instance = axios.create({
    baseURL: 'https://todo-app-ineza.herokuapp.com/api/v1'
})

if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
} else {
    delete instance.defaults.headers.common['Authorization'];
}
   
export default instance