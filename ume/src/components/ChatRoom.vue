<template>
  <div>
      <div class="room-info">
          房间号：<el-input class="roomNumberImput" placeholder="请输入房间号" v-model="roomNumber"></el-input><el-button class="connBtn" type="primary">连接</el-button>
      </div>
    <div class="chatContent">
      <el-input
        type="textarea"
        :rows="30"
        placeholder="请输入内容"
        v-model="textarea"
      >
      </el-input>
    </div>
    <div class="inputContent">
      <el-input
      class="input-send-msg"
        type="textarea"
        autosize
        placeholder="请输入内容"
        v-model="input"
      >
      </el-input>
      <el-button class="sendMsgBtn" type="primary" round>发送</el-button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ChatRoom",
  data() {
    return {
      textarea: "",
      input:"",
      roomNumber: 123456
    };
  },
});
</script>

<style scoped>
.roomNumberImput{
    width: 200px;
    margin: 0 10px;
}
.connBtn{
    display: inline-block;
}
.room-info{
    margin: 10px;
}
.inputContent{
    margin: 20px;
    height: 60px;
}
.input-send-msg{
    display: inline-block;
    margin: auto 10px;
    width: 320px;
    height: 40px;
}
.sendMsgBtn{
    display: inline-block;
    height: 40px;
    margin: auto 10px;

}
</style>