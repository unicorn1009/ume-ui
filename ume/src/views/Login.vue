<template>
  <div>
    <el-form
      ref="loginForm"
      :model="form"
      :rules="rules"
      label-width="80px"
      class="login-box"
    >
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="账号" prop="username">
        <el-input
          type="text"
          placeholder="请输入用户名或手机号"
          v-model="form.username"
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
        <el-button type="primary" @click="onSubmit('loginForm')"
          >登录</el-button
        >
        <el-button @click="goRegister">去注册</el-button>
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
import { ElMessage } from "element-plus";
import cookie from "js-cookie";
import request from "../utils/request";

export default defineComponent({
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },

      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      rules: {
        username: [
          { required: true, message: "账号不可为空", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不可为空", trigger: "blur" },
        ],
      },

      // 对话框显示和隐藏
      dialogVisible: false,
    };
  },
  created() {
    this.isLogin();
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
    onSubmit(formName) {
      // 为表单绑定验证功能
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
          request
            .post("/login", this.form)
            .then((response) => {
              if (response.data.code === 20000) {
                // 登陆成功
                // 拿到传回来的token字符串
                let token = response.data.data.token;
                // 将token放入cookie中
                cookie.set("ume_token", token, { domin: "localhost" });
                // 获取用户信息,并存入cookie
                request.get("/um/user/getUserInfo").then((res) => {
                  let userInfo = res.data.data.userInfo;
                  cookie.set("ume_user", userInfo, { domin: "localhost" });
                });
                this.$router.push("/home");
              } else {
                // 登录失败
                ElMessage.warning({
                  message: "账号或密码错误",
                  type: "warning",
                });
              }
            })
            .catch((error) => {
              ElMessage(`未知错误:${error.data}`);
            });
          // this.$router.push("/home");
        } else {
          // 前端表单验证失败
          ElMessage("登录失败");

          return false;
        }
      });
    },
    goRegister() {
      this.$router.push("/register");
    },
    getUserInfo() {
      request
        .get("/user/getUserInfo")
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
});
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

