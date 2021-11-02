import {createAPIClient} from './apiHandler';
import {API_URL} from '@env';

const BASE_URL = API_URL;

const myApiClient = createAPIClient(BASE_URL);
const MyApi = {
  login: data => myApiClient.doPost('public/login', data),
  logOut: data => myApiClient.doDelete('public/logout', data),
  test: () => myApiClient.doGet('public/test'),
};

export default MyApi;
