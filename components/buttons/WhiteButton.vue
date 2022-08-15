<template>
  <div>
    <button class="white-button">{{item}}</button>
  </div>
</template>

<script>
export default {
  props:['item']
};
</script>

<style scoped>
.white-button{
  border: none;
  background-color: #fff;
  padding: 6px 40px;
  border-radius: 25px;
  color: #2155CD;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>
