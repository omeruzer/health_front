<template>
  <div>
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <div class="">
          <h4>
            <span class="title">Why</span><br />
            Choose Us?
          </h4>
        </div>
      </div>
      <div class="cards">
        <div class="row">
          <div class="col-md-4 mt-3">
            <why-card />
          </div>
          <div class="col-md-4 mt-3">
            <why-card />
          </div>
          <div class="col-md-4 mt-3">
            <why-card />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WhyCard from "../why/WhyCard.vue";
export default {
  components: { WhyCard },
};
</script>

<style lang="scss" scoped>
</style>
