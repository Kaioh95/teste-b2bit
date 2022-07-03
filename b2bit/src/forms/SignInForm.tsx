import { FormEvent, useState } from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import { SignSchema } from "../schemas/SignSchema";
import useFlashMessage from "../hooks/useFlashMessage"
import api from '../utils/api';

const FormContainer = styled.div`
    background-color: #fff;
    box-sizing: border-box;
`;

const SignForm = styled.form`
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

const SignLabel = styled.label`
    font-weight: bold;
    font-size: 1em;
    color: #333;
    margin: 5px 0px;
`;

const SignInput = styled.input`
    background-color: #f0f0f0;
    border: 3px solid #f0f0f0;
    color: #999;
    font-size: 1em;
    border-radius: 5px;
    margin: 5px 0px 25px 0px;
    height: 45px;
    width: 100%;
    padding: 0px 15px;
    box-sizing: border-box;
`;

const SignButton = styled.button`
    background-color: #012250;
    border: 3px solid #012250;
    color: #fff;
    font-size: 1.1em;
    border-radius: 5px;
    height: 50px;
    width: 100%;
    font-weight: bold;
    margin: 10px 0px;
    cursor: pointer;
    &:hover {
        background-color: #02336f;
    }
    &:disabled {
        opacity: 0.35;
    }
`;

const FormError = styled.div`
    font-style: italic;
    font-size: 10pt;
    color: red;
    margin: 0px;
    height: 13pt;
`;

const onSubmit = async (values: any, actions:any) => {
    let msgType = 'success'
    //const { setFlashMessage } = useFlashMessage()

    const formData = {
        'email': values.email,
        'password': values.password,
    }
    console.log(formData)

    /*const data = await api
        .post('/account/profile/', JSON.stringify(formData), {
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((response) => {
            console.log(response.data)
            return response.data
        })
        .catch((err)=> {
            console.log(err)
            msgType = 'error'
            return err.response.data
        });*/
    
    //setFlashMessage(data.message, msgType)
    actions.resetForm()
}

export default function SignInForm(){

    const formik = useFormik({
        initialValues:{
            email: "",
            password: ""
        },
        validationSchema: SignSchema,
        onSubmit,
    });

    const [emailInput, setEmailInput] = useState<string>();   

    return(
        <FormContainer>
            <SignForm autoComplete="off" onSubmit={formik.handleSubmit}>
                <SignLabel htmlFor="email">E-mail</SignLabel>
                <SignInput id="email" type="text" name="email" placeholder="@email.com" 
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.email && <FormError>{formik.errors.email}</FormError>}

                <SignLabel htmlFor="password">Password</SignLabel>
                <SignInput id="password" type="password" name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.password && <FormError>{formik.errors.password}</FormError>}

                <SignButton disabled={formik.isSubmitting} type="submit">Sign In</SignButton>
                <FormError></FormError>
            </SignForm>
        </FormContainer>

    )
}


/*
<SignForm onSubmit={formik.handleSubmit}>
    <SignLabel>E-mail</SignLabel>
    <SignInput type="text" placeholder="@email.com" value={emailInput}/>
    <FormError></FormError>

    <SignLabel>Password</SignLabel>
    <SignInput type="password" value={emailInput}/>
    <FormError></FormError>

    <SignButton type="submit">Sign In</SignButton>
    <FormError></FormError>
</SignForm>
*/