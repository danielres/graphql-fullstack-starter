import Link from "next/link";
import { useState } from "react";
import FormSignup from "../components/forms/FormSignup";
import Layout from "../components/ui/Layout";

export default () => {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <Layout variant="card">
      {isSuccess ? (
        <SuccessMessage />
      ) : (
        <FormSignup onSuccess={() => setIsSuccess(true)} />
      )}
    </Layout>
  );
};

function SuccessMessage() {
  return (
    <div>
      <p className="mb-4 text-success font-bold">Congratulations!</p>
      <p className="mb-4 text-sm">Your account has been created.</p>
      <p className="mb-4 text-sm">
        Please check your mailbox for further instructions.
      </p>
      <p>
        <Link href="/">
          <a className="text-link">Sign in</a>
        </Link>
      </p>
    </div>
  );
}
