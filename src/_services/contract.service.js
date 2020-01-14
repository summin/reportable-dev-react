import config from 'config';
import { authHeader } from '../_helpers';

export const contractsService = {
    submit,
    modify,
    get
};

function submit(contracts) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(contracts)
    };
    return fetch(`${config.apiUrl}/contracts`, requestOptions).then(handleResponse);
}



function get(attr) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}/contracts/${attr}`, requestOptions).then(handleResponse);
}

function modify(attr) {
    console.log(attr)
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(attr)
    };
    return fetch(`${config.apiUrl}/contracts/${attr._id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}