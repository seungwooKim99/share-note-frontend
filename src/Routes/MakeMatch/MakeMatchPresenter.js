import React from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import Helmet from "react-helmet";
import UserCard from "../../Components/UserCard";
import FatText from "../../Components/FatText";
import Loader from "../../Components/Loader";

const Wrapper = styled.div`
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Box = styled.div`
    ${props => props.theme.defaultBox}
    width: 100%;
    max-width: 360px;
`;

const Form = styled(Box)`
    padding: 40px;
    padding-bottom: 20px;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    span{
        padding-bottom: 10px;
    }
    input{
        width: 100%;
    }
    button{
        margin: 10px 0px 10px;
    }
`;

export default ({
    data,
    loading,
    searchemail,
    search,
    searchLoading,
    onSubmit,
    userData
}) => {
    if (loading === true) {
        return (
            <Wrapper>
                <Loader />
            </Wrapper>
        )
    }
    else if (data == undefined) {
        return (
            <Wrapper>
                <Loader />
            </Wrapper>
        )
    }
    else if (data && data.me) {
        const {
            me: {
                email,
                isMatched
            }
        } = data;

        if (!isMatched) {
            return (
                <Wrapper>
                    <Form>
                        <form onSubmit={onSubmit}>
                            <Input placeholder={"이메일로 검색하세요"} {...searchemail} type="email" />
                            <Button text={"검색"} />
                        </form>
                        {userData && (
                            <>
                                <UserCard
                                    key={userData.id}
                                    id={userData.id}
                                    name={userData.name}
                                    email={userData.email}
                                />
                            </>
                        )}
                    </Form>
                </Wrapper >
            );
        }
        else {
            return null;
        }
    }
    else {
        return null;
    }
};