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
      
      <div class="btn-share">
        <img
          src="/img/phone.png"
          class="img-btn-share"
          width="35"
          height="35"
        />
        <el-button
          type="success"
          :icon="Download"
          circle
          style="position: absolute; right: 10px"
        />
        <p class="lb-btn-share"><a href="tel:0454545454">ádasdasdas</a></p>
      </div>
      <div class="btn-share">
        <img
          src="/img/facebook.png"
          class="img-btn-share"
          width="35"
          height="35"
        />
        <p class="lb-btn-share">
          <a href="https://www.facebook.com/nguyennamkkb" target="_blank">
            NguyễnLương NamNguyễnLương NamNguyễnLương Nam</a
          >
        </p>
      </div>
      <div class="btn-share" v-for="item in list" :key="item.id">
        <img
          v-bind:src= item.urlIcon
          class="img-btn-share"
          width="35"
          height="35"
        />
        <p class="lb-btn-share">
          <a v-bind:href=item.url target="_blank">
            {{ item.name }}</a
          >
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
    <div style="display: flex; align-items: center; justify-content: center">
      <img src="/img/qr.png" width="200" height="200" />
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
export default {
  data() {
    return {
      list: [
        {
          id:1,
          urlIcon: "/img/phone.png",
          name: "0358 73 73 73",
          url: "tel:0454545454",
        },
        {
          id:2,
          urlIcon: "/img/facebook.png",
          name: "Nguyễn Lương Nam",
          url: "https://www.facebook.com/nguyennamkkb",
        },
      ],
    };
  },
};
</script>
