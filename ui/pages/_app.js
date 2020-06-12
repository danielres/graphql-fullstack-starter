import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import FormSignin from "../components/forms/FormSignin";
import Layout from "../components/ui/Layout";
import Spinner from "../components/ui/Spinner";
import config from "../config";
import Providers from "../Providers";
import * as queries from "../queries";
import "./global.css";

const { PUBLIC } = config.routes;

export default ({ Component, pageProps }) => {
  return (
    <Providers>
      <AuthGate>
        <Component {...pageProps} />
      </AuthGate>
    </Providers>
  );
};

function AuthGate({ children }) {
  const { data, loading, error, refetch } = useQuery(queries.ME);
  const router = useRouter();

  if (PUBLIC.includes(router.pathname)) return children;

  if (error)
    return (
      <Layout variant="card">
        <FormSignin onSuccess={refetch} />
      </Layout>
    );

  if (loading) return <Spinner center />;

  return children;
}
