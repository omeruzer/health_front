<template>
  <div>
    <div class="container mt-5 mb-5">
      <div class="">
        <home />
      </div>
      <div class="mt-5">
        <categories />
      </div>
      <div class="mt-5">
        <best-services />
      </div>
      <div class="mt-5">
        <why />
      </div>
      <div class="mt-5 mb-5">
        <best-company />
      </div>
      <div class="mt-5">
        <text-section />
      </div>
      <div class="mt-5">
        <review />
      </div>
      <div class="mt-5">
        <blogs />
      </div>
    </div>
  </div>
</template>

<script>
import BlueButton from "../components/buttons/BlueButton.vue";
import BestCompany from "../components/home/BestCompany.vue";
import BestServices from "../components/home/BestServices.vue";
import Blogs from "../components/home/Blogs.vue";
import Categories from "../components/home/Categories.vue";
import Review from "../components/home/Review.vue";
import TextSection from "../components/home/TextSection.vue";
import Why from "../components/home/Why.vue";
export default {
  components: {
    BlueButton,
    BestServices,
    Categories,
    Why,
    BestCompany,
    TextSection,
    Blogs,
    Review,
  },
};
</script>

<style  scoped>
.title {
  color: #2155cd;
}
</style>
