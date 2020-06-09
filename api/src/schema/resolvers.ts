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

    signup: (
      _: any,
      args: { input: { email: string; name: string; password: string } },
      ctx: any
    ) => {
      const { input } = args;
      return true;
    },
  },
};
