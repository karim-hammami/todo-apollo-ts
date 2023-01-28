import { prisma } from '../db';
export default {
    Query: {
        getAllTodos: async () => {
            return await prisma.todo.findMany();
        }
    },
    Mutation: {
        createTodo: async (_parent, args) => {
            const post = await prisma.todo.create({
                data: {
                    title: args.title,
                    desc: args.desc,
                }
            });
            return post;
        }
    }
};
