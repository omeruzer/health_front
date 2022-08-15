<template>
  <div>
    <nuxt-link :to="`/category/sub-category`">
      <div class="card">
        <span class="title">{{ item }}</span>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style  scoped>
.card {
  padding: 5px 45px;
  border-radius: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>
