<template>
  <!-- <div class="container">
    <div class="wrap">


      <form>
        <h1>Sign in.</h1>
        <button>
          <a href="#"
            ><i class="fa-brands fa-google icon"></i>Continue with Google
          </a>
        </button>
        <button>
          <a href="#"
            ><i class="fa-brands fa-facebook icon"></i>Continue with Facebook</a
          >
        </button>
        <p class="para-1">or</p>
        <input v-model="email" type="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Password" />
        <input type="button" value="Sign In" />
      </form>
      <p class="para-1">
        Not have an account? <a href="signup.html"> <b> Create Account</b> </a>
      </p>
      <p class="para-2">
        <a href="signup.html"> <b>Forgot Password?</b> </a>
      </p>
    </div>
  </div> -->

  <div class="vue-template">
    <form @submit.prevent="login">
      <h1>Sign In</h1>

      <div class="form-group">
        <button>
          <a href="#"
            ><i class="fa-brands fa-google icon"></i>Continue with Facebook</a
          >
        </button>
      </div>
      <div class="form-group">
        <!-- S -->
        <button>
          <a href="#"
            ><i class="fa-brands fa-facebook icon"></i>Continue with Facebook</a
          >
        </button>
      </div>

      <div class="form-group">
        <input v-model="email" type="email" placeholder="Email" />
        <p>{{ email }}</p>
      </div>

      <div class="form-group">
        <input v-model="password" type="password" placeholder="Password" />
        <p>{{ password }}</p>
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Sign In
      </button>
      <p v-if="msg">{{ msg }}</p>
      <p class="forgot-password text-center mt-2">
        Not have an account?
        <router-link to="/signup">Create Account</router-link>
      </p>

      <p class="forgot-password text-center mt-2 mb-4">
        <router-link to="/forgot-password">Forgot password ?</router-link>
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
    login: function () {
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
  },
};
</script>

<style scoped>
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