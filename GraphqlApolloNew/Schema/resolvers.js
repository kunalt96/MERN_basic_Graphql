// const usersData = require('../MOCK_DATA.json');
const userData = require('../MOCK_DATA.json');

const resolvers = {
  Query: {
    getAllUsers() {
      console.log('I AM CALLED');
      return userData;
    },
    getUsersById(parent, args) {
      return userData[args.id - 1];
    },
    getUsersRestApi(_, __, { dataSources }) {
      console.log('----');
      return dataSources.usersAPI.getUserRestAPI();
    },
  },
  Mutation: {
    createUser(parent, args) {
      console.log('MUTATION CALLED');
      const newUser = { ...args };
      const idOfUser = userData.length;
      newUser.id = idOfUser + 1;
      userData.push(newUser);
      return userData[userData.length - 1];
    },
    deleteUserById(parent, args) {
      let filterdata = userData.findIndex((value) => {
        return value.id === args.id;
      });
      let dataReturned = userData[filterdata];
      userData.splice(filterdata, 1);
      return dataReturned;
    },
    updateUserById(parent, args) {
      //   let filterdata = userData[args.id - 1];
      //   finalUserData = { ...userData };
      userData.splice(args.id - 1, 1);
      let newData = args;
      userData.splice(args.id - 1, 0, newData);
      return userData[args.id - 1];
    },
  },
};

module.exports = { resolvers };
