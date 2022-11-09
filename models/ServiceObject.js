export default class ServiceObject {
    constructor (payload = {}) {
        this.id = payload.id || 0
        this.title = payload.title || ''
        this.time = payload.time || ''
        this.price = payload.price || 0
        this.type = payload.type || ''
        this.discount = payload.discount || 0
    }
}