import {createAPIClient} from './apiHandler';
import {API_URL} from '@env';

const BASE_URL = API_URL;

const myApiClient = createAPIClient(BASE_URL);
const MyApi = {
  login: data => myApiClient.doPost('api/public/login', data),
  logOut: data => myApiClient.doDelete('api/public/logout', data),
  sessionVerify: () => myApiClient.doGet('api/public/session/verify'),
};

export default MyApi;
