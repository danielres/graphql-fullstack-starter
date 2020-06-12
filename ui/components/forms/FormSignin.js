import { useMutation } from "@apollo/react-hooks";
import { useState } from "react";
import { FormContext, useForm } from "react-hook-form";
import Link from "next/link";
import * as queries from "../../queries";
import Button from "../ui/Button";
import AsyncError from "../ui/forms/AsyncError";
import FormRow from "../ui/forms/FormRow";

export default ({ onSuccess }) => {
  const { handleSubmit, ...rest } = useForm();

  const [signin, { data, loading, error }] = useMutation(queries.SIGNIN);
  const [asyncError, setAsyncError] = useState();
  const dismissAsyncError = () => setAsyncError();

  const onSubmit = (input) =>
    signin({ variables: { input } }).then(onSuccess).catch(setAsyncError);

  return (
    <FormContext {...rest}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
};
