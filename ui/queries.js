import { gql } from "apollo-boost";

const userFields = `
  id
  name
  email
`;

export const HELLO = gql`
  query Hello {
    hello
  }
`;

export const ME = gql`
  query Me {
    me { ${userFields} }
  }
`;

export const SIGNIN = gql`
  mutation Signin($input: InputSignin!) {
    signin(input: $input) {
      id
      name
      email
    }
  }
`;

export const SIGNOUT = gql`
  mutation Signout {
    signout
  }
`;
