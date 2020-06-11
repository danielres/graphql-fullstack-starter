import { useQuery } from "@apollo/react-hooks";
import FormSignin from "../components/forms/FormSignin";
import Card from "../components/ui/Card";
import Providers from "../Providers";
import * as queries from "../queries";
import "./global.css";

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

  if (error)
    return (
      <div className="w-64 mx-auto mt-24">
        <Card>
          <FormSignin onSuccess={refetch} />
        </Card>
      </div>
    );

  if (loading) return <div>Loading...</div>;

  if (!data) return <div>Loading...</div>;

  return children;
}
