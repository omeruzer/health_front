<template>
  <div class="container mb-5">
    <div class="row mt-5 ml-2">
      <h4>
        <span class="title">Login</span>
      </h4>
    </div>
    <div class="row d-flex justify-content-center align-items-center">
      <div class="login">
        <div class="card login-card">
          <div class="d-flex justify-content-center align-items-center">
            <h4 class="title">Login</h4>
          </div>
          <div class="form">
            <div class="mt-3 d-flex justify-content-center align-items-center">
              <input
                v-model="form.email"
                type="text"
                class="def-input"
                placeholder="E-mail"
              />
            </div>
            <div class="mt-3 d-flex justify-content-center align-items-center">
              <input
                v-model="form.password"
                type="password"
                class="def-input"
                placeholder="Password"
              />
            </div>
            <div class="mt-3 d-flex justify-content-center align-items-center">
              <div class="" @click="login">
                <blue-button item="Login" />
              </div>
            </div>
            <div class="mt-3 d-flex justify-content-center align-items-center">
              <span class="title">Sign Up</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlueButton from "../../components/buttons/BlueButton.vue";
export default {
  components: { BlueButton },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      await this.$axios.$get("http://localhost:8000/sanctum/csrf-cookie");
      await this.$auth
        .loginWith("laravelSanctum", { data: this.form })
        .then((result) => {
          if (result.data.message == "Success") {
            this.$toast.success("Login");
            // this.$router.push("/");
          } else {
            this.$toast.error("Error");
          }
        })
        .catch((err) => {
          this.isError = true;
        });
    },
  },
};
</script>

<style scoped>
.login-card {
  padding: 50px 50px;
}
</style>
