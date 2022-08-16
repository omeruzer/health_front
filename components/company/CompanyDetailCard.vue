<template>
  <div>
    <div class="card p-4">
      <div class="row">
        <div class="col-md-3">
          <div class="profil-img-card ml-4">
            <img class="profil-img" src="@/static/compnay.png" alt="" />
          </div>
        </div>
        <div class="col-md-9">
          <div class="ml-4 mt-3">
            <h4>Company Name</h4>
            <div class="mt-3">
              <b>Address:</b
              ><span class="sub-title ml-1"
                >İslamsaray,34, 35700, Bergama/Istanbul, Turkey</span
              >
            </div>
            <div class="">
              <b>Phone:</b><span class="sub-title ml-1">0595561161</span>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <p class="sub-title">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  border-radius: 25px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.sub-title {
  text-align: center;
}
.profil-img {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 20px;
}
</style>
