<template>
  <div>
    <nuxt-link :to="`/service/${item.slug}/${item.id}`">
      <div class="card">
        <div class="img">
          <img class="service-img" :src="item.images[1].img" alt="" />
        </div>
        <div class="p-3">
          <div class="service-title">
            <b>{{ textShorting(item.title) }}</b>
          </div>
          <div class="company">
            <span>{{ textShorting(item.company.name) }}</span>
          </div>
          <div class="address">
            <span
              >{{ item.company.city.name }} /
              {{ item.company.country.name }}</span
            >
          </div>
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
              <span class="title"
                ><b>{{moneyFormat(item.price) }}</b></span
              >
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    textShorting(params) {
      if (params) {
        return params.length > 20 ? params.slice(0, 20) + "..." : params;
      }
    },
    moneyFormat(number) {
      var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });
      return formatter.format(number);
    },
  },
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
  border-radius: 15px;
}
.card {
  border-radius: 25px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.star-rate {
  color: #efce4a;
}
</style>
