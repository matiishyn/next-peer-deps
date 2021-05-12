var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useState } from "react";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
var client = new ApolloClient({
    uri: "https://48p1r2roz4.sse.codesandbox.io",
    cache: new InMemoryCache(),
});
export var Btn = function () {
    var _a = useState(), res = _a[0], setRes = _a[1];
    client
        .query({
        query: gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        query GetRates {\n          rates(currency: \"USD\") {\n            currency\n          }\n        }\n      "], ["\n        query GetRates {\n          rates(currency: \"USD\") {\n            currency\n          }\n        }\n      "]))),
    })
        .then(function (result) { return setRes(result.data.rates[0].currency); });
    return (React.createElement("div", null,
        "INSIDE:",
        React.createElement("h2", null,
            "this is a button, react version: ",
            React.version),
        React.createElement("h3", null,
            "res: ",
            res)));
};
export default Btn;
var templateObject_1;
