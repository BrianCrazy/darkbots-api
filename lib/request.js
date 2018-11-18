const request = require('request')

const _request = {

    get: (url, query = {}) => {
        url = `${url}${_query(query)}`
        return new Promise((res, err) => {
            request.get(url, (error, response, body) => {
                if (error) return err(error)
                return res(body)
            })
        })
    },

    post: (url, _body) => {
        return new Promise((res, err) => {
            request.post(url, {body: _body}, (error, response, body) => {
                if (error) return err(error)
                return res(body)
            })
        })
    },

    json: {
        get: async (url, params) => {
            var data;
            try {
                let body = await _request.get(url, params)
                data = JSON.parse(body)
            } catch (err) {
                data = new Error('JSON NOT PARSED!')
            }
            return data
        }
    }
}

function _query(data) {
    if(Object.keys(data).length == 0) return ''
    return `?${Object.keys(data).map(a=> `${a}=${data[a]}`).join('&')}`
}

module.exports = _request