const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const app = express();
const PORT = 6969;
const cors = require('cors');
const typeDefs = require('./Schema/TypeDefs');
const UsersApi = require('./rest-api-json');
const { resolvers } = require('./Schema/resolvers');
// const { graphqlHTTP } = require('express-graphql');
// const schema = require('./Schemas/index');

app.use(cors());
app.use(express.json());

// app.use(
//   '/graphql',
//   graphqlHTTP({
//     schema,
//     graphiql: true,
//   })
// );
// const typeDefs = gql`
//   type User {
//     id: Int!
//     firstName: String!
//     lastName: String!
//     email: String!
//     password: String!
//   }

//   # Queries
//   type Query {
//     getAllUsers: [User!]!
//   }

//   # Mutations
// `;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      usersAPI: new UsersApi(),
    };
  },
});
server.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log('Server running');
});
