<!-- by ShiChong -->
<template>
  <div id="login">
    <transition name="form-fade" mode="in-out">
      <section class="form-wrap" v-show="showLogin">
        <div class="form-title">
          <p>资管平台</p>
        </div>
        <el-form :model="loginForm" :rules="rules" ref="loginForm">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" placeholder="密码" v-model="loginForm.password" @keyup.enter.native="submitForm('loginForm')"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')" class="submit-btn">登陆</el-button>
          </el-form-item>
        </el-form>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
      },
      showLogin: false,
    }
  },

  components: {},

  computed: {},

  mounted() {
    this.showLogin = true;
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate( (valid) => {
        if (valid) {
          const res = {};
          if ("admin" === this.loginForm.username && "admin" == this.loginForm.password) {
            this.$message({
              type: 'success',
              message: '登录成功',
              duration: "2000"
            });
            this.$router.push('index')
          }else{
            this.$message({
              type: 'error',
              message: "用户名或密码错误",
              duration: "3000"
            });
          }
        } else {
          this.$notify.error({
            title: '错误',
            message: '请输入正确的用户名密码',
            offset: 100
          });
          return false;
        }
      });
    },
  }
}

</script>
<style lang='scss' scoped>
  #login{
    width: 100%;
    height: 100%;
    background-color: #324057;
    position: relative;
    .form-title{
      position: absolute;
      width: 100%;
      top: -100px;
      left: 0;
      p{
        font-size: 34px;/*no*/
        color: #fff;
      }
    }
    .form-wrap{
      position: absolute;
      top: 50%;
      left: 50%;
      width: 300px;
      height: 210px;
      margin-top: -105px;
      margin-left: -150px;
      padding: 25px;
      border-radius: 5px;
      text-align: center;
      background-color: #fff;

      .submit-btn{
        width: 100%;
        font-size: 16px;
      }
    }
    .form-fade-enter-active, .form-fade-leave-active {
      transition: all 1s;
    }
    .form-fade-enter, .form-fade-leave-active {
      transform: translate3d(0, -50px, 0);
      opacity: 0;
    }
  }
</style>
