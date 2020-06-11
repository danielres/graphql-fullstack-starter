import Head from "next/head";
import Layout from "../components/ui/Layout";
import * as queries from "../queries.js";
import { useQuery } from "@apollo/react-hooks";

export default () => {
  const { data, loading } = useQuery(queries.HELLO);

  if (!data) return "Loading...";

  return (
    <Layout>
      <main>{data.hello}</main>
    </Layout>
  );
};
