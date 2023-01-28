import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import todoResolvers from './Scheme/todoResolvers';
import todoTypeDefs from './Scheme/todoTypeDefs';

(async function() {
const server = new ApolloServer({
    typeDefs: [todoTypeDefs],
    resolvers: [todoResolvers]
});

const { url  } = await startStandaloneServer(server, {
    listen: {port: 4000}
})

console.log("server is at ", url)
})();
