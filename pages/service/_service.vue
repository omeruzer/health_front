<template>
  <div class="container">
    <div class="row mt-3 p-4">
      Category <span class="title mx-2">></span> Sub Category
      <span class="title mx-2">></span> Service Name
    </div>
    <div class="row mt-3 mb-2 px-4">
      <h2>Service Name</h2>
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
                    v-for="(item, index) in 3"
                    :key="index"
                    img-src="https://picsum.photos/1024/480/?image=58"
                  ></b-carousel-slide>
                </b-carousel>
              </div>
            </div>
            <div class="px-4">
              <p><b>Service Description</b></p>
            </div>
            <div class="px-4">
              <p class="sub-title">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p class="sub-title">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div class="px-4 pb-3 d-flex justify-content-end">
              <span class="sub-title mr-3">Price:</span>
              <h4><b class="title">$4.150</b></h4>
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
        <div class="card">
          <div class="image d-flex justify-content-center">
            <img style="width: 100%" src="@/static/compnay.png" alt="" />
          </div>
          <div class="company-info">
            <div class="d-flex justify-content-center mt-2">
              <h5><b>Company Name</b></h5>
            </div>
            <div class="d-flex justify-content-center">
              <h6 class="sub-title">Istanbul/Turkey</h6>
            </div>
            <div class="star">
              <div class="d-flex justify-content-center align-items-center">
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
            <div class="send-message my-3">
              <div class="d-flex justify-content-center align-items-center">
                <blue-button item="Mesaj Gönder" />
              </div>
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
            <div class="col-md-3 mt-3">
              <service-card />
            </div>
            <div class="col-md-3 mt-3">
              <service-card />
            </div>
            <div class="col-md-3 mt-3">
              <service-card />
            </div>
            <div class="col-md-3 mt-3">
              <service-card />
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
            <div class="col-md-3 mt-3">
              <service-card />
            </div>
            <div class="col-md-3 mt-3">
              <service-card />
            </div>
            <div class="col-md-3 mt-3">
              <service-card />
            </div>
            <div class="col-md-3 mt-3">
              <service-card />
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
              <blog-card/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from '../../components/blogs/BlogCard.vue';
import BlueButton from "../../components/buttons/BlueButton.vue";
import ServiceCard from "../../components/services/ServiceCard.vue";
export default {
  components: { BlueButton, ServiceCard,BlogCard },
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
