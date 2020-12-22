<!--  -->
<template>
  <div class="myadmin-login">
    <h1>后台管理系统</h1>
    <div class="myadmin-login-form">
      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item label="" prop="username">
          <el-input v-model="form.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input v-model="form.password" placeholder="密码" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="login-button"
            @click="handleLogin('form')"
            >登陆</el-button
          >
        </el-form-item>
      </el-form>
      <div class="login-p">
        <p>温馨提示</p>
        <p>未登录过的新用户，自动注册</p>
        <p>注册过的用户可凭账号密码登录</p>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import axios from "../../node_modules/axios/dist/axios";
import axios from "../myaxios/myaxios";
import { login } from "@/api/api";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
          {
            min: 3,
            max: 5,
            message: "长度在 3 到 5 个字符",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
          {
            min: 3,
            max: 8,
            message: "长度在3到8位",
            trigger: "blur",
          },
        ],
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleLogin: function (form) {
      //   console.log('提交信息');
      this.$refs[form].validate(async(valid) => {
        if (valid) {
            // this.$message("校验成功了");
          // 发请求拿数据
        //   axios
        //     .post("http://linweiqin.cn:8001/admin/login", {
        //       user_name: this.form.username,
        //       password: this.form.password,
        //     })
        //     .then((res) => {
        //       //   console.log(res.data);
        //       console.log(res);
        //     }); //login方法封装了在api内 引入了就可直接调用
          let result = await login({
              user_name: this.form.username,
              password: this.form.password,
            })
        //   console.log(result);//{status: 1, success: "登录成功"}
        if(result.status === 1){
            this.$message('登陆成功')
            this.$router.push('dashboard')
        }else{
            this.$message({
                message:'登陆失败',
                type:'warning',
            })
        }
        } else {
          this.$message("校验失败!!");
          return false;
        }
      });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.myadmin-login {
  background-color: #324057;
  height: 100vh;
  text-align: center;
  h1 {
    padding-top: 50px;
    line-height: 50px;
    font-weight: 200;
    color: white;
  }

  .myadmin-login-form {
    width: 300px;
    background-color: white;
    padding: 10px 20px;
    height: 300px;
    border-radius: 10px;
    margin: 0 auto;
    .login-button {
      width: 100%;
    }
  }
  .login-p {
    text-align: center;
    color: red;
    font-size: 14px;
  }
}
</style>