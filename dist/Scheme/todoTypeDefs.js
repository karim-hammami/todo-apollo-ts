import gql from "graphql-tag";
export default gql `
    type Todo {
        id: Int 
        createdAt: String
        updatedAt: String
        title: String
        desc: String
        status: String
    }

    type Query {
        getAllTodos: [Todo]
    }

    type Mutation {
        addTodo(title: String, desc: String): Todo
    }
`;
