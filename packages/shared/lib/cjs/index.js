"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Btn = void 0;
var react_1 = __importStar(require("react"));
var client_1 = require("@apollo/client");
var client = new client_1.ApolloClient({
    uri: "https://48p1r2roz4.sse.codesandbox.io",
    cache: new client_1.InMemoryCache(),
});
exports.Btn = function () {
    var _a = react_1.useState(), res = _a[0], setRes = _a[1];
    client
        .query({
        query: client_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        query GetRates {\n          rates(currency: \"USD\") {\n            currency\n          }\n        }\n      "], ["\n        query GetRates {\n          rates(currency: \"USD\") {\n            currency\n          }\n        }\n      "]))),
    })
        .then(function (result) { return setRes(result.data.rates[0].currency); });
    return (react_1.default.createElement("div", null,
        "INSIDE:",
        react_1.default.createElement("h2", null,
            "this is a button, react version: ",
            react_1.default.version),
        react_1.default.createElement("h3", null,
            "res: ",
            res)));
};
exports.default = exports.Btn;
var templateObject_1;
