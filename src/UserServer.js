import axios from 'axios'
import { data } from 'browserslist'

const Userclient = axios.create({
    baseURL: "http://localhost:28395/api/user",
    json: true
})

export default {
    async execute(method, resource, data) {
        return Userclient({
            method,
            url: resource,
            data
        }).then(req => {
            return req.data
        })
    },
    get(data) {
        return this.execute('get', '/', data)
    },
    create(data) {
        this.execute('post', '/', data)
        return 
    },
    update(id, data) {
        return this.execute('put', `/${id}`, data)
    }
}

// export async function createUser(data) {
//     const response = await fetch("http://localhost:28395/user", {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(data)
//     })
//     return await response.json();
// }

// export async function getUser() {

//     const response = await fetch('http://localhost:28395/user', {
//         method: 'GET',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(data)
//     });
//     return await response.json();
//   }