<template>
  <div>
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <div class="">
          <h4>
            <span class="title">Best</span><br />
            Services
          </h4>
        </div>
        <div class="">
          <span class="title">View All</span>
        </div>
      </div>
      <div class="cards">
        <div class="row">
          <div class="col-md-3  mt-3">
            <service-card/>
          </div>
          <div class="col-md-3 mt-3">
            <service-card/>
          </div>
          <div class="col-md-3 mt-3">
            <service-card/>
          </div>
          <div class="col-md-3 mt-3">
            <service-card/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCard from '../services/ServiceCard.vue';
export default {
  components: { ServiceCard },};
</script>

<style lang="scss" scoped>
</style>
