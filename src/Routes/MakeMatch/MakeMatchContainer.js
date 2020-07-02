import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import MakeMatchPresenter from "./MakeMatchPresenter";
import useInput from "../../Hooks/useInput";

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
            name
        }
    }
`;

export default () => {
    const searchemail = useInput("");
    const [action, setAction] = useState("search");

    const { data, loading } = useQuery(ME);
    const { searchData, searchLoading } = useQuery(SEARCH, {
        skip: searchemail.value === '',
        variables: {
            email: searchemail.value
        }
    })
    const onSubmit = async (e) => {
        //e.preventDefault();
        if (action === "search") {
            if (searchemail.value !== "") {
                console.log(searchData);

            }
        }
        console.log(searchData);
    };

    return (
        <MakeMatchPresenter
            action={action}
            data={data}
            loading={loading}
            searchData={searchData}
            searchLoading={searchLoading}
            onSubmit={onSubmit}
        />
    )
};