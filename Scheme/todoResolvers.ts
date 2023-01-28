import { prisma } from '../db.js'

interface createTodoInput {
    title: string 
    desc: string 
}

export default {
    Query: {
        getAllTodos: async () => {
            return await prisma.todo.findMany()
        }
    },
    Mutation: {
        createTodo: async (_parent: any, args: createTodoInput ) => {
            const post = await prisma.todo.create({
                data: {
                    title: args.title,
                    desc: args.desc,
                }
            })
            return post;
        }
    }
}
