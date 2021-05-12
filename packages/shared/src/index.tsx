import React, {useState} from "react";
import {ApolloClient, gql, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
});

export const Btn = () => {
  const [res, setRes] = useState()

  client
    .query({
      query: gql`
        query GetRates {
          rates(currency: "USD") {
            currency
          }
        }
      `,
    })
    .then(result => setRes(result.data.rates[0].currency));

  return (
    <div>
      INSIDE:
      <h2>this is a button, react version: {React.version}</h2>
      <h3>res: {res}</h3>
    </div>
  );
};

export default Btn;
