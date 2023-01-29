import { context } from '../utils/context'


export default {
    Query: {
        allTodos: () => {
            return context.prisma.todo.findMany();
        },
        todoById: async (_: any, args: {id: number}) => {
            const {id} = args;
            const list = await context.prisma.todo.findUnique({
                where: {
                    id,
                }
            })
            return list
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
        },
        updateTodo: async (_: any, args: {id: number,title: string,desc: string,status: string}) => {
            const {id, title, desc, status} = args
            const update = await context.prisma.todo.update({
                where: {
                    id,
                },
                data: {
                    title,
                    desc,
                    status,
                }
            })
            return update
        },
        deleteTodo: async (_: any, args: {id: number}) => {
            const {id} = args
            const deletetodo = await context.prisma.todo.delete({
                where: {
                    id,
                }
            })
            return deletetodo
        }
    }
}
