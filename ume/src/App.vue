<template>
  <el-container>
    <el-header>
      <NavHeader></NavHeader>
    </el-header>
    <el-main>
      <div class="main-div">
        <!-- <video autoplay ref="player"></video> -->
      </div>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

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

.el-header{
  line-height: 36px;
}
.el-footer {
  text-align: center;
  line-height: 60px;
}

.el-main {

  text-align: center;
}

.main-div {
  height: 800px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>

<script lang='ts'>
import { defineComponent } from "vue";
import NavHeader from "./components/NavHeader.vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      btnName: "点我",
    };
  },
  components: {
    NavHeader,
  },
  mounted() {
    // this._init();
  },
  methods: {
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
