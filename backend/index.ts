import "reflect-metadata";
import path from "path";
require("dotenv").config({ path: ".env.local" });
import "./database/connect";
import { ClientResolver } from "./Resolvers/ClientResolver";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";

async function main() {
  const schema = await buildSchema({
    resolvers: [ClientResolver],
    emitSchemaFile: path.resolve(__dirname, "scheme.ggl"),
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen();
  console.log(`Server running at ${url}`);
}
main();
