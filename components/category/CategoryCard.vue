<template>
  <div>
    <nuxt-link :to="`/category/${item.slug}`">
      <div class="card">
        <div class="d-flex justify-content-start align-items-center">
          <div class="icon-card">
            <div class="icon-bg">
              <i class="fa fa-heart icon"></i>
            </div>
          </div>
          <div class="text ml-3">
            <span>{{item.title}}</span>
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
.card {
  padding: 8px 12px;
  border-radius: 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.icon-bg {
  background-color: #2155cd;
  padding: 10px 15px;
  border-radius: 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.icon {
  color: #fff;
}
</style>
