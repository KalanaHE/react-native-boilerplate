import {createAPIClient} from './apiHandler';
import {API_URL} from '@env';

const BASE_URL = API_URL;
const myApiClient = createAPIClient(BASE_URL);
const MyApi = {
  getCountries: () => myApiClient.doGet('data/v1/countries'),
};

export default MyApi;
