<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <div class="grid-content">
        <el-button round icon="el-icon-s-home">主页</el-button>
        <el-button round>看个电影</el-button>
        <el-button round>K个歌</el-button>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content">
        <el-input
          placeholder="请输入内容"
          class="input-with-select"
          ><template #append>
            <el-button icon="el-icon-search"></el-button>
          </template>
        </el-input>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content head-right">
        <el-button icon="el-icon-user-solid" circle></el-button>
        <el-link class="head-link" :underline="false">个人中心</el-link>
        <el-link class="head-link" :underline="false">消息</el-link>
        <el-button type="primary" icon="el-icon-switch-button">创建房间</el-button>
      </div>

    </el-col>
  </el-row>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavHeader",
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
    };
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
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>