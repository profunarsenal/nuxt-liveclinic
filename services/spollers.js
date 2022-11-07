export default class Spollers {
    constructor (axios) {
        this.axios = axios
    }

    async getData () {
        const { data } = await this.axios.get('/spollers.json')
        return data
    }
}