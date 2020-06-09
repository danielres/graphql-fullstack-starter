export default {
  Query: {
    hello: (_: any, __: any, ctx: any) =>
      `Hello from resolver! Views: ${ctx.req.session.views}`,
  },
};
