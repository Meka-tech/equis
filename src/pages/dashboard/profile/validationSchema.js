import * as Yup from "yup";
export const UpDatevalidationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  username: Yup.string().required("Required"),
  newPassword: Yup.string(),
  ethaddress: Yup.string().required("Required"),
  btcaddress: Yup.string().required("Required")
});
