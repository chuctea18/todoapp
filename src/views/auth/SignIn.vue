<template>
  <div class="vue-template">
    <h1>Sign In.</h1>
    <form class="form-center" @submit.prevent="login">
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
        <!-- <p>{{ email }}</p> -->
      </div>

      <div class="form-group">
        <input v-model="password" type="password" placeholder="Password" />
        <!-- <p>{{ password }}</p> -->
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">
        SIGN IN
      </button>

      <p class="forgot-password text-center mt-2">
        Not have an account?
        <router-link to="/signup">Create Account</router-link>
      </p>

      <p class="forgot-password text-center mt-2 mb-4">
        <router-link to="/forgot-password">Forgot password?</router-link>
      </p>
    </form>
  </div>
</template>

<script>
// import AuthService from "@/services/auth.service";
// import axios from "axios";
// const url = "http://localhost:5000";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  created() {
    console.log(this.email);
  },
  methods: {
    login: () => {
      // AuthService.login({
      //   email: this.email,
      //   password: this.password,
      // })
      //   .then((response) => {
      //     if (!response?.data) {
      //       return;
      //     }
      //     const { accessToken } = response.data;
      //     console.log(accessToken);
      //     if (accessToken) {
      //       localStorage.setItem("ACCESS_TOKEN", JSON.stringify(accessToken));
      //     }
      //     this.$vToastify.success("easy-peasy");
      //     this.$router.push("/main");
      //   })
      //   .catch((err) => this.$vToastify.error(err));
    },

    fakeLogin() {
      this.$router.push("/main");
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