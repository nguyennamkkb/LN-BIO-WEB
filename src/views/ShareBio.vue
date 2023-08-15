<template>
  <div style="display: inline-block; width: 90%" class="main">
    <div class="header">
      <div class="demo-image">
        <el-image
          style="width: 150px; height: 150px; border-radius: 10px"
          :src="url"
          :fit="fit"
        />
      </div>
      <div class="lb-bio">
        <p>Nguyễn Lương Nam<br />Lap trinh vien</p>
      </div>
    </div>
    <div class="Mid">
      <a
        style="
          color: navajowhite;
          font-weight: 700;
          text-shadow: 2px 2px 5px rgb(2, 1, 1);
        "
        @click="centerDialogVisible = true"
      >
        Chia sẻ qua QR</a
      >

      <div class="btn-share" v-for="item in list" :key="item.id">
        <img
          v-bind:src="item.urlIcon"
          class="img-btn-share"
          width="35"
          height="35"
        />
        <p class="lb-btn-share">
          <a v-bind:href="item.url" target="_blank"> {{ item.name }}</a>
        </p>
      </div>
    </div>
  </div>

  <!-- dialog -->
  <el-dialog
    v-model="centerDialogVisible"
    title="Quét để xem thông tin"
    height="auto"
    width="auto"
    center
  >
    <div style="display: flex; align-items: center; justify-content: center;height: auto;">
      <!-- <img src="/img/qr.png" width="200" height="200" /> -->
      <div class="qr-content">
        <qrcode-vue
          :value="valueUrlQR"
          :size="size"
          level="H"
          class="qr-image"
        />
        <img src="/img/phone.png" alt="" class="qr-icon" width="35" height="35" />
      </div>
    </div>
  </el-dialog>
</template>

<style>

</style>
<script lang="ts" setup>
import { ref } from "vue";

const centerDialogVisible = ref(false);
const fit = "cover";
const url =
  "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg";
</script>

<script lang="ts">
import profileService from "../api/profile";
import QrcodeVue from "qrcode.vue";

export default {
  components: {
    QrcodeVue,
  },
  data() {
    return {
      valueUrlQR: "",
      size: 200,
      param: "",
      list: [
        {
          id: 1,
          urlIcon: "/img/phone.png",
          name: "0358 73 73 73",
          url: "tel:0454545454",
        },
        {
          id: 2,
          urlIcon: "/img/facebook.png",
          name: "Nguyễn Lương Nam",
          url: "https://www.facebook.com/nguyennamkkb",
        },
      ],
    };
  },
  created() {
    this.param = String(this.$route.params.biourl);
    this.valueUrlQR = window.location.href;
    this.getProfile();
  },
  methods: {
    getProfile: async function () {
      const data = await profileService.getProfile(this.param)
      console.log(data.data);
    },
   
  },
};
</script>
