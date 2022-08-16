<template>
  <div class="container">
    <div class="row mt-3 p-4">
      Blogs <span class="title mx-2">></span>
      <span class="sub-title">Blog Title</span>
    </div>
    <div class="row mt-3 mb-2 px-4">
      <h2>Blog Title</h2>
    </div>
    <div class="row">
      <div class="card" style="width: 100%">
        <div class="image d-flex justify-content-center p-5">
          <img src="@/static/air.png" alt="" style="width: 85%" />
        </div>
        <div class="text p-4">
          <p class="sub-title">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p class="sub-title">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
    <div class="row mt-5 mb-5">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <div class="">
            <h4>
              <span class="title">Other</span><br />
              Blogs
            </h4>
          </div>
          <div class="">
            <span class="title"
              ><nuxt-link to="/blogs" class="title">View All</nuxt-link></span
            >
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
  </div>
</template>

<script>
import BlogCard from "../../components/blogs/BlogCard.vue";
export default {
  components: { BlogCard },
};
</script>

<style  scoped>
.card {
  border-radius: 25px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>
