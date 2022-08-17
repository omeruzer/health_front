<template>
  <div>
    <div class="container-fluid">
      <div class="container">
        <div class="row mt-3">
          <div class="col-md-3">
            <div class="logo">
              <nuxt-link to="/"
                ><img src="@/static/logo.png" alt=""
              /></nuxt-link>
            </div>
          </div>
          <div
            class="col-md-6 d-none d-sm-block d-xs-none d-md-none d-lg-block"
          >
            <div class="search">
              <input type="text" class="def-input" id="" placeholder="Search" />
            </div>
          </div>
          <div
            class="col-md-3 d-none d-sm-block d-xs-none d-md-none d-lg-block"
          >
            <div
              v-if="!$auth.loggedIn"
              class="buttons d-flex justify-content-end align-items-center"
            >
              <div class="mr-2">
                <nuxt-link to="/login"><white-button item="Login" /></nuxt-link>
              </div>
              <div class="ml-2">
                <nuxt-link to="/register"
                  ><white-button item="Register"
                /></nuxt-link>
              </div>
            </div>
            <div
              v-else
              class="buttons d-flex justify-content-end align-items-center"
            >
              <div class="mr-2">
                <nuxt-link to="/"><white-button item="Account" /></nuxt-link>
              </div>
              <div class="mr-2" @click="logout">
                <white-button item="Logout" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WhiteButton from "../buttons/WhiteButton.vue";
export default {
  components: { WhiteButton },
  methods: {
    logout() {
      this.$auth
        .logout()
        .then((result) => {
          this.$toast.success('Log out')
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style  scoped>
.def-input {
  border: none;
  width: 90%;
  padding: 10px 25px;
  border-radius: 40px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>
