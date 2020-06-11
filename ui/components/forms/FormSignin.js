import { useMutation } from "@apollo/react-hooks";
import { FormContext, useForm } from "react-hook-form";
import * as queries from "../../queries";
import Button from "../ui/Button";
import FormRow from "../ui/forms/FormRow";

export default ({ onSuccess }) => {
  const { handleSubmit, ...rest } = useForm();
  const [signin, { data, loading, error }] = useMutation(queries.SIGNIN);

  const onSubmit = async (input) => {
    await signin({ variables: { input } });
    onSuccess();
  };

  return (
    <FormContext {...rest}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormRow
          label="Email"
          name="email"
          placeholder="jane@example.com"
          required
          email
        />

        <FormRow label="Password" name="password" required password />

        <Button primary submit>
          Signin
        </Button>
      </form>
    </FormContext>
  );
};
