const { RESTDataSource } = require('apollo-datasource-rest');

class UsersApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://jsonplaceholder.typicode.com';
  }

  async getUserRestAPI() {
    console.log('IN RESTAPI');
    return this.get(`/users`);
  }
}

module.exports = UsersApi;
