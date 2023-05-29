import { LoginResponse } from '../types/index';
// import { useSelector } from 'react-redux';
// import { RootState } from './../state/store';

export default class APIClient {
  private endpoint: string;

  private static instance: APIClient;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  public static getInstance(endpoint: string):APIClient {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new APIClient(endpoint);
    return this.instance;
  }

  public async login(username: string, password: string): Promise<LoginResponse> {
    const url = `${this.endpoint}/auth/login`;
    const headers = {
      'Content-Type': 'Application/Json',
    };
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        return Promise.reject(new Error('Login was not succesful.Try again'));
      }
      const data: LoginResponse = await response.json();
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
