import { useMutation } from "@apollo/react-hooks";
import Link from "next/link";
import React, { useState } from "react";
import { FormContext, useForm } from "react-hook-form";
import * as queries from "../../queries";
import Button from "../ui/Button";
import AsyncError from "../ui/forms/AsyncError";
import FormRow from "../ui/forms/FormRow";

interface IProps {
  onSuccess: () => unknown;
}

export default function FormSignin({ onSuccess }: IProps): JSX.Element {
  const methods = useForm();

  const [signin] = useMutation(queries.SIGNIN);
  const [asyncError, setAsyncError] = useState();
  const dismissAsyncError = () => setAsyncError(undefined);

  const onSubmit = async (input: { [key: string]: string }) => {
    try {
      await signin({ variables: { input } });
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

        <FormRow label="Password" name="password" required password />

        <div className="flex justify-between">
          <Button primary submit>
            Sign in
          </Button>

          <Link href="/signup" passHref>
            <Button as="a" className="text-link-muted">
              Signup
            </Button>
          </Link>
        </div>
      </form>
    </FormContext>
  );
}
