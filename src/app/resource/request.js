/**
 * Created by feichongzheng on 17/1/5.
 */
import {appSn} from '../appInfo';
import {loginUser} from './user';

const authorization = () => {
    const user = loginUser();
    let Authorization = {};
    Authorization.appSn = appSn;
    user && (Authorization.token = user.token);
    return JSON.stringify(Authorization);
};

const headers = () => {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Authorization", authorization());
    return headers;
};

const reqBrace = (method, params = {}) => {
    return {
        method: method,
        headers: headers(),
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(params)
    };
};

const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        const error = new Error(response.statusText);
        error.response = response;
        throw error
    }
};

const promise = (req) => {
    return new Promise(function(resolve, reject) {
                fetch(req).then(checkStatus)
                    .then( (res) => {
                    resolve(res);
                    }).catch( (err) => {
                        const res = err.response;
                        if (res) {
                            if (res.status === 4011) {
                                FayUc.logout(() => {
                                    window.location.href = '/login';
                                });
                            }
                        }
                        reject(err);
                    });
                }
            );
};

const get = (apiPath, data) => {
    const req = new Request(apiPath, reqBrace('GET', data));
    return promise(req);
};

const post = (apiPath, data) => {
    const req = new Request(apiPath, reqBrace('POST', data));
    return promise(req);
};

export {get, post};
