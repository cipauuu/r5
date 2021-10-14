<template>
  <div>
    <Navbar class="mb-5" />
    <b-container class="login">
      <b-row class="justify-content-center text-center">
        <b-col cols="4">
          <b-form @submit="onSubmit">
            <img
              class="mb-4"
              src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
              alt=""
              width="72"
              height="72"
            />
            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label for="inputEmail" class="sr-only">Email address</label>
            <b-form-input
              v-model="form.email"
              type="email"
              id="inputEmail"
              class="form-control mb-2"
              placeholder="Email address"
              required
              autofocus
            />
            <label for="inputPassword" class="sr-only">Password</label>
            <b-form-input
              v-model="form.password"
              type="password"
              id="inputPassword"
              class="form-control"
              placeholder="Password"
              required
            />

            <b-button
              type="submit"
              size="lg"
              variant="warning"
              class="btn-block text-white mt-3"
            >
              Sign in
            </b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { BContainer, BButton, BForm } from "bootstrap-vue";
import Cookies from "js-cookie";
import axios from "axios";

export default {
  mounted(){
    Cookies.get('token') ? this.$router.push("/") : ''
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  name: "Login",
  components: {
    Navbar,
    BContainer,
    Footer,
    BButton,
    BForm,
  },
  methods: {
    onSubmit() {
      event.preventDefault()
      const data = {
        email: this.form.email,
        password: this.form.password,
      };
      const headers = {
        Accept: "application/json",
      };
      axios
        .post("https://yodacentral.herokuapp.com/api/login", data, {
          headers,
        })
        .then((response) => {
          Cookies.set("name", response.data.user.name);
          Cookies.set("token", response.data.token);
          this.$router.push("/");
        })
        .catch(() => {
          alert("Kombinasi email dan password salah");
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
  margin-bottom: 25vh;
}</style>
