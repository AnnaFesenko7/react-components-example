import axios from 'axios';

axios.defaults.baseURL = 'https://6329c6ebd2c97d8c52702b81.mockapi.io/API';

export const getPublications = async () => {
  const response = await axios.get('/publications');
  return response.data;
};

export const addPublication = async data => {
  const response = await axios.post('/publications', data);
  return response.data;
};

export const deletePublication = async id => {
  const response = await axios.delete(`/publications/${id}`);
  return response.data;
};
