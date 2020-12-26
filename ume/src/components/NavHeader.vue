<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <div class="grid-content">
        <el-button round icon="el-icon-s-home">主页</el-button>
        <el-button round>看个电影</el-button>
        <el-button round>K个歌</el-button>
        <el-button round>看本书</el-button>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content">
        <el-input placeholder="请输入内容" class="input-with-select"
          ><template #append>
            <el-button icon="el-icon-search"></el-button>
          </template>
        </el-input>
      </div>
    </el-col>
    <el-col :span="8">
      <!-- <div class="grid-content head-right">
        <el-button icon="el-icon-user-solid" circle></el-button>
        <el-link class="head-link" :underline="false">个人中心</el-link>
        <el-link class="head-link" :underline="false">消息</el-link>
        <el-button type="primary" icon="el-icon-switch-button">创建房间</el-button>
      </div> -->
      <div>
        <div class="grid-content head-right-login" v-if="userInfo.username">
          <el-avatar :size="40" :src="userInfo.avatar"></el-avatar>
          <el-link class="head-link" :underline="false">{{
            userInfo.username
          }}</el-link>
          <el-link class="head-link" :underline="false" @click="logout"
            >退出</el-link
          >
          <el-button type="primary" icon="el-icon-switch-button"
            >创建房间</el-button
          >
        </div>
        <div class="grid-content head-right-logout" v-if="!userInfo.username">
          <el-link class="head-link" :underline="false" href="/login"
            >登录</el-link
          >
          <span>|</span>
          <el-link class="head-link" :underline="false" href="/register"
            >注册</el-link
          >
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { defineComponent } from "vue";
import cookie from "js-cookie";

export default defineComponent({
  name: "NavHeader",
  props: ["userInfo"],
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
    };
  },
  methods: {
    logout() {
      // 清空cookie中的数据
      cookie.set("ume_token", "", { domin: "localhost" });
      cookie.set("ume_user", "", { domin: "localhost" });
      this.$router.push('/')
    },

  },
});
</script>

<style scoped>
.head-right > * {
  margin: auto 10px;
  padding: 5px;
}

.head-right .head-link {
  height: 36px;
}

.head-right-login > * {
  margin: auto 10px;
  padding: 5px;
}
.head-right-logout > * {
  margin: auto 2px;
  padding: 0px;
}

.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  text-align: center;
  padding: 5px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>