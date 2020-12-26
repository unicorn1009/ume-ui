<template>
  <el-container>
    <el-header>
      <NavHeader :userInfo="userInfo"></NavHeader>
    </el-header>
    <el-main>
      <div class="main-div">
        <el-row :gutter="20">
          <el-col :span="18">
            <div class="grid-content bg-purple">
              <video ref="player" controls></video>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <ChatRoom />
            </div>
          </el-col>
        </el-row>
      </div>
    </el-main>
    <el-footer>
      <div>
        <div>用户名:{{userInfo.username}}</div>
        <div>头像地址:{{userInfo.avatar}}</div>
      </div>
      </el-footer>
  </el-container>
</template>

<script>
import { defineComponent } from "vue";
import NavHeader from "../components/NavHeader.vue";
import ChatRoom from "../components/ChatRoom.vue";
import cookie from "js-cookie";

export default defineComponent({
  name: "Main",
  data() {
    return {
      btnName: "点我",
      token: "",
      userInfo: {
        username: "",
        age: "",
        avater: "",
        phoneNumber: "",
        gender: "",
      },
    };
  },
  components: {
    NavHeader,
    ChatRoom,
  },
  mounted() {
    // this._init();
    // this.$socket.emit('connection', 1)
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      console.log('开始从cookie中获取用户信息');
      // 从cookie中获取用户信息
      let userStr = cookie.get("ume_user");
      // json字符串转js对象
      
      if (userStr) {
        console.log("从cookie中获取到了用户信息");
        this.userInfo = JSON.parse(userStr);
      }
    },
    handleClick() {
      console.log("Hello world");
    },
    async _init() {
      let vs = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      this.$refs.player.srcObject = vs;
    },
  },
});
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

video {
  width: 800px;
  height: 600px;
}

.el-header {
  line-height: 36px;
}

.el-footer {
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;

  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>

