import { context } from '../utils/context'


export default {
    Query: {
        allTodos: () => {
            return context.prisma.todo.findMany();
        }
    },
    Mutation: {
        createTodo: async (_: any, args: {title: string,desc: string}) => {
            const {title,desc} = args
            const post= await context.prisma.todo.create({
                data: {
                    title,
                    desc,
                }
            })
            return post
        }
    }
}
