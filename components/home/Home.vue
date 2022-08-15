<template>
  <div class="">
    <div class="row">
      <div class="col-md-6">
        <div class="mt-5">
          <div class="">
            <h1 class="title">World <br />Health Center</h1>
          </div>
          <div class="">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s
          </div>
          <div class="mt-3">
            <blue-button item="Start"/>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="d-flex justify-content-end">
          <img src="@/static/doctor1.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlueButton from '../buttons/BlueButton.vue';
export default {
  components: { BlueButton },};
</script>

<style scoped>
.title {
  color: #2155cd;
}
</style>
