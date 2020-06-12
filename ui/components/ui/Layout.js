import { useApolloClient, useMutation, useQuery } from "@apollo/react-hooks";
import React from "react";
import Link from "next/link";
import * as queries from "../../queries";
import Card from "./Card";

const variants = {
  CARD: "card",
};

export default ({ children, variant }) => {
  if (variant === variants.CARD) return <LayoutCard children={children} />;
  return <LayoutDefault children={children} />;
};

function LayoutCard({ children }) {
  return (
    <div className="w-64 mx-auto mt-24">
      <Card>{children}</Card>
    </div>
  );
}

function LayoutDefault({ children }) {
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
}

function NavContent() {
  const apolloClient = useApolloClient();

  const [signout, { data, loading }] = useMutation(queries.SIGNOUT, {
    refetchQueries: ["Me"],
  });

  const {
    data: { me },
  } = useQuery(queries.ME);

  return (
    <div className="flex justify-between text-sm">
      <ul>
        <li>Home</li>
      </ul>

      <ul className="flex">
        <li className="mr-4">
          <Link href="/profile">
            <a className="hover:underline">{me.email}</a>
          </Link>
        </li>

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
