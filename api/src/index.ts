import { ApolloServer } from "apollo-server-express";
import express, { Request, Response } from "express";
import config from "../config";
import resolvers from "./schema/resolvers";
import typeDefs from "./schema/typeDefs";

const { PORT } = config;

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  context: (req: Request, res: Response) => ({ req, res }),
});

const server = express();

apollo.applyMiddleware({ app: server });

server.listen(PORT, () => {
  console.log(`API: http://localhost:${PORT}${apollo.graphqlPath}`);
});
