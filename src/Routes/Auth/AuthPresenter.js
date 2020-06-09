import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";


const Wrapper = styled.div`
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Box = styled.div`
    ${props => props.theme.whiteBox}
    width: 100%;
    max-width: 400px;
`;

const StateChanger = styled(Box)`
    text-align: center;
    padding: 20px 0px;
`;

const Form = styled(Box)`
    padding: 40px;
    padding-bottom: 30px;
    margin-bottom: 15px;
    form{
        width: 100%;
        input{
            width: 100%;
        }
        button {
            margin-top: 10px;
        }
    }
`;

const SecretInput = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
`;

export default ({
    setAction,
    action,
    name,
    email,
    password,
    secret,
    onSubmit,
    sendSecret
}) => {
    return (
        <Wrapper>
            <Form>
                {action === "logIn" && (
                    <form onSubmit={onSubmit}>
                        <Input placeholder={"이메일"} {...email} type="email" />
                        <Input placeholder={"비밀번호"} required {...password} type="password" />
                        <Button text={"로그인"} />
                    </form>
                )}
                {action === "signUp" && (
                    <>
                        <form onSubmit={onSubmit}>
                            <Input placeholder={"이름"} {...name} />
                            <Input placeholder={"이메일"} {...email} type="email" />
                            <Input placeholder={"비밀번호"} required {...password} type="password" />
                            <Button text={"인증번호 받기"} />
                        </form>
                    </>
                )}
                {action === "confirm" && (
                    <>
                        <form onSubmit={onSubmit}>
                            <Input placeholder={"이름"} {...name} />
                            <Input placeholder={"이메일"} {...email} type="email" />
                            <Input placeholder={"비밀번호"} required {...password} type="password" />
                            <Input placeholder={"인증키"} required {...secret} />
                            <Button text={"회원가입"} />
                        </form>
                    </>
                )}

            </Form>
        </Wrapper>
    );
};