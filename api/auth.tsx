import axios from "axios";
let BASE_URL = "https://schmgrcoou-dev.azurewebsites.net/api/";

export async function login(username: String, password: String) {
  return await axios.post(`${BASE_URL}/Auth/login`, {
    userName: username,
    Password: password,
  });
}
