import * as Yup from "yup";
export const signUpvalidationSchema = Yup.object().shape({
  fullName: Yup.string().required("Required"),
  username: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Please Enter your password"),
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  ethaddress: Yup.string().required("Required"),
  btcaddress: Yup.string().required("Required")
});

export const loginValidationSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Please Enter your password")
});

export const verifyValidationSchema = Yup.object().shape({
  otp: Yup.string().min(4, "Must be 4 characters or more").required("Required")
});
