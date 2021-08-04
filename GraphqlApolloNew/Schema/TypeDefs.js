const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type CompanyData {
    name: String!
    catchPhrase: String!
    bs: String!
  }

  type UsersRESTAPI {
    id: Int!
    name: String!
    email: String!
    phone: String!
    website: String
    company: CompanyData!
  }

  # Queries
  type Query {
    getAllUsers: [User!]!
    getUsersById(id: Int!): User!
    getUsersRestApi: [UsersRESTAPI!]!
  }

  # Mutations
  type Mutation {
    createUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): User!
    deleteUserById(id: Int!): User!
    updateUserById(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      id: Int!
    ): User!
  }
`;

module.exports = typeDefs;
