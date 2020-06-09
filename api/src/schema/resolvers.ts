/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import bcrypt from "bcrypt";
import { Ctx } from "../context";
import SignupError from "../errors/SignupError";
import arrayMatches from "../utils/arrayMatches";

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
    signin: ({}, args: SigninArgs) => {
      const { input } = args;
      return { id: "123", name: "u1", email: input.email };
    },

    signup: async ({}, args: SignupArgs, ctx: Ctx) => {
      try {
        const { password, ...rest } = args.input;
        const hashed = await bcrypt.hash(password, 1);
        return await ctx.db.user.create({
          data: { ...rest, password: hashed },
        });
      } catch (error) {
        if (error.code === "P2002")
          if (arrayMatches(error.meta.target, ["email"]))
            throw new SignupError("Email not available");

        throw error;
      }
    },
  },
};
