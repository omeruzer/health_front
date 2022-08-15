<template>
  <div>
    <div class="mt-5">
      <h3 class="title">Category Name</h3>
    </div>
    <div class="">
      <div class="mt-5">
        <h4>Sub<span class="title"> Categories</span></h4>
      </div>
      <div class="sc">
        <div class="row">
          <div class="ml-3 mt-3">
            <sub-category item="Category" />
          </div>
          <div class="ml-3 mt-3">
            <sub-category item="Category Category" />
          </div>
          <div class="ml-3 mt-3">
            <sub-category item="Category Category Category" />
          </div>
          <div class="ml-3 mt-3">
            <sub-category item="Category Category Category Category" />
          </div>
          <div class="ml-3 mt-3">
            <sub-category item="Category Category Category Category" />
          </div>
          <div class="ml-3 mt-3">
            <sub-category item="Category" />
          </div>
          <div class="ml-3 mt-3">
            <sub-category item="Category" />
          </div>
          <div class="ml-3 mt-3">
            <sub-category item="Category Category" />
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <div class="">
        <div class="mt-5">
          <h4><span class="title">Services</span></h4>
          <div class="mt-3 mb-3">
            <div class="filter"><span class="title">Filter</span></div>
          </div>
        </div>
        <div class="sc">
          <div class="row">
            <div class="ml-3 mt-3">
              <service-card />
            </div>
            <div class="ml-3 mt-3">
              <service-card />
            </div>
            <div class="ml-3 mt-3">
              <service-card />
            </div>
            <div class="ml-3 mt-3">
              <service-card />
            </div>
            <div class="ml-3 mt-3">
              <service-card />
            </div>
            <div class="ml-3 mt-3">
              <service-card />
            </div>
            <div class="ml-3 mt-3">
              <service-card />
            </div>
            <div class="ml-3 mt-3">
              <service-card />
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          pagination
          mt-5
          mb-5
          d-flex
          justify-content-center
          align-items-center
        "
      >
        <div class="d-flex justify-content-center align-items-center">
          <div class="pag-c">1</div>
          <div class="pag-c">2</div>
          <div class="pag-c">3</div>
          <div class="pag-c">4</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubCategory from "../../components/category/SubCategory.vue";
import ServiceCard from "../../components/services/ServiceCard.vue";
export default {
  components: { SubCategory, ServiceCard },
};
</script>

<style scoped>
.filter {
  background-color: #fff;
  width: fit-content;
  padding: 8px 35px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 15px;
}
.pag-c {
  background-color: #2155cd;
  color: #fff;
  margin-left: 5px;
  padding: 5px 15px;
  border-radius: 30px;
}
</style>
