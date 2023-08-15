<template>
  <div style="display: inline-block; width: 90%" class="main">
    <div class="header">
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="Đăng nhập" name="first">
          <p>Đăng nhập</p>
          <el-form
            :model="ruleFormLogin"
            status-icon
            ref="ruleFormLogin"
            label-width="120px"
            class="demo-ruleFormLogin"
          >
            <el-form-item label="Số điện thoại" prop="">
              <el-input
                type="text"
                v-model="ruleFormLogin.phone"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="">
              <el-input
                type="password"
                v-model="ruleFormLogin.password"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm()">Submit</el-button>
              <el-button @click="resetForm()">Reset</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="Đăng ký" name="second">
          <p>Đăng ký</p>
          <el-form
            :model="ruleFormRegister"
            status-icon
            ref="ruleFormRegister"
            label-width="120px"
            class="demo-ruleFormLogin"
          >
            <el-form-item label="Số điện thoại" prop="">
              <el-input
                type="text"
                v-model="ruleFormRegister.phone"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="Họ tên hiển thị" prop="">
              <el-input
                type="text"
                v-model="ruleFormRegister.fullName"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="Địa chỉ Email" prop="">
              <el-input
                type="text"
                v-model="ruleFormRegister.email"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="Mật khẩu" prop="">
              <el-input
                type="password"
                v-model="ruleFormRegister.pass"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitFormRegister()"
                >Submit</el-button
              >
              <el-button @click="resetFormRegister()">Reset</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="Mid"></div>
  </div>

  <!-- dialog -->
  <!-- <el-dialog
    v-model="centerDialogVisible"
    title="Quét để xem thông tin"
    height="auto"
    width="auto"
    center
  >
    <div style="display: flex; align-items: center; justify-content: center;height: auto;">
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
  </el-dialog> -->
</template>

<style>


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
// import { ref } from "vue";
// import type { TabsPaneContext } from 'element-plus'
// import { Edit, Download, Share } from "@element-plus/icons-vue";
// const activeName = ref('first')
const url =
  "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg";
</script>

<script lang="ts">
import QrcodeVue from "qrcode.vue";
import authServive from "../../api/auth";
import { Common } from "../../common/main";

export default {
  components: {
    QrcodeVue,
  },
  data() {
    return {
      ruleFormLogin: {
        phone: "",
        password: "",
      },
      ruleFormRegister: {
        fullName: "",
        phone: "",
        address: "",
        email: "",
        pass: "",
      },
      activeName: "first",
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
    // this.getProfile();
  },
  methods: {
    submitForm() {
      this.ruleFormLogin.phone = "0358737373";
      this.ruleFormLogin.password = "123456";

      authServive.login(this.ruleFormLogin.phone, this.ruleFormLogin.password).then((result) => {
        console.log(result)
      })
      
      
      
    },
    resetForm() {
      this.ruleFormLogin.password = "";
      this.ruleFormLogin.phone = "";
    },
    resetFormRegister() {
      this.ruleFormRegister.fullName = "";
      this.ruleFormRegister.phone = "";
      this.ruleFormRegister.email = "";
      this.ruleFormRegister.pass = "";
      this.ruleFormRegister.address = "";
    },
    submitFormRegister() {
      alert("submit!" + JSON.stringify(this.ruleFormRegister));
    },
  },
};
</script>
