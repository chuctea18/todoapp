<template>
  <div class="vue-template">
    <form class="form-center" @submit.prevent="fakeResetPassword">
      <h1>Forgot Your Password?</h1>

      <div class="form-group">
        <input v-model="email" type="email" placeholder="Email" />
        <p>{{ email }}</p>
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">
        RESET PASSWORD
      </button>

      <p class="forgot-password text-center mt-2 mb-4">
        <router-link to="/">Back to signin</router-link>
      </p>
    </form>
  </div>
</template>

<script>
// import AuthService from "@/services/AuthService.js";
import axios from "axios";
const url = "http://localhost:5000";

export default {
  data() {
    return {
      email: "",
      password: "",
      msg: "",
    };
  },
  methods: {
    login: () => {
      axios
        .post(`${url}/login`, {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          // if (response.data.accessToken) {
          //   localStorage.setItem('user', JSON.stringify(response.data));
          // }
          // this.$vToastify.success("easy-peasy");
          this.$router.push("/");
          return response.data;
        })
        .catch((err) => this.$vToastify.error(err));
    },

    fakeResetPassword() {
      this.$router.push("/reset-password");
    },
  },
};
</script>

<style lang="scss" scoped>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
}

.container {
  background-color: rgb(32, 30, 32);
  /* height: 100vh; */
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
}
h1 {
  color: #fff;
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: bold;
}
input,
button {
  width: 300px;
  padding: 10px;
  color: #fff;

  box-sizing: border-box;
  border: 3px solid #444140;
  border-radius: 10px;
  font-size: 14px;
  background-color: rgb(32, 30, 32);
  margin-bottom: 15px;
}

button a {
  text-decoration: none;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
}

.icon {
  margin-right: 8px;
  font-size: 16px;
}

input::placeholder {
  color: #ddd;
  opacity: 1;
}

button[type="submit"] {
  background-color: #f08080;
  border: 0;
  padding: 15px 10px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  margin-top: 10px;
}

.forgot-password {
  text-align: right;
  font-size: 16px;
  padding-top: 10px;
  color: #7a7a7a;
  margin: 0;
}

.forgot-password a {
  color: #fff;
}
</style>