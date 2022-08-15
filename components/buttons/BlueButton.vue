<template>
  <div>
    <button class="blue-button">{{item}}</button>
  </div>
</template>

<script>
export default {
  props:['item']
};
</script>

<style scoped>
.blue-button{
  border: none;
  background-color: #2155CD;
  padding: 6px 40px;
  border-radius: 25px;
  color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>
