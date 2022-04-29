import http from "./http.service";

class AuthService {
  login(body) {
    return http.post(`/login`, body);
  }

  register(body) {
    return http.post(`/sign-up`, body);
  }
}

export default new AuthService();
