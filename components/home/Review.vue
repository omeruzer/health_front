<template>
  <div>
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <div class="">
          <h4><span class="title">Review</span><br />of our customers</h4>
        </div>
      </div>
      <div class="cards"></div>
    </div>
  </div>
</template>

<script>
import CategoryCard from "../category/CategoryCard.vue";
export default {
  components: { CategoryCard },
};
</script>

<style lang="scss" scoped>
</style>
