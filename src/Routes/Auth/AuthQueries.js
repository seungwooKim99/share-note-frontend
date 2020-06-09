import { gql } from "apollo-boost";

export const LOCAL_LOG_IN = gql`
    mutation logUserIn($token: String!){
        logUserIn(token: $token) @client
    }
`;

export const LOG_IN = gql`
    mutation generateToken($email: String! $password: String!){
        generateToken(
            email: $email
            password: $password
        )
    }
`;

export const SEND_SECRET = gql`
    mutation sendSecret($email: String!){
        sendSecret(email: $email)
    }
`;

export const CREATE_ACCOUNT = gql`
    mutation createAccount(
        $name: String!
        $password: String!
        $email: String!
    ){
        createAccount(
            name: $name
            password: $password
            email: $email
        )
    }
`;

export const EMAIL_EXISTS = gql`
    mutation emailExists(
        $email: String!
    ){
        emailExists(
            email: $email
        )
    }
`;