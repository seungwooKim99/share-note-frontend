import React, { useState, useEffect } from "react";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "react-apollo-hooks";
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
    mutation searchUser($email: String!){
        searchUser(email: $email){
            id
            email
            name
        }
    }
`;

export default () => {
    const searchemail = useInput("");
    const [userData, setUserData] = useState(null);

    const { data, loading } = useQuery(ME);
    const [searchUserMutation] = useMutation(SEARCH, {
        variables: {
            email: searchemail.value
        }
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        const { data: { searchUser } } = await searchUserMutation();
        console.log(searchUser);
        setUserData(searchUser);
    }

    return (
        <MakeMatchPresenter
            data={data}
            loading={loading}
            searchemail={searchemail}
            onSubmit={onSubmit}
            userData={userData}
        />
    )
};