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
        todoById(id: Int): Todo
    }

    type Mutation {
        createTodo(title: String, desc: String): Todo
        updateTodo(id: Int, title: String, desc: String, status: String): Todo 
        deleteTodo(id: Int): Todo
    }
`
