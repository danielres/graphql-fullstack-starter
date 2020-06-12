import { useQuery } from "@apollo/react-hooks";
import React from "react";
import Layout from "../components/ui/Layout";
import * as queries from "../queries";

export default function PageProfile(): JSX.Element {
  const { data } = useQuery(queries.ME);
  const { me } = data;

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
}
