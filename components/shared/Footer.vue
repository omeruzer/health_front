<template>
  <div>
    <div class="container-fluid footer">
      <div class="container">
        <div class="row py-4">
          <div class="col-md-4">
            <div class=""><h4 class="text">allhealthly.com</h4></div>
            <div class="mt-4">
              <p class="text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class=""><h4 class="text">Pages</h4></div>
            <div class="mt-4">
              <p>
                <nuxtLink to="/login"><u class="text">Login</u></nuxtLink>
              </p>
              <p>
                <nuxtLink to="/register"><u class="text">Register</u></nuxtLink>
              </p>
              <p>
                <nuxtLink to="/blogs"><u class="text">Blogs</u></nuxtLink>
              </p>
              <p>
                <nuxtLink to="/about"><u class="text">About Us</u></nuxtLink>
              </p>
              <p>
                <nuxtLink to="/contact"><u class="text">Contact</u></nuxtLink>
              </p>
              <p>
                <nuxtLink to="/privacy"><u class="text">Privacy</u></nuxtLink>
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="">
              <div class=""><h4 class="text">Social Medias</h4></div>
              <div class="mt-4">
                <div class="d-flex justify-content-start align-items-center">
                  <div class="sc-card">
                    <i class="fab fa-facebook icon"></i>
                  </div>
                  <div class="sc-card"><i class="fab fa-twitter icon"></i></div>
                  <div class="sc-card">
                    <i class="fab fa-instagram icon"></i>
                  </div>
                  <div class="sc-card"><i class="fab fa-youtube icon"></i></div>
                  <div class="sc-card">
                    <i class="fab fa-linkedin icon"></i>
                  </div>
                </div>
              </div>
              <div class="mt-2">
                <div class=""><h4 class="text">Bulten</h4></div>
                <div class="mt-4">
                  <div class="d-flex justify-content-start align-items-center">
                    <div class="">
                      <input
                        type="text"
                        class="def-input"
                        placeholder="E-mail"
                      />
                    </div>
                    <div class="">
                      <white-button item="Send" />
                    </div>
                  </div>
                </div>
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

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css";
.text {
  color: #fff;
}
.icon {
}
.footer {
  background-color: #5589ff;
  width: 100%;
}
.sc-card {
  background-color: #fff;
  margin: 10px;
  padding: 8px 12px;
  border-radius: 10px;
}
.def-input {
  border: none;
  padding: 5px 25px;
  border-radius: 40px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>
