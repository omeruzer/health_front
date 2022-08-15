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
            <div class="buttons d-flex justify-content-end align-items-center">
              <div class="mr-2">
                <white-button item="Login" />
              </div>
              <div class="ml-2">
                <white-button item="Register" />
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
