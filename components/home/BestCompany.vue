<template>
  <div>
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <div class="">
          <h4>
            Best
            <br />
            <span class="title">Companies</span>
          </h4>
        </div>
        <div class="">
          <span class="title">View All</span>
        </div>
      </div>
      <div class="cards">
        <div class="row" v-if="loader">
          <div class="col-md-3 mt-3" v-for="(item, index) in list" :key="index">
            <company-card :item="item" />
          </div>
        </div>
        <loader v-else />
      </div>
    </div>
  </div>
</template>

<script>
import CompanyCard from "../company/CompanyCard.vue";
import ServiceCard from "../services/ServiceCard.vue";
export default {
  components: { ServiceCard, CompanyCard },
  data() {
    return {
      list: [],
      loader:false
    };
  },
  mounted() {
    this.getItem();
  },
  methods: {
    getItem() {
      this.$axios
        .get("http://localhost:8000/api/company/home-items")
        .then((result) => {
          this.list = result.data;
          this.loader=true
        })
        .catch((err) => {});
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
