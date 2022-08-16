<template>
  <div>
    <nuxt-link :to="`/company/${item.slug}`">
      <div class="card">
        <div class="img">
          <img class="service-img" src="@/static/compnay.png" alt="" />
        </div>
        <div class="p-3">
          <div class="service-title"><b>{{item.name}}</b></div>
          <div class="address"><span>{{item.city.name}} / {{item.country.name}}</span></div>
          <div class="star">
            <div class="d-flex align-items-center">
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
          <div class="price mt-2">
            <div class="d-flex justify-content-end">
              <span class="title">Go to detail</span>
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props:['item']
};
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

</style>
