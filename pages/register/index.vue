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
              <input type="text" class="def-input" placeholder="Full Name" />
            </div>
            <div class="mt-3 d-flex justify-content-center align-items-center">
              <input type="text" class="def-input" placeholder="E-mail" />
            </div>
            <div class="mt-3 d-flex justify-content-center align-items-center">
              <input type="password" class="def-input" placeholder="Password" />
            </div>
            <div class="mt-3 d-flex justify-content-center align-items-center">
              <input
                type="password"
                class="def-input"
                placeholder="Password Confirm"
              />
            </div>
            <div class="mt-3 d-flex justify-content-center align-items-center">
              <blue-button item="Register" />
            </div>
            <div class="mt-3 d-flex justify-content-center align-items-center">
              <span class="title">Has Account</span>
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
};
</script>

<style scoped>
.register-card {
  padding: 50px 50px;
}
</style>
