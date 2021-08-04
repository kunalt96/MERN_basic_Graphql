import { gql } from '@apollo/client';

export const LOAD_USERS = gql`
  query {
    getAllUsers {
      id
      firstName
    }
  }
`;

export const LOAD_USERS_BY_ID = gql`
  query getUsersById($id: Int!) {
    getUsersById(id: $id) {
      firstName
      lastName
      id
      email
      password
    }
  }
`;
