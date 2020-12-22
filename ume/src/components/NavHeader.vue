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
          v-model="input3"
          class="input-with-select"
          ><template #append>
            <el-button icon="el-icon-search"></el-button>
          </template>
        </el-input>
      </div>
    </el-col>
    <el-col :span="8">
        <div class="grid-content">
            <el-avatar class="avatar" shape="square" :size="30" :src="squareUrl"></el-avatar>
            <el-link :underline="false">个人中心</el-link>
            <el-link :underline="false">消息</el-link>
            <el-button type="primary">创建房间</el-button>
        </div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavHeader",
  data(){
      return{
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      }
  }
});
</script>

<style scoped>

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
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
  margin: 20px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>