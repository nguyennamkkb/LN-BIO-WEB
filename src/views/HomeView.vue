<template>
  <div style="display: inline-block; width: 400px">
    <div class="header">
      <div class="demo-image">
        <el-image
          style="width: 150px; height: 150px; border-radius: 10px"
          :src="url"
          :fit="fit"
        />
      </div>
      <div class="lb-bio">
        <p>sssssssssssssssssssssss<br />ssssss sssssssasdddddd dddddd dddddd</p>
      </div>
    </div>
    <div class="Mid">
      <div class="btn-share">
        <img src= "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" class="img-btn-share" width="35" height="35">
        <p class="lb-btn-share">Lien he</p>
      </div>
    </div>
  </div>
</template>

<style>
.header {
  width: 400px;
  height: 300px;
  display: inline-block;
  background-color: red;
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
  height: 300px;
  display: inline-block;
  background-color: aquamarine;
  
}
.btn-share {
  display: inline-block;
  padding: 10px;
  margin: 10px;
  height: 55px;
  width: 80%;
  background-color: bisque;
  border-radius: 5px;
  border-color: aqua;
}
.img-btn-share{
  width: 35px;
  height: 35px;
  padding: 10px;
  float: left;
}
.lb-btn-share{
 font-size: 20;
 font-weight: bold;
}
</style>
<script lang="ts" setup>
const fit = "cover";
const url =
  "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg";
</script>
