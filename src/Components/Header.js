import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Header = styled.header`
    ${props => props.theme.headerStyle}
    width: 100%;
    position: fixed;
    z-index: 50;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
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