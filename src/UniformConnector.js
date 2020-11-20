class HttpError extends Error {
    constructor(message, response) {
        super(message);
        this.response = response;
    }
}

function normalizeUrl(url) {
    let lastSymbol = url.slice(-1);
    if (lastSymbol !== '/') {
        url += '/';
    }
    return url;
}

let config = require('config');

class UniformConnector {
    constructor() {
        this.host = normalizeUrl(config.apiUrl);
    }

    sendForm(form) {
        let payload = JSON.stringify({
            json: JSON.stringify(form)
        });
        return fetch(`${this.host}api/forms/`, {
            method: "POST",
            body: payload,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.ok === false) {
                throw new HttpError('Send form request failed.', response);
            }
        });
    }

    searchForm(query) {
        let payload = JSON.stringify({
            request: query
        });
        return fetch(`${this.host}api/forms/search`, {
            method: "POST",
            body: payload,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(response => {
            if (response.ok) {
                return response.json().then(data => {
                    return data.result;
                });
            }
            else {
                throw new HttpError('Search form request failed.', response);
            }
        });
    }
}

export { HttpError };
export default UniformConnector;