<template>
  <div>
    <el-form
      ref="loginForm"
      :model="form"
      :rules="rules"
      label-width="80px"
      class="login-box"
    >
      <h3 class="login-title">欢迎注册</h3>
      <el-form-item label="用户名" prop="username">
        <el-input
          type="text"
          placeholder="请输入用户名"
          v-model="form.username"
        />
      </el-form-item>
      <el-form-item label="手机号" prop="phoneNumber">
        <el-input
          type="text"
          placeholder="请输入手机号"
          v-model="form.phoneNumber"
        />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          placeholder="请输入密码"
          v-model="form.password"
        />
      </el-form-item>
      <el-form-item>
        <el-button @click="goLogin">去登录</el-button>
        <el-button type="primary" @click="onRegister('loginForm')"
          >注册</el-button
        >
      </el-form-item>
    </el-form>

    <!-- <el-dialog
      title="温馨提示"
      width="30%"
      :before-close="handleClose">
      <span>请输入账号和密码</span>
      <span class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog> -->
  </div>
</template>
 
<script>
import { defineComponent } from "vue";
import request from '../utils/request'
import cookie from "js-cookie";
import { ElMessage } from "element-plus";

export default defineComponent({
  name: "Register",
  data() {
    var checkPhoneNumber = (rule, value, callback) => {
      const phoneRegex = /^1[34578]\d{9}$/
        if (value === '') {
          callback(new Error('请输入手机号'));
        } else if (!phoneRegex.test(value)) {
          callback(new Error('手机号码格式不正确！'))
        } else {
          callback();
        }
      };
      var checkPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请填写密码'))
        } else if(value.length < 6){
          callback(new Error('密码长度不少于6位'))
        }else{
          callback()
        }
      }
    return {
      form: {
        username: "",
        phoneNumber: "",
        password: "",
      },
      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      rules: {
        username: [
          { required: true, message: "账号不可为空", trigger: "blur" },
        ],
        phoneNumber: [
          { validator: checkPhoneNumber, trigger: "blur" },
        ],
        password: [
          { validator: checkPass, trigger: "blur" },
        ],
      },

      

      // 对话框显示和隐藏
      dialogVisible: false,
      showLoginBtn: false,
    };
  },
  created(){
    this.isLogin()
  },
  methods: {
    isLogin() {
      console.log("开始从cookie中获取用户信息");
      // 从cookie中获取用户信息
      let userStr = cookie.get("ume_user");
      // json字符串转js对象
      if (userStr) {
        // 说明已登录
        ElMessage("用户已登录, 跳转首页.");
        this.$router.push('/')
      }
    },
    goLogin(){
        this.$router.push('/login')
    },

    onRegister(formName) {
    
      // 为表单绑定验证功能
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
          //   this.$router.push("/main");
          request.post('/register', this.form)
          .then((response) => {
              if (response.data.code === 20000) {
                // 注册成功
                ElMessage("注册成功！");
                // this.$router.push("/home");
              } else {
                // 注册失败
                ElMessage.warning({
                  message: response.data.message,
                  type: "warning",
                });
              }
            })
            .catch((error) => {
              ElMessage(`未知错误:${error.data}`);
            });
        } else {
          return false;
        }
      });
    },

  },
})
</script>
 
<style lang="scss" scoped>
.login-box {
  border: 1px solid #dcdfe6;
  width: 350px;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}

.login-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #303133;
}
</style>

