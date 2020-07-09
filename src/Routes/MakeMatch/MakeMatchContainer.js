import React, { useState, useEffect } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import MakeMatchPresenter from "./MakeMatchPresenter";
import useInput from "../../Hooks/useInput";
import { toast } from "react-toastify";

const ME = gql`
    query me{
        me{
            id
            email
            isMatched
        }
    }
`;

const SEARCH = gql`
    query searchUser($email: String!){
        searchUser(email: $email){
            id
            email
        }
    }
`;

export default () => {
    const searchemail = useInput("");
    const [action, setAction] = useState("search");

    const { data, loading } = useQuery(ME);
    const { data: search, loading: searchLoading } = useQuery(SEARCH, {
        variables: {
            email: searchemail.value
        },
        suspend: false
    })

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(search);
    }

    return (
        <MakeMatchPresenter
            action={action}
            data={data}
            loading={loading}
            onSubmit={onSubmit}
            searchemail={searchemail}
            search={search}
            searchLoading={searchLoading}
        />
    )
};