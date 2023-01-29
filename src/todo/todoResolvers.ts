import { context } from './context'


export default {
    Query: {
        allTodos: () => {
            return context.prisma.todo.findMany();
        }
    }
}
