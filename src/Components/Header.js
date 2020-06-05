import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Header = styled.header`
    ${props => props.theme.whiteBox}
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px 0px;
    margin-bottom: 60px;
`;

export default withRouter(({ history }) => {

    return (
        <Header>
            헤더 구간
        </Header>
    );
});