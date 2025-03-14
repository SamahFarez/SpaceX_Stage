import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.spacexdata.com/v5/',
});

export const getUpcomingLaunch = async () => {
  const response = await api.get('launches/upcoming');
  return response.data[0];
};

export const getLaunches = async () => {
  const response = await api.get('launches/past');
  return response.data;
};