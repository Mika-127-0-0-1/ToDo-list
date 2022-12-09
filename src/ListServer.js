import axios from 'axios'

const Listclient = axios.create({
    baseURL: "http://localhost:28395/api/list",
    json: true
})

export default {
    async execute(method, resource, data) {
        return Listclient({
            method,
            url: resource,
            data
        }).then(req => {
            return req.data
        })
    },
    getAll(id) {
        return this.execute('post', `/${id}`)
    },
    create(data) {
        return this.execute('post', '/', data)
    },
    update(id, data) {
        return this.execute('put', `/${id}`, data)
    },
    delete(id) {
        return this.execute('delete', `/${id}`)
    }
}