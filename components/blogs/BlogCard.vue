<template>
  <div>
    <div class="card">
      <div class="img">
        <img class="service-img" src="@/static/air.png" alt="" />
      </div>
      <div class="p-3">
        <div class="service-title"><b>Blog Title</b></div>
        <div class="price mt-2">
          <div class="d-flex justify-content-end">
            <span class="title">Go to detail</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.service-title {
  font-size: 20px;
}
.company {
  font-size: 14px;
  color: #7e7e7e;
}
.address {
  font-size: 14px;
  color: #7e7e7e;
}
.service-img {
  width: 100%;
}
.card {
  border-radius: 25px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.star-rate {
  color: #efce4a;
}
</style>
