import {ApolloServer} from 'apollo-server';
import schema from './schema';

const server = new ApolloServer({ schema });

server.listen({ port: process.env.PORT || 8080, host: process.env.host || '0.0.0.0' }).then(({url}) => {
  console.log(`🚀 Server ready at ${url}`);
});

