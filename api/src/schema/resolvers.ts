import bcrypt from "bcrypt";
import SignupError from "../errors/SignupError";
import arrayMatches from "../utils/arrayMatches";

export default {
  Query: {
    hello: (_: any, __: any, ctx: any) =>
      `Hello from resolver! Views: ${ctx.req.session.views}`,
  },

  Mutation: {
    signin: (
      _: any,
      args: { input: { email: string; password: string } },
      ctx: any
    ) => {
      const { input } = args;
      return { id: "123", name: "u1", email: input.email };
    },

    signup: async (
      _: any,
      args: { input: { email: string; name: string; password: string } },
      ctx: any
    ) => {
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
