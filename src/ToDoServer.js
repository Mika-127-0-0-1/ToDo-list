import axios from 'axios'

const Listclient = axios.create({
    baseURL: "http://localhost:28395/api/Todo",
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
    getAll(data) {
        return this.execute('get', '/', data)
    },
    create(data) {
        return this.execute('post', '/', data)
    },
    update(data) {
        return this.execute('put', data)
    },
    delete(id) {
        return this.execute('delete', `/${id}`)
    }
}