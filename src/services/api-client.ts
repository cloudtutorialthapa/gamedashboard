import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '2dd20d95597449ba997d74bb059db5f6',
  },
});
