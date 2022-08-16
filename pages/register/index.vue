<template>
  <div class="container my-5">
    <div class="row mt-5 ml-2">
      <h4>
        <span class="title">Register</span>
      </h4>
    </div>
    <div class="row d-flex justify-content-center align-items-center">
      <div class="register">
        <div class="card register-card">
          <div class="d-flex justify-content-center align-items-center">
            <h4 class="title">Register</h4>
          </div>
          <div class="form">
            <div class="mt-3 d-flex justify-content-center align-items-center">
              <input
                v-model="form.name"
                type="text"
                class="def-input"
                placeholder="Full Name"
              />
            </div>
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
              <input
                v-model="form.password_confirm"
                type="password"
                class="def-input"
                placeholder="Password Confirm"
              />
            </div>
            <div class="mt-3 d-flex justify-content-center align-items-center">
              <div class="" @click="register">
                <blue-button item="Register" />
              </div>
            </div>
            <div class="mt-3 d-flex justify-content-center align-items-center">
              <span @click="register" class="title">Has Account</span>
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
      form: {},
    };
  },
  methods: {
    register() {
      if (
        this.form.name == null ||
        this.form.email == null ||
        this.form.password == null ||
        this.form.password_confirm == null
      ) {
        return false;
      } else {
        this.$axios
          .post("http://localhost:8000/api/auth/register", this.form)
          .then((result) => {
            console.log(result.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style scoped>
.register-card {
  padding: 50px 50px;
}
</style>
