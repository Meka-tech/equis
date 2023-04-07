import axios from "axios";
import { BaseUrl } from ".";

const Udata = localStorage.getItem("userData");
const userData = JSON.parse(Udata);
export const Refresh = async () => {
  const data = new FormData();
  data.append("id", `${userData.id}`);

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://www.equisinvestgroup.com/admin/investrefresh.php`,
    headers: {},
    data: data
  };

  axios(config)
    .then(function (res) {
      const userData = res.data[0];
      localStorage.setItem("userData", JSON.stringify(userData));
    })
    .catch(function (error) {});
};
