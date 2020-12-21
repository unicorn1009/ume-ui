<template>
  <el-container>
    <el-header>
      <NavHeader></NavHeader>
    </el-header>
    <el-main><div class="main-div"></div></el-main>
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

.el-header, .el-footer {
    
    text-align: center;
    line-height: 60px;
  }

    .el-main {
    background-color: #E9EEF3;
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

<script lang="ts">
import {defineComponent} from 'vue'
import NavHeader from './components/NavHeader.vue'

export default defineComponent({
  name: 'App',
  data(){
    return {
      btnName: '点我'
    }
  },
  components:{
    NavHeader
  },
  
  methods: {
    handleClick(){
      console.log("Hello world")
    }
  }
})
</script>
