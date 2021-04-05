import axios from 'axios';

export async function fetchPhotos() {
  const url = '/photos';
  const { data } = await axios.get(url);

  return data;
}
