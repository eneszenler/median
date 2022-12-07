import axios from 'axios';

export async function signIn(email, password) {
  const data = {email: email, password: password};
  const config = {
    method: 'post',
    url: 'http://localhost:3000/users/sign-in',
    data: data,
  };
  return await axios(config)
    .then(response => response.data)
    .catch(error => error);
}

export async function signUp(fullname, username, email, password) {
  const data = {
    full_name: fullname,
    username: username,
    email: email,
    password: password,
    pp_url: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
  };
  const config = {
    method: 'post',
    url: 'http://localhost:3000/users',
    data: data,
  };
  return await axios(config)
    .then(response => response.data)
    .catch(error => error);
}

export async function getUserById(userId) {
  const config = {
    method: 'get',
    url: `http://localhost:3000/users/${userId}`,
  };
  return await axios(config)
    .then(response => response.data)
    .catch(error => error);
}
