import axios from 'axios'

const FileHandeler = axios.create({
    baseURL: 'http://localhost:28395/api/list/savefile',
    json: true
})

export default {
    async execute(method, resource, data) {
        return FileHandeler({
            method,
            url: resource,
            data
        }).then(req => {
            return req.data
        })
    },
    getAll() {
        return this.execute('get', '/')
    },
    save(data) {
        return this.execute('post', '/', data)
    }
}