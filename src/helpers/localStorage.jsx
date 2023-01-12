export const setUserInfo = (key, userInfo) =>
  localStorage.setItem(key, userInfo);
export const getUserInfo = (key) => JSON.parse(localStorage.getItem(key));
