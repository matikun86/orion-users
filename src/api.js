const API = 'http://jsonplaceholder.typicode.com';

const handleErrors = (response) => {
  if (!response.ok) {
    console.error(response.statusText, response.url); // eslint-disable-line
    throw Error(response.statusText);
  }
  return response;
};

const getAll = () => {
  return fetch(`${API}/users`, {
    method: 'GET', mode: 'cors'
  })
  .then(handleErrors)
  .then((response) => response.json())
}

const getUser = (id) => {
  return fetch(`${API}/users/${id}`, {
      method: 'GET', mode: 'cors'
    })
    .then(handleErrors)
    .then((response) => response.json())
}

export default class Api {

  static get(id) {
    return id ? getUser(id) : getAll();
  }

}
