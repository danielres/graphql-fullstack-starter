/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Ctx } from "../context";
import signin from "./resolvers/signin";
import signup from "./resolvers/signup";

interface SigninArgs {
  input: {
    email: string;
    password: string;
  };
}
interface SignupArgs {
  input: {
    email: string;
    name: string;
    password: string;
  };
}

export default {
  Query: {
    hello: ({}, {}, ctx: Ctx) =>
      `Hello from resolver! Views: ${ctx.req.session.views}`,
  },

  Mutation: {
    signin,
    signup,
  },
};
