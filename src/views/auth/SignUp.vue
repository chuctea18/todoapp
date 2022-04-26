<template>
  <div class="vue-template">
    <form class="form-center" @submit.prevent="fakeSignup">
      <h1>Sign Up.</h1>

      <div class="form-group">
        <input type="text" placeholder="FullName" />
      </div>

      <div class="form-group">
        <input v-model="email" type="email" placeholder="Email" />
      </div>

      <div class="form-group">
        <input v-model="password" type="password" placeholder="Password" />
      </div>

      <div class="form-group">
        <input
          v-model="confirmPassword"
          type="password"
          placeholder="Confirm Password"
        />
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">
        CREATE FREE ACCOUNT
      </button>

      <div class="social-icons">
        <ul>
          <li>
            <a href="#"
              ><i
                class="fa-brands fa-google"
                style="color: pink; font-size: 20px"
              ></i
            ></a>
          </li>
          <li>
            <a href="#"
              ><i
                class="fa-brands fa-facebook"
                style="color: pink; font-size: 20px"
              ></i
            ></a>
          </li>
        </ul>
      </div>

      <p class="forgot-password text-center mt-2">
        Already registered?
        <router-link to="/">Sign in</router-link>
      </p>

      <p class="forgot-password text-center mt-2 mb-4">
        <router-link to="/forgot-password">Forgot password?</router-link>
      </p>
    </form>
  </div>
  <!-- <div class="vertical-center">
  </div> -->
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

    fakeSignup() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/main.css";

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

.social-icons {
  text-align: center;
  font-family: "Open Sans";
}
.social-icons ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.social-icons ul li {
  display: inline-block;
  width: 65px;
  border: 3px solid #444140;
  border-radius: 5px;
  margin-right: 5px;
  background: inherit;
}
.social-icons ul li a {
  display: block;
  margin: 0 5px;
  text-decoration: none;
  line-height: 2rem;
}
// .social-icons ul li a i {
//   -webkit-transition: all 0.2s ease-in;
//   -moz-transition: all 0.2s ease-in;
//   -o-transition: all 0.2s ease-in;
//   -ms-transition: all 0.2s ease-in;
//   transition: all 0.2s ease-in;
// }
// .social-icons ul li a:focus i,
// .social-icons ul li a:active i,
// .social-icons ul li a:hover {
//   transition: all 0.2s ease-in;
//   color: crimson;
// }
</style>