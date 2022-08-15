<template>
  <div class="section">
    <div class="row">
      <div class="col-md-6">
        <div class="d-flex justify-content-center">
          <div class="circle-boz"></div>
          <img class="doctor" src="@/static/doctor2.png" alt="" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="d-flex justify-content-end">
          <div class="">
            <h4 class="title">Title Section</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlueButton from "../buttons/BlueButton.vue";
export default {
  components: { BlueButton },
};
</script>

<style scoped>
.title {
  color: #2155cd;
}

.section {
  margin-top: 120px;
}
.doctor {
  z-index: 25;
  margin-top: 50px;
  margin-left: 140px;
}
@media only screen and (max-width: 450px) {
  .doctor {
    margin-right: 140px;
    margin-bottom: 50px;
  }
}
.circle-boz {
  z-index: 22;
  position: absolute;
  -webkit-filter: blur(15px);
  -moz-filter: blur(15px);
  -o-filter: blur(15px);
  -ms-filter: blur(15px);
  filter: blur(25px);
  width: 250px;
  height: 250px;
  background-color: #2155cd;
  border-radius: 500px;
}
</style>
