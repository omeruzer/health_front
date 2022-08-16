<template>
  <div class="card">
    <div class="image d-flex justify-content-center">
      <img style="width: 100%" src="@/static/compnay.png" alt="" />
    </div>
    <div class="company-info">
      <div class="d-flex justify-content-center mt-2">
        <h5><b>Company Name</b></h5>
      </div>
      <div class="d-flex justify-content-center">
        <h6 class="sub-title">Istanbul/Turkey</h6>
      </div>
      <div class="star">
        <div class="d-flex justify-content-center align-items-center">
          <div class="">
            <img src="@/static/star.png" alt="" />
            <img src="@/static/star.png" alt="" />
            <img src="@/static/star.png" alt="" />
            <img src="@/static/star.png" alt="" />
            <img src="@/static/star.png" alt="" />
          </div>
          <div class="ml-1 star-rate">5.0</div>
        </div>
      </div>
      <div class="send-message my-3">
        <div class="d-flex justify-content-center align-items-center">
          <blue-button item="Mesaj Gönder" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['item']
};
</script>

<style lang="scss" scoped>
</style>
