import React from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import Helmet from "react-helmet";


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

export default ({
    action,
    data,
    loading,
    onSubmit,
    searchemail,
    search,
    searchLoading
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
            return (
                <Wrapper>
                    <Form>
                        <Input placeholder={"이메일로 검색하세요"} {...searchemail} type="email" />
                    </Form>
                    {searchLoading && (
                        <div>
                            Loading
                        </div>
                    )}
                    {!searchLoading && search && search.searchUser && (
                        <div>
                            {search.searchUser.email}
                        </div>
                    )}
                </Wrapper >
            );
        }
        else {

        }
    }
};