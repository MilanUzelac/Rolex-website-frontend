import axios from 'axios';
class Service {

  constructor() {
    console.log("Service is constructed");
  }

  getRestClient() {
    if (!this.serviceInstance) {
      this.serviceInstance = axios.create({
        baseURL: 'http://localhost:8082/',
        timeout: 10000,
        headers: {
            //'Content-Type': 'application/json'
            'Content-Type': 'multipart/form-data'
          },
      });
    }
    return this.serviceInstance;
  }
}

export default (new Service());