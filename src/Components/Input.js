import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`

`;

const Title = styled.span`
    height: 12px;
    font-weight: 600;
    color: rgba(55,65,81,var(--text-opacity));
`;

const Container = styled.input`
    border: ${props => props.theme.boxBorder};
    border-radius: ${props => props.theme.borderRadius};
    background-color: ${props => props.theme.lightGreyColor};
    height: 35px;
    font-size: 12px;
    margin-top: 10px;
`;

const Input = ({ placeholder, required = true, value, onChange, type = "text", className }) => (
    <Wrapper>
        <Title>{placeholder}</Title>
        <Container
            className={className}
            placeholder={placeholder}
            required={required}
            value={value}
            onChange={onChange}
            type={type}
        />
    </Wrapper>
);

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    required: PropTypes.bool,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string
};

export default Input;