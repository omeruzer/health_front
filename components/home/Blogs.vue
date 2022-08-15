<template>
  <div>
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <div class="">
          <h4>
            <span class="title">Blogs</span>
          </h4>
        </div>
        <div class="">
          <span class="title">View All</span>
        </div>
      </div>
      <div class="cards">
        <div class="row">
          <div class="col-md-3 mt-3">
            <blog-card />
          </div>
          <div class="col-md-3 mt-3">
            <blog-card />
          </div>
          <div class="col-md-3 mt-3">
            <blog-card />
          </div>
          <div class="col-md-3 mt-3">
            <blog-card />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from "../blogs/BlogCard.vue";
export default {
  components: { BlogCard },
};
</script>

<style lang="scss" scoped>
</style>
