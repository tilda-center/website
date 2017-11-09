import isomorphicFetch from 'isomorphic-fetch';


export const tokenName = 'auth';


export function getAuthToken() {
  if (!window.localStorage[tokenName]) {
    return undefined;
  }
  return window.localStorage[tokenName];
}


export function isLoggedIn() {
  return Boolean(getAuthToken());
}


export function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace('/landing');
  }
}


export function fetch(args) {
  const {
    url,
    body,
    method,
    page,
  } = args;
  const newbody = JSON.stringify(body);
  const newargs = {
    body: newbody,
    method: method || 'GET',
    headers: {
      Accept: 'application/json',
    },
  };
  if (isLoggedIn()) {
    newargs.headers.Authorization = `JWT ${getAuthToken()}`;
  }
  if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
    newargs.headers['Content-Type'] = 'application/json';
  }
  if (page && newargs.method === 'GET') {
    newargs.headers['X-Page'] = page;
  }
  return isomorphicFetch(url, newargs)
    .then(response => {
      if (response.status >= 400) {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response;
    });
}
