import axios from 'axios';

const baseUrl = 'https://api.github.com/search/repositories';
export default async function runGetRequestWithParams(repoName) {
  const response = await axios.get(`${baseUrl}?q=${repoName}`);
  if (response.status === 200) {
    return response;
  }
  return "Repo Not Found";
}
