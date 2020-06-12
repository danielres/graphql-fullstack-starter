import { useMutation } from "@apollo/react-hooks";
import Link from "next/link";
import { useState } from "react";
import { FormContext, useForm } from "react-hook-form";
import * as queries from "../../queries";
import Button from "../ui/Button";
import AsyncError from "../ui/forms/AsyncError";
import FormRow from "../ui/forms/FormRow";

export default ({ onSuccess }) => {
  const { handleSubmit, ...rest } = useForm();

  const [signin, { data, loading, error }] = useMutation(queries.SIGNUP);
  const [asyncError, setAsyncError] = useState();
  const dismissAsyncError = () => setAsyncError();

  const onSubmit = ({ password2, ...input }) =>
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
};
