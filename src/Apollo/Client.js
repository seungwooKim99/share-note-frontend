import ApolloClient from "apollo-boost"
import { resolvers, defaults } from "./LocalState";

export default new ApolloClient({
    uri: "http://localhost:4000",
    clientState: {
        defaults,
        resolvers
    },
    headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
});