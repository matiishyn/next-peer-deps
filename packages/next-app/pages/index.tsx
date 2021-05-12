import {NextPage} from "next";
import React, {useState} from "react";
import {ApolloClient, InMemoryCache, gql} from "@apollo/client";
import Comp from "shared";

const client = new ApolloClient({
    uri: "https://48p1r2roz4.sse.codesandbox.io",
    cache: new InMemoryCache(),
});

const HomePage: NextPage<any> = () => {
    const [res, setRes] = useState();

    client.query({
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
            <h1>this is just a test</h1>
            <h2>{res}</h2>
            <h3>uses React {React.version}</h3>
            <hr/>
            <Comp/>
        </div>
    );
};

export default HomePage;
