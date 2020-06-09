import { gql } from "apollo-server-express";

export default gql`
  type Query {
    hello: String!
  }

  type Mutation {
    signin(input: InputSignin!): User
    signup(input: InputSignup!): Boolean
  }

  ### Scalars

  scalar DateTime

  ### Inputs

  input InputSignin {
    email: String!
    password: String!
  }

  input InputSignup {
    email: String!
    name: String!
    password: String!
  }

  ### Types

  type User {
    id: String!
    name: String!
    email: String!
    password: String!
    createdAt: DateTime!
    updatedAt: DateTime
  }
`;
