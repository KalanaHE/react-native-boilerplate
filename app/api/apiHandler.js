import fetch from 'isomorphic-fetch';
import {
  getAccessToken,
  getRefreshToken,
  getUserAgent,
} from '../utils/store.utils';

const getHeaders = async (stringify = true) => {
  const refreshToken = await getRefreshToken();
  const accessToken = await getAccessToken();
  const userAgent = await getUserAgent();

  const basicHeaders = {
    'Access-Control-Allow-Headers': '*',
    Accept: 'application/json',
    cache: 'no-cache',
    mode: 'cors',
    redirect: 'follow',
    referrer: 'no-referrer',
    'Content-Type': 'application/json',
    'x-user-agent': userAgent,
    Authorization: `Bearer ${accessToken}`,
    refreshToken: refreshToken,
  };
  if (stringify) {
    basicHeaders['Content-Type'] = 'application/json';
  }
  return basicHeaders;
};

const constructApiURL = (apiBaseURL, path) => `${apiBaseURL}${path}`;

export const createAPIClient = apiBaseURL => ({
  doGet: async path => {
    return fetch(constructApiURL(apiBaseURL, path), {
      method: 'GET',
      headers: await getHeaders(stringify),
      credentials: 'include',
      timeout: 1000,
    });
  },

  doPost: async (path, data, stringify = true) => {
    return fetch(constructApiURL(apiBaseURL, path), {
      method: 'POST',
      headers: await getHeaders(stringify),
      credentials: 'include',
      timeout: 1000,
      redirect: 'follow',
      body: stringify ? JSON.stringify(data) : data,
    });
  },

  doPut: async (path, data) => {
    return fetch(constructApiURL(apiBaseURL, path), {
      method: 'PUT',
      headers: await getHeaders(),
      credentials: 'include',
      timeout: 1000,
      body: JSON.stringify(data),
    });
  },

  doPatch: async (path, data, stringify = true) => {
    return fetch(constructApiURL(apiBaseURL, path), {
      method: 'PATCH',
      headers: await getHeaders(stringify),
      credentials: 'include',
      timeout: 1000,
      body: JSON.stringify(data),
    });
  },
  doDelete: async (path, data) => {
    return fetch(constructApiURL(apiBaseURL, path), {
      method: 'DELETE',
      headers: await getHeaders(),
      credentials: 'include',
      timeout: 1000,
      'Content-Type': 'application/json',
      query: JSON.stringify(data),
      params: JSON.stringify(data),
      body: JSON.stringify(data),
    });
  },
});
