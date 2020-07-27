import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { findByLabelText } from "@testing-library/react";

const Card = styled.div`
    ${props => props.theme.whiteBox};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
`;

const Name = styled.span`
    font-weight: 600;
    size: 24px;
    color: ${props => props.theme.blackColor};
`;

const Email = styled.span`
    font-weight: 400;
    size: 12px;
    color: ${props => props.theme.darkGreyColor};
`;

const UserCard = ({ id, name, email }) => (
    <Card>
        <Name>{name}</Name>
        <Email>{email}</Email>
    </Card>
);

UserCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
};

export default UserCard;