import config from 'config';
import { authHeader } from '../_helpers';

export const proposalService = {
    submit,
    get
};

function submit(proposal) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(proposal)
    };
    return fetch(`${config.apiUrl}/proposals/submit`, requestOptions).then(handleResponse);
}

function get(attr) {
    
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/proposals/get${attr}`, requestOptions).then(handleResponse);
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