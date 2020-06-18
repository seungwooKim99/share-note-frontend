import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import MakeMatchPresenter from "./MakeMatchPresenter";

const ME = gql`
    query me{
        me{
            id
            email
            isMatched
        }
    }
`;

export default () => {
    const { data, loading } = useQuery(ME);

    const onSubmit = async (e) => {

    };

    return (
        <MakeMatchPresenter
            data={data}
            loading={loading}
            onSubmit={onSubmit}
        />
    )
};