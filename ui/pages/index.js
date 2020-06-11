import { useQuery } from "@apollo/react-hooks";
import Layout from "../components/ui/Layout";
import Spinner from "../components/ui/Spinner";
import * as queries from "../queries.js";

export default () => {
  const { data, loading } = useQuery(queries.HELLO);

  if (loading) return <Spinner center />;

  return (
    <Layout>
      <main>{data.hello}</main>
    </Layout>
  );
};
