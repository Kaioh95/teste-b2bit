import * as yup from "yup";

// min 5 chars, 1 upper letter, 1 lower letter.  
const passwordRules = /^(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const SignSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid e-mail").required("Required"),
    password: yup.string().min(5).matches(
        passwordRules,
        {message:"min 5 chars, 1 upper letter, 1 lower letter"}).required("Required")
});