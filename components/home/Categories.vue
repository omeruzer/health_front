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
      </div>
      <div class="cards">
        <div class="row" v-if="load">
          <div class="col-md-3 mt-3" v-for="(item, i) in list" :key="i">
            <category-card :item="item" />
          </div>
        </div>
        <loader v-else />
      </div>
    </div>
  </div>
</template>

<script>
import CategoryCard from "../category/CategoryCard.vue";
export default {
  components: { CategoryCard },
  data() {
    return {
      list: [],
      load: false,
    };
  },
  mounted() {
    this.getItem();
  },
  methods: {
    getItem() {
      this.$axios
        .get("http://localhost:8000/api/category/home-items")
        .then((result) => {
          this.list = result.data;
          this.load = true;
        })
        .catch((err) => {});
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
