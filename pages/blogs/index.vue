<template>
  <div class="container">
    <div class="row mt-5 ml-2">
      <h4>
        <span class="title">Blogs</span>
      </h4>
    </div>
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
    <div
      class="
        pagination
        mt-5
        mb-5
        d-flex
        justify-content-center
        align-items-center
      "
    >
      <div class="d-flex justify-content-center align-items-center">
        <div class="pag-c">1</div>
        <div class="pag-c">2</div>
        <div class="pag-c">3</div>
        <div class="pag-c">4</div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from "../../components/blogs/BlogCard.vue";
export default {
  components: { BlogCard },
};
</script>

<style scoped>
.pag-c {
  background-color: #2155cd;
  color: #fff;
  margin-left: 5px;
  padding: 5px 15px;
  border-radius: 30px;
}
</style>
