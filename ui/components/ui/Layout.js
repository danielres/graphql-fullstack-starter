import { useApolloClient, useMutation } from "@apollo/react-hooks";
import React from "react";
import * as queries from "../../queries";

export default ({ children }) => {
  return (
    <div className="flex flex-col h-screen bg-gray-200">
      <nav className="bg-black text-white mb-8">
        <div className="container px-4 py-4 mx-auto">
          <NavContent />
        </div>
      </nav>

      <div className="container mx-auto flex-grow flex flex-col">
        <main className="px-4 py-4 flex-grow bg-white shadow-lg rounded">
          {children}
        </main>
        <footer className="px-4 py-4 text-gray-600">Footer</footer>
      </div>
    </div>
  );
};

function NavContent() {
  const [signout, { data, loading }] = useMutation(queries.SIGNOUT, {
    refetchQueries: ["Me"],
  });
  const apolloClient = useApolloClient();

  return (
    <div className="flex justify-between">
      <ul>
        <li>Home</li>
      </ul>

      <ul>
        <li>
          <button
            className="hover:underline text-gray-400"
            onClick={async () => {
              await signout();
              apolloClient.stop();
              location.reload();
            }}
          >
            Signout
          </button>
        </li>
      </ul>
    </div>
  );
}
