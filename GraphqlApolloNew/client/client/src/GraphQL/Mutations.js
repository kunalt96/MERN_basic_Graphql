import { gql } from '@apollo/client';

export const CREATE_USER_MUTATION = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      firstName
      lastName
      email
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUserById($id: Int!) {
    deleteUserById(id: $id) {
      email
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUserById(
    $id: Int!
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    updateUserById(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      id: $id
    ) {
      firstName
      lastName
      email
      password
      id
    }
  }
`;
