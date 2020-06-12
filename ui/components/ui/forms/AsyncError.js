import Alert from "../Alert";

export default ({ asyncError, dismiss }) => {
  if (!asyncError) return null;

  return (
    <Alert className="mb-4" dismiss={dismiss} type="danger">
      {asyncError.graphQLErrors[0].message}
    </Alert>
  );
};
