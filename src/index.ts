import { ApolloServer} from "apollo-server";
import todoTypeDefs from "./todo/todoTypeDefs";
import todoResolvers from "./todo/todoResolvers";

const server = new ApolloServer({
    typeDefs: [todoTypeDefs],
    resolvers: [todoResolvers]
});

server.listen({ port: 8080 }).then(({ url }) => {
  console.log(`🚀  host ready at ${url}`);
});
