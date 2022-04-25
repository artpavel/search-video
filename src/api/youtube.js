import axios from 'axios';

const API_KEY = 'AIzaSyAh40cFooPUKspZmjAQgb2y0FFM--l0U1g';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: API_KEY,
  },
});
