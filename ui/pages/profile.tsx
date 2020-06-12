import Layout from "../components/ui/Layout";
import { useApolloClient, useMutation, useQuery } from "@apollo/react-hooks";
import * as queries from "../queries";

export default () => {
  const {
    data: { me },
  } = useQuery(queries.ME);

  return (
    <Layout>
      <table>
        <tbody>
          <tr>
            <th className="w-1/3">Name</th>
            <td>{me.name}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{me.email}</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};
