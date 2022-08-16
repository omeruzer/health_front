<template>
  <div class="container">
    <div class="row mt-3 p-4">
      Category <span class="title mx-2">></span> Sub Category
      <span class="title mx-2">></span> <span class="sub-title">{{data.title}}</span>
    </div>
    <div class="row mt-3 mb-2 px-4">
      <h2>{{ data.title }}</h2>
    </div>
    <div class="row">
      <div class="col-md-9 col-sm-12 mt-3">
        <div class="row">
          <div class="card">
            <div class="image d-flex justify-content-center">
              <div class="p-4" style="width: 100%">
                <b-carousel
                  id="carousel-1"
                  v-model="slide"
                  :interval="4000"
                  controls
                  indicators
                  background="#ababab"
                  img-width="1024"
                  img-height="480"
                  style="text-shadow: 1px 1px 2px #333"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
                >
                  <b-carousel-slide
                    v-for="(item, index) in data.images"
                    :key="index"
                    :img-src="item.img"
                  ></b-carousel-slide>
                </b-carousel>
              </div>
            </div>
            <div class="px-4">
              <p><b>Service Description</b></p>
            </div>
            <div class="px-4">
              <p class="sub-title">
                {{ data.desc }}
              </p>
            </div>
            <div class="px-4 pb-3 d-flex justify-content-end">
              <span class="sub-title mr-3">Price:</span>
              <h4><b class="title">{{moneyFormat(data.price)}}</b></h4>
            </div>
          </div>
          <div class="card mt-4">
            <div class="px-4 pt-4">
              <h6><b class="title">Service Detail</b></h6>
            </div>
            <div class="px-4 py-2">
              <div class="row">
                <div class="col-md-4">
                  <div
                    class="d-flex justify-content-start align-items-center mt-3"
                  >
                    <span><b>Content:</b></span>
                    <span class="ml-2"
                      ><img src="@/static/icons/no.png" alt=""
                    /></span>
                  </div>
                  <div
                    class="d-flex justify-content-start align-items-center mt-3"
                  >
                    <span><b>Content:</b></span>
                    <span class="ml-2"
                      ><img src="@/static/icons/ok.png" alt=""
                    /></span>
                  </div>
                  <div
                    class="d-flex justify-content-start align-items-center mt-3"
                  >
                    <span><b>Content:</b></span>
                    <span class="ml-2"
                      ><img src="@/static/icons/ok.png" alt=""
                    /></span>
                  </div>
                </div>
                <div class="col-md-4">
                  <div
                    class="d-flex justify-content-start align-items-center mt-3"
                  >
                    <span><b>Content:</b></span>
                    <span class="ml-2"
                      ><img src="@/static/icons/ok.png" alt=""
                    /></span>
                  </div>
                  <div
                    class="d-flex justify-content-start align-items-center mt-3"
                  >
                    <span><b>Content:</b></span>
                    <span class="ml-2"
                      ><img src="@/static/icons/no.png" alt=""
                    /></span>
                  </div>
                  <div
                    class="d-flex justify-content-start align-items-center mt-3"
                  >
                    <span><b>Content:</b></span>
                    <span class="ml-2"
                      ><img src="@/static/icons/ok.png" alt=""
                    /></span>
                  </div>
                </div>
                <div class="col-md-4">
                  <div
                    class="d-flex justify-content-start align-items-center mt-3"
                  >
                    <span><b>Content:</b></span>
                    <span class="ml-2"
                      ><img src="@/static/icons/ok.png" alt=""
                    /></span>
                  </div>
                  <div
                    class="d-flex justify-content-start align-items-center mt-3"
                  >
                    <span><b>Content:</b></span>
                    <span class="ml-2"
                      ><img src="@/static/icons/ok.png" alt=""
                    /></span>
                  </div>
                  <div
                    class="d-flex justify-content-start align-items-center mt-3"
                  >
                    <span><b>Content:</b></span>
                    <span class="ml-2"
                      ><img src="@/static/icons/no.png" alt=""
                    /></span>
                  </div>
                </div>
              </div>
              <div class="row px-2 mt-4 py-2 d-flex justify-content-end">
                <blue-button item="Satın Al" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-12 mt-3">
        <company-service-card :item='data.company' />
      </div>
    </div>
    <div class="row mt-5">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <div class="">
            <h4>
              <span class="title">Other Services </span><br />
              Of This Company
            </h4>
          </div>
          <div class="">
            <span class="title">View All</span>
          </div>
        </div>
        <div class="cards">
          <div class="row">
            <div
              class="col-md-3 mt-3"
              v-for="(item, index) in list"
              :key="index"
            >
              <service-card :item="item" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <div class="">
            <h4>
              <span class="title">Other </span><br />
              Services
            </h4>
          </div>
          <div class="">
            <span class="title">View All</span>
          </div>
        </div>
        <div class="cards">
          <div class="row">
            <div
              class="col-md-3 mt-3"
              v-for="(item, index) in list"
              :key="index"
            >
              <service-card :item="item" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5 mb-5">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <div class="">
            <h4>
              <span class="title">Blogs</span>
            </h4>
          </div>
          <div class="">
            <span class="title">View All</span>
          </div>
        </div>
        <div class="cards">
          <div class="row">
            <div class="col-md-3 mt-3">
              <blog-card />
            </div>
            <div class="col-md-3 mt-3">
              <blog-card />
            </div>
            <div class="col-md-3 mt-3">
              <blog-card />
            </div>
            <div class="col-md-3 mt-3">
              <blog-card />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from "../../../components/blogs/BlogCard.vue";
import BlueButton from "../../../components/buttons/BlueButton.vue";
import ServiceCard from "../../../components/services/ServiceCard.vue";
export default {
  components: { BlueButton, ServiceCard, BlogCard },
  data() {
    return {
      data: {},
      list: [],
    };
  },
  mounted() {
    this.getOtherServices();
    this.getItem();
  },
  methods: {
    getItem() {
      this.$axios
        .get(`http://localhost:8000/api/service/${this.$route.params.id}`)
        .then((result) => {
          this.data = result.data;
        })
        .catch((err) => {});
    },
    getOtherServices() {
      this.$axios
        .get("http://localhost:8000/api/service/home-items")
        .then((result) => {
          this.list = result.data;
        })
        .catch((err) => {});
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
img {
  border-radius: 15px;
}
.star-rate {
  color: #efce4a;
}
.card {
  border-radius: 25px;
  width: 100%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.service-img {
  border-radius: 25px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>
