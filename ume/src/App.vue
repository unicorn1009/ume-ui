<template>
  <el-container>
    <el-header>
      <NavHeader></NavHeader>
    </el-header>
    <el-main>
      <div class="main-div">
        <audio controls ref="audio"></audio>
        <button @click="audioStart">开始</button>
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

.el-header,
.el-footer {
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

.main-div {
  height: 500px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>

<script >
import { defineComponent } from "vue";
import NavHeader from "./components/NavHeader.vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      btnName: "点我",
      audioStream: {}
    };
  },
  components: {
    NavHeader,
  },

  methods: {

    handleClick() {
      console.log("Hello world");
    },

    audioFun: async function () {
      let audioStream = await navigator.mediaDevices.getUserMedia({
        video: false,
        audio: true,
      });
      console.log(audioStream)
      this.$refs.audio.srcObject = audioStream  
    },

    audioStart(){
      this.audioFun()
    }




  },
});
</script>
