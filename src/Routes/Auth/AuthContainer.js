import AuthPresenter from "./AuthPresenter";
import React, { useState } from "react";
import { useMutation, useQuery } from "react-apollo-hooks";
import { LOCAL_LOG_IN, CREATE_ACCOUNT, SEND_SECRET, EMAIL_EXISTS } from "./AuthQueries";
import useInput from "../../Hooks/useInput";
import { toast } from "react-toastify";

export default () => {
    const [action, setAction] = useState("signUp");
    const [secretKey, setSecretKey] = useState("");
    const name = useInput("");
    const email = useInput("");
    const password = useInput("");
    const secretInput = useInput("");

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

    const onSubmit = async (e) => {
        e.preventDefault();
        if (action === "logIn") {

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