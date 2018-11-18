const API_URL = `http://api.darkbots.ru/method`

const {
    request,
    methods
} = require('./lib/index')

class API {
    constructor(key) {
        this.key = key
        this.method = {}
    }

    async call(method, params) {
        params.api_key = this.key
        let data = await request.json.get(`${API_URL}/${method}`, params)
        if (data.error) throw data.error
        return data.response
    }
}

const darkbots = new API('52bcfb126a7bc7a4a8fc0339d3525ee3')

darkbots.call('users.get', {
    vk_id: 493949683
})
    .then(console.log)
    .catch(console.log)