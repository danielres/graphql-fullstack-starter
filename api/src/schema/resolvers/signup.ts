/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import bcrypt from "bcrypt";
import { Ctx } from "../../context";
import SignupError from "../../errors/SignupError";
import arrayMatches from "../../utils/arrayMatches";

interface SignupArgs {
  input: {
    email: string;
    name: string;
    password: string;
  };
}

export default async ({}, args: SignupArgs, ctx: Ctx) => {
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
};
