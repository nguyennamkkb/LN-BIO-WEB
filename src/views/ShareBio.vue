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
#app {
  background-image: url("/img/pxfuel.jpg");
  background-size: cover;
  height: 100vh;
}

/* .main { */
/* border-style: ridge;
   border-color: rgb(245, 164, 106); */
/* border-width: 0.5px; */
/* } */
.header {
  width: 100%;
  height: auto;
  display: inline-block;
  background-color: rgba(240, 240, 240, 0.2);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  color: red;
  font-weight: bold;
  font-size: large;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.demo-image {
  padding-top: 20px;
}

.lb-bio {
  display: inline-block;
  width: 60%;
  /* height: 100px; */
  word-wrap: break-word;
}

.Mid {
  width: 100%;
  height: auto;
  padding-bottom: 30px;
  padding-top: 10px;
  /* display: inline-block; */
  /* background-color: aquamarine; */
}

.btn-share {
  display: inline-block;
  /* padding: 5px; */
  margin: auto;
  margin-top: 10px;
  height: auto;
  width: 80%;
  background-color: bisque;
  border-radius: 15px;
  border-color: aqua;
  position: relative;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.img-btn-share {
  width: 35px;
  height: 35px;
  padding: 10px;
  float: left;
  position: absolute;
  display: flex;
  align-items: center;
  left: 5px;
  border-radius: 15px;
}

.lb-btn-share {
  font-weight: bold;
  float: left;
  font-size: 20px;
  margin-left: 55px;
  display: flex;
  align-items: center;
  position: relative;
  width: auto;
  color: blue;
}
.lb-btn-share a {
  text-decoration: none;
  margin-right: 5px;
  width: auto;
  word-wrap: break-word;
}
.qr-content {
  /* position: relative; */
  width: 200px;
  height: 200px;
  position: relative;
}
.qr-image {
  position: absolute;
}
.qr-icon {
  position: absolute;
  top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    margin: auto;
    border-radius: 10px;
} 
</style>
<script lang="ts" setup>
import { ref } from "vue";
import { Edit, Download, Share } from "@element-plus/icons-vue";

const centerDialogVisible = ref(false);
const fit = "cover";
const url =
  "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg";
</script>

<script lang="ts">
import { getProfile } from "../api/profile";
import QrcodeVue from "qrcode.vue";

export default {
  components: {
    QrcodeVue,
  },
  data() {
    return {
      valueUrlQR: "https://example.com",
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
      const data = await getProfile(this.param);
      console.log(data.data);
      // if (data.data) {
      //  console.log(data.data)
      // }
    },
  },
};
</script>
