import Http from './http'

class Request extends Http {
    constructor() {
        let baseURL = process.env.NODE_ENV == 'production' ? process.env.VUE_APP_BASE_API : '/api';
        super(baseURL)
    }
}

export default new Request().service;