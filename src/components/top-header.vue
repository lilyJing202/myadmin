<!--  -->
<template>
  <div class="myadmin-home">
    <div class="myadmin-header">
      <div class="myadmin-header-left">
        <el-breadcrumb separator="/">
          <!-- <el-breadcrumb-item :to="{ path: '/dashboard' }"
            >首页</el-breadcrumb-item
          > -->
          <el-breadcrumb-item
            v-for="item in $route.meta"
            :to="{ path: item.to }"
            :key="item.name"
            >{{ item.name }}</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
      <div class="myadmin-header-right">
        <el-dropdown @command="handleCommand">
          <img
            src="../assets/profile.jpg"
            alt=""
            class="myadmin-header-profile"
          />
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="index">首页</el-dropdown-item>
            <el-dropdown-item command="comeOut">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { comeOut } from "@/api/api";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // getRouteParms: function () {
    //   console.log(this.$route);
    // },
    handleCommand: async function (command) {
      // console.log(command);
      if (command === "index") {
        this.$router.push("dashboard");
      } else if (command === "comeOut") {
        // console.log(comeOut());
        const result =  comeOut();
        console.log(result);
        if (result.status === 1) {
          this.$message("退出成功");
          this.$router.push("/");
        }
      }
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
.myadmin-home {
  .myadmin-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #eff2f7;
    padding: 10px;
    height: 50px;
    .myadmin-header-right {
      .myadmin-header-profile {
        border-radius: 50%;
        width: 36px;
        height: 36px;
      }
    }
  }
}
</style>