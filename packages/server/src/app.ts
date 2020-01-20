import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';
import schema from './schema';

export default function createApp() {
  const app = express();
  app.use('*', cors({ origin: '*' }));

  const apolloServer = new ApolloServer({
    playground: false,
    schema
  });

  apolloServer.applyMiddleware({ app, path: '/' });
  return app;
};
