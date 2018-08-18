<!-- by Qzz -->
<template>
  <div id="index">

    <header-component></header-component>


    <!--主页content-->
    <section class="sys_content">
      <el-container class="sys_cont_sub">
        <el-header class="sys_cont_head">
          <el-row>
            <el-col :span="12" class="sys_cont_tit">预警详情</el-col>
            <el-col :span="12" align="right">
              <a href="javascript:;" class="refresh_btn"></a>
            </el-col>
          </el-row>
        </el-header>

        <el-row class="sys_cont_bot">
          <el-col :span="14" class="sys_cont_bot_left">
            <h3 class="sys_left_head_tit sub">机组隐患概况</h3>
            <div class="sys_left_cont">123</div>
          </el-col>
          <el-col :span="10" class="sys_cont_bot_right">
            <h3 class="sys_left_head_tit">隐患统计</h3>
          </el-col>
        </el-row>

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
        $('.sys_cont_bot').height($('.sys_content').height() - 100);
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

      .sys_cont_bot {
        border: 1px solid $darkgray;
        padding: 8px;
        color: $font_fff;

        .sys_left_head_tit {
          height: 50px;
          line-height: 50px;
          padding-left: 18px;
          background-image: linear-gradient(to bottom, $light_fff, $black);
          border-radius: 8px 8px 0 0;
          border: 1px solid $darkgray;
        }

        .sys_cont_bot_left{
          height: 100%;
          background-color: $deep_blue;
          border-radius: 8px 8px 0 0;
          overflow: hidden;
        }

        .sys_cont_bot_right{
          padding-left: 10px;
        }

      }

    }

  }


</style>
