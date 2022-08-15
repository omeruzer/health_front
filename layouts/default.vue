<template>
  <div>
    <div class="d-none d-sm-block d-xs-none d-md-none d-lg-block circle"></div>
    <img
      class="
        d-none d-sm-block d-xs-none d-md-none d-lg-block
        head-icon head-icon-1
        hidden-sm hidden-md
      "
      src="@/static/1.png"
      alt=""
    />
    <img
      class="
        d-none d-sm-block d-xs-none d-md-none d-lg-block
        head-icon head-icon-2
        hidden-sm hidden-md
      "
      src="@/static/2.png"
      alt=""
    />
    <img
      class="
        d-none d-sm-block d-xs-none d-md-none d-lg-block
        head-icon head-icon-3
        hidden-sm hidden-md
      "
      src="@/static/3.png"
      alt=""
    />
    <img
      class="
        d-none d-sm-block d-xs-none d-md-none d-lg-block
        head-icon head-icon-4
        hidden-sm hidden-md
      "
      src="@/static/4.png"
      alt=""
    />
    <img
      class="
        d-none d-sm-block d-xs-none d-md-none d-lg-block
        head-icon head-icon-5
        hidden-sm hidden-md
      "
      src="@/static/5.png"
      alt=""
    />
    <img
      class="
        d-none d-sm-block d-xs-none d-md-none d-lg-block
        head-icon head-icon-6
        hidden-sm hidden-md
      "
      src="@/static/6.png"
      alt=""
    />
    <img
      class="
        d-none d-sm-block d-xs-none d-md-none d-lg-block
        head-icon head-icon-7
        hidden-sm hidden-md
      "
      src="@/static/1.png"
      alt=""
    />
    <Header />
    <div class="container">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/shared/Footer.vue";
import Header from "../components/shared/Header.vue";
export default {
  components: { Header, Footer },
};
</script>

<style>
a {
  text-decoration: none;
  color: #000;
}
a:hover {
  text-decoration: none;
}
.circle {
  right: -300px;
  top: -300px;
  position: absolute;
  -webkit-filter: blur(15px);
  -moz-filter: blur(15px);
  -o-filter: blur(15px);
  -ms-filter: blur(15px);
  filter: blur(250px);
  width: 800px;
  height: 800px;
  background-color: #0aa1dd;
  border-radius: 500px;
}

.head-icon {
  position: absolute;
}
.head-icon-1 {
  position: absolute;
  left: 150px;
  bottom: 550px;
}
.head-icon-2 {
  position: absolute;
  left: 550px;
  bottom: 550px;
}

.head-icon-3 {
  position: absolute;
  left: 1350px;
  bottom: 550px;
}

.head-icon-4 {
  position: absolute;
  left: 60px;
  bottom: 250px;
}

.head-icon-5 {
  position: absolute;
  left: 560px;
  bottom: 350px;
}
.head-icon-6 {
  position: absolute;
  left: 860px;
  bottom: 250px;
}
.head-icon-7 {
  position: absolute;
  left: 1360px;
  bottom: 200px;
}

@media only screen and (max-width: 450px) {
  .head-icon {
    display: hidden;
  }
}

body {
  background-color: #e8f9fd;
  font-family: "Itim", cursive;
  z-index: 15;
  overflow-x: hidden;
}
.title {
  color: #2155cd;
}
.sub-title {
  color: #7E7E7E;
}
</style>
