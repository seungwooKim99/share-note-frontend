import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export default ({
    data,
    loading
}) => {

    if (loading) {
        return (
            <Wrapper>
                Loading
            </Wrapper>
        )
    }
    else if (!loading && data && data.me) {
        const {
            me: {
                email,
                isMatched
            }
        } = data;
        if (!isMatched) {
            return 'search User'
        }
        else {

        }
    }
};