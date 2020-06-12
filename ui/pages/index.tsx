import { useQuery } from "@apollo/react-hooks";
import React from "react";
import Layout from "../components/ui/Layout";
import Spinner from "../components/ui/Spinner";
import * as queries from "../queries";

export default function PageIndex(): JSX.Element {
  const { data, loading } = useQuery(queries.HELLO);

  if (loading) return <Spinner center />;

  return (
    <Layout>
      <main>{data.hello}</main>
    </Layout>
  );
}
