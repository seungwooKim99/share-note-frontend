import AuthPresenter from "./AuthPresenter";
import React, { useState } from "react";
import { useMutation, useQuery } from "react-apollo-hooks";
import { LOCAL_LOG_IN, CREATE_ACCOUNT, SEND_SECRET, EMAIL_EXISTS, LOG_IN } from "./AuthQueries";
import useInput from "../../Hooks/useInput";
import { toast } from "react-toastify";

export default () => {
    const [action, setAction] = useState("logIn");
    const [secretKey, setSecretKey] = useState("");
    const name = useInput("");
    const email = useInput("");
    const password = useInput("");
    const secretInput = useInput("");

    const [generateTokenMutation] = useMutation(LOG_IN, {
        variables: {
            email: email.value,
            password: password.value
        }
    });

    const [sendSecretMutation] = useMutation(SEND_SECRET, {
        variables: {
            email: email.value
        }
    })
    const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
        variables: {
            name: name.value,
            email: email.value,
            password: password.value
        }
    })

    const [isExistsMutation] = useMutation(EMAIL_EXISTS, { variables: { email: email.value } });

    const [localLogInMutation] = useMutation(LOCAL_LOG_IN);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (action === "logIn") {
            if (email.value !== "" && password.value !== "") {
                try {
                    const { data: { generateToken: token } } = await generateTokenMutation();
                    if (token !== "" && token !== undefined) {
                        await localLogInMutation({ variables: { token } });
                    }
                    else {
                        throw Error();
                    }
                }
                catch{
                    toast.error("로그인 할 수 없습니다.")
                }
            }
        }
        else if (action === "signUp") {
            if (
                email.value !== "" &&
                name.value !== "" &&
                password.value !== ""
            ) {
                try {
                    const { data: { emailExists } } = await isExistsMutation();
                    if (emailExists) {
                        toast.error(`Email has already taken!`);
                    }
                    else {
                        try {
                            const { data: { sendSecret: secret } } = await sendSecretMutation();
                            if (secret === "" || secret === undefined || secret === null) {
                                throw Error();
                            }
                            setSecretKey(String(secret));
                            console.log(secretKey);
                            setAction("confirm");

                        }
                        catch (e) {
                            toast.error(e.message);
                        }
                    }
                }
                catch (e) {
                    toast.error(e.message);
                }
            }
        }
        else if (action === "confirm") {
            console.log(secretKey + " " + secretInput.value);
            if (secretKey === secretInput.value) {
                try {
                    const { data: { createAccount } } = await createAccountMutation();
                    if (!createAccount) {
                        toast.error("Can't create account");
                    }
                    else {
                        toast.success("Account created! Log in now");
                        setTimeout(() => setAction("logIn"), 3000);
                    }
                }
                catch (e) {
                    toast.error(e.message);
                }
            }
            else {
                console.log("Wrong Secret!!");
                throw Error();
            }
        }
    }

    return (
        <AuthPresenter
            setAction={setAction}
            action={action}
            name={name}
            email={email}
            password={password}
            secret={secretInput}
            onSubmit={onSubmit}
        />
    );
};