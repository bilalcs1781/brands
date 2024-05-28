import axios from "axios";
const api = axios.create({ baseURL: "https://myapi.brandsearchengine.com/api/" });

const refreshToken = async () => {
  const refresh_token = localStorage.getItem("refresh_token");
  try {
    const response = await axios.post("auth/token/refresh/", {
      refresh_token,
    });
    const { access_token, refresh_token: new_refresh_token } = response.data;
    localStorage.setItem("access_token", access);
    localStorage.setItem("refresh_token", refresh);
    return access_token;
  } catch (error) {
    return { error: error.response || "Failed to refresh token:" };
  }
};

const apiRequest = async (method, url, data) => {
  try {
    const access_token = localStorage.getItem("access_token");
    api.defaults.headers.common["Authorization"] = Bearer ${access_token};
    const response = await api.request({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      try {
        const newAccessToken = await refreshToken();
        api.defaults.headers.common[
          "Authorization"
        ] = Bearer ${newAccessToken};
        const response = await api.request({
          method,
          url,
          data,
        });
        return response.data;
      } catch (refreshError) {
        console.error("Refresh token failed:", refreshError);
        window.location.replace("/login");
        localStorage.clear();
        throw refreshError;
      }
    } else {
      throw error;
    }
  }
};

class Getdata {
  constructor() {
    this.state = {
      open: false,
    };
  }

  AllPatientsList = (archivedTable) => {
    const res = async () => {
      const resp = await apiRequest(
        "get",
        doctors/yang_wen-li/patients?is_archived=${archivedTable}
      );
      return resp;
    };
    return res();
  };

}

export default new Getdata();