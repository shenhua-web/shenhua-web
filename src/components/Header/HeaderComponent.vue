<template>

  <section class="nav_head">
    <el-row>
      <el-col :span="12">
        <div class="clearfix sys_nav_left pt10">
          <div class="fl system_logo_wrap">
            <img src="../../assets/icon/system_logo.png" alt="神华集团" class="system_logo">
          </div>
          <div class="fl system_name_wrap">
            <img src="../../assets/icon/system_name.png" alt="风电场智慧运维-机组健康预测系统" class="system_name">
          </div>
        </div>

      </el-col>

      <el-col :span="12">
        <div class="sys_nav_right">
          <div class="nav_cont_li clearfix">
            <router-link to="/index" active-class="active">
              <em></em>
              <div class="sys_nav_cont">
                <i class="sys_nav_icon sys01"></i>
                <span>预警概览</span>
              </div>
              <em></em>
            </router-link>
            <router-link to="/warn_detail" active-class="active">
              <em></em>
              <div class="sys_nav_cont">
                <i class="sys_nav_icon sys02"></i>
                <span>预警详情</span>
              </div>
              <em></em>
            </router-link>
            <router-link to="/Warn_items" active-class="active">
              <em></em>
              <div class="sys_nav_cont">
                <i class="sys_nav_icon sys03"></i>
                <span>预警概览</span>
              </div>
              <em></em>
            </router-link>
            <router-link to="/Data_search" active-class="active">
              <em></em>
              <div class="sys_nav_cont">
                <i class="sys_nav_icon sys04"></i>
                <span>实时查询</span>
              </div>
              <em></em>
            </router-link>
          </div>
        </div>
      </el-col>

      <div class="shut_down_wrap">
        <a href="javascript:;" class="close_btn"></a>
      </div>
    </el-row>
  </section>

</template>
<script>
  export default {
    name: 'myHeader',
    data:function(){
      return{

      }
    },
    components: {

    },
    methods: {

    },
    mounted: function(){

    },
  }

</script>
<style lang="scss">
  @import '../../style/base/_variable.scss';

  .nav_head {
    height: 94px;
    background: url("../../assets/icon/head_bg.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;

    .sys_nav_left {
      padding-top: 30px;
      .system_logo_wrap {
        padding-left: 30px;
        margin-right: 48px;
        .system_logo {
          text-indent: -2000em;
        }
      }
    }

    .sys_nav_right {

      .nav_cont_li {
        padding-top: 15px;
        > a {
          float: left;
          height: 100%;
          overflow: hidden;
          font-size: 14px;
          color: $gray;
          transition:.2s all ease;
          &.active,&:hover{
            color:$font_fff;
          }
          em {
            float: left;
            width: 1px;
            height: 65px;
            background-color: $font_fff;
          }
          .sys_nav_cont {
            float: left;
            text-align: center;
            margin: 0 35px;
            .sys_nav_icon {
              display: inline-block;
              vertical-align: middle;
              width: 35px;
              height: 35px;
              margin-bottom: 8px;
            }
            .sys01 {
              @extend .sys_nav_icon;
              background: url("../../assets/icon/sys01.png") no-repeat center;
            }

            .sys02 {
              @extend .sys_nav_icon;
              background: url("../../assets/icon/sys02.png") no-repeat center;
            }

            .sys03 {
              @extend .sys_nav_icon;
              background: url("../../assets/icon/sys03.png") no-repeat center;
            }

            .sys04 {
              @extend .sys_nav_icon;
              background: url("../../assets/icon/sys04.png") no-repeat center;
            }

            span {
              display: block;
            }
          }
        }
      }
    }

    .shut_down_wrap {
      position: absolute;
      right: 0;
      top: 0;
      .close_btn {
        width: 103px;
        height: 30px;
        display: block;
        background: url("../../assets/icon/scale_wrap_btn.png") no-repeat;
      }
    }

  }
</style>
