<template>
  <div style="display: inline-block; width: 400px" class="main">
    <div class="header">
      <div class="demo-image">
        <el-image style="width: 150px; height: 150px; border-radius: 10px" :src="url" :fit="fit" />
      </div>
      <div class="lb-bio">
        <p>Nguyeenx Luwong nam<br />Lap trinh vien</p>
      </div>
    </div>
    <div class="Mid">
      <div class="btn-share">
        <img src="/img/phone.png" class="img-btn-share"
          width="35" height="35">
        <p class="lb-btn-share">0454545454</p>
      </div>
      <div class="btn-share">
        <img src="/img/facebook.png" class="img-btn-share"
          width="35" height="35">
        <p class="lb-btn-share">Nguyễn Lương Nam</p>
      </div>
     
    </div>
  </div>
</template>

<style>

#app{
  background-image: url("/img/pxfuel.jpg");
  background-size: cover;
  height: 100vh;
}

.main {
   /* border-style: ridge;
   border-color: rgb(245, 164, 106); */
   /* border-width: 0.5px; */
}
.header {
  width: 400px;
  height: 300px;
  display: inline-block;
  background-color:rgba(240, 240, 240,0.2);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  color: red;
  font-weight: bold;
  font-size: large;
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
  width: 400px;
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
</style>
<script lang="ts" setup>
const fit = "cover";
const url =
  "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg";
</script>
