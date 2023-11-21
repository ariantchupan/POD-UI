export const saveToken = (access_token, refresh_token) => {
  localStorage.setItem("access_token", access_token);
  localStorage.setItem("refresh_token", refresh_token);
};

export const getJwtToken = () => {
  const access_token = localStorage.getItem("access_token");
  return access_token;
};

export const getRefreshToken = () => {
  const refresh_token = localStorage.getItem("refresh_token");
  return refresh_token;
};

export const updateJwtToken = (token) => {
  localStorage.setItem("access_token", token);
};

export const removeToken = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};
