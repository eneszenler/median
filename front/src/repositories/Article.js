import axios from 'axios'

export async function getArticles() {
  const config = {
    method: 'get',
    url: 'http://localhost:3000/articles',
  }
  return await axios(config)
    .then((response) => response.data)
    .catch((error) => error)
}