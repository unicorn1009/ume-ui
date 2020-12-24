<template>
  <div>
    <div class="grid-content head-right-login" v-show="false">
      <el-button icon="el-icon-user-solid" circle></el-button>
      <el-link class="head-link" :underline="false">个人中心</el-link>
      <el-link class="head-link" :underline="false">消息</el-link>
      <el-button type="primary" icon="el-icon-switch-button"
        >创建房间</el-button
      >
    </div>
    <div class="grid-content head-right-logout" v-show="true">
      <el-link class="head-link" :underline="false" href="/login">登录</el-link>
      <span>|</span>
      <el-link class="head-link" :underline="false"  href="/register">注册</el-link>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'NavHeadRight',
})
</script>

<style scoped>
.head-right-login > * {
  margin: auto 10px;
  padding: 5px;
}
.head-right-logout > * {
  margin: auto 2px;
  padding: 0px;
}

.head-right .head-link {
  height: 36px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  text-align: center;
}
</style>

