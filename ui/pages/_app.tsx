import { useQuery } from "@apollo/react-hooks";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import React from "react";
import FormSignin from "../components/forms/FormSignin";
import Layout from "../components/ui/Layout";
import Spinner from "../components/ui/Spinner";
import config from "../config";
import Providers from "../Providers";
import * as queries from "../queries";
import "./global.css";

const { PUBLIC } = config.routes;

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Providers>
      <AuthGate>
        <Component {...pageProps} />
      </AuthGate>
    </Providers>
  );
}

function AuthGate({ children }: { children: JSX.Element }) {
  const { loading, error, refetch } = useQuery(queries.ME);
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
