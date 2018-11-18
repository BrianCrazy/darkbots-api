sdsdconst API_URL = `http://api.darkbots.ru/method`

const {
    request,
    methods
} = require('./lib/index')

class API {
    constructor(key) {
        this.key = key
    }

    async call(method, params) {
        params.api_key = this.key
        let data = await request.json.get(`${API_URL}/${method}`, params)
        if (data.error) throw data.error
        return data.response
    }
}

exports = API
