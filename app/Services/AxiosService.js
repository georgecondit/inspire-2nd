// @ts-ignore
export const sandBoxApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api",
  timeout: 10000
});
// @ts-ignore
export const geosApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/geos",
  timeout: 10000
});






