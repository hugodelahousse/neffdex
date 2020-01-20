import { ApolloServer, gql } from 'apollo-server-lambda';
import schema from './schema';

const server = new ApolloServer({ schema });

const graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
    credentials: false,
  }
});

module.exports = {
  graphqlHandler
};
