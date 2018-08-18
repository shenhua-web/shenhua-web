<!-- by Qzz -->
<template>
  <div id="index">

    <header-component></header-component>


    <!--主页content-->
    <section class="sys_content">
      <el-container class="sys_cont_sub">
        <el-header class="sys_cont_head">
          <el-row>
            <el-col :span="12" class="sys_cont_tit">预警条目</el-col>
          </el-row>
        </el-header>

      </el-container>

      <!--</div>-->

    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        headHeight: 94 //head高度
      };
    },

    components: {},

    computed: {},

    mounted() {

      this.initWindow();

      var that = this;
      $(window).resize(function () {
        that.initWindow();
      });

    },

    methods: {
      initWindow() {
        $('.sys_content').height($(window).height() - this.headHeight);
      }
    }
  }

</script>
<style lang='scss' scoped>
  @import '../style/base/_variable.scss';

  #index {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .sys_content {
    background-color: $blue;
    overflow: hidden;

    .sys_cont_sub {
      margin: 15px;

      border-top: none;
      .sys_cont_head {
        height: 48px;
        background: url("../assets/icon/sys_cont_head_bg.png") no-repeat;
        background-size: 100% 100%;
        .sys_cont_tit {
          color: $font_fff;
          font-size: $font_18;
          margin-top: 20px;
          &.sub{
            position: absolute;
            left: 0;
            top: 0;
          }
        }

        .refresh_btn {
          display: inline-block;
          vertical-align: middle;
          width: 26px;
          height: 26px;
          margin-top: 15px;
          background: url("../assets/icon/refresh_btn.png") no-repeat;
        }
      }

    }

  }


</style>
