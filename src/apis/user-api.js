import axios from '../config/axios';

export const getProfileUser = profileUserId =>
  axios.get('/users/' + profileUserId);
export const updateProfile = formData => axios.patch('/users', formData);
