import * as Yup from "yup";
export const signUpvalidationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(8, "Must be 8 characters or more")
    .required("Required"),
  username: Yup.string()
    .min(5, "Must be 5 characters or more")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  ethaddress: Yup.string().required("Required"),
  btcaddress: Yup.string().required("Required"),
  reflink: Yup.string()
    .min(4, "Must be 4 characters or more")
    .required("Required")
});

export const loginValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, "Must be 5 characters or more")
    .required("Required"),
  password: Yup.string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
});

export const verifyValidationSchema = Yup.object().shape({
  otp: Yup.string().min(4, "Must be 4 characters or more").required("Required")
});
