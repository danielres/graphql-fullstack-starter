import { useMutation } from "@apollo/react-hooks";
import Link from "next/link";
import React, { useState } from "react";
import { FormContext, useForm } from "react-hook-form";
import * as queries from "../../queries";
import Button from "../ui/Button";
import AsyncError from "../ui/forms/AsyncError";
import FormRow from "../ui/forms/FormRow";

interface IProps {
  onSuccess: () => void;
}

export default function ForSignup({ onSuccess }: IProps): JSX.Element {
  const methods = useForm();

  const [signup] = useMutation(queries.SIGNUP);
  const [asyncError, setAsyncError] = useState();
  const dismissAsyncError = () => setAsyncError(undefined);

  const onSubmit = async ({
    password2,
    ...input
  }: {
    [key: string]: string;
  }) => {
    try {
      await signup({ variables: { input } });
      onSuccess();
    } catch (error) {
      setAsyncError(error);
    }
  };

  return (
    <FormContext {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <AsyncError asyncError={asyncError} dismiss={dismissAsyncError} />

        <FormRow
          label="Email"
          name="email"
          placeholder="jane@example.com"
          required
          email
        />

        <FormRow label="Name" name="name" placeholder="Jane" required />

        <FormRow label="Password" name="password" required password />

        <FormRow label="Password (repeat)" name="password2" required password />

        <div className="flex justify-between">
          <Button primary submit>
            Signup
          </Button>

          <Link href="/" passHref>
            <Button as="a" className="text-link-muted">
              Sign in
            </Button>
          </Link>
        </div>
      </form>
    </FormContext>
  );
}
