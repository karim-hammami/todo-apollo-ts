import { gql } from "apollo-server";

export default gql`
    type Todo {
        id: Int 
        createdAt: String 
        updatedAt: String
        title: String
        desc: String
        status: String
    }

    type Query {
        allTodos: [Todo]
    }

    type Mutation {
        createTodo(title: String, desc: String): Todo
    }
`
