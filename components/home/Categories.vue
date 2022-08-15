<template>
  <div>
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <div class="">
          <h4>
            Service<br />
            <span class="title">Categories</span>
          </h4>
        </div>
        <div class="">
          <span class="title">View All</span>
        </div>
      </div>
      <div class="cards">
        <div class="row">
          <div class="col-md-3 mt-3">
            <category-card />
          </div>
          <div class="col-md-3 mt-3">
            <category-card />
          </div>
          <div class="col-md-3 mt-3">
            <category-card />
          </div>
          <div class="col-md-3 mt-3">
            <category-card />
          </div>
          <div class="col-md-3 mt-3">
            <category-card />
          </div>
          <div class="col-md-3 mt-3">
            <category-card />
          </div>
          <div class="col-md-3 mt-3">
            <category-card />
          </div>
          <div class="col-md-3 mt-3">
            <category-card />
          </div>
        </div>
      </div>
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
