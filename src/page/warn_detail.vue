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
            <div class="sys_left_cont"></div>
          </el-col>
          <el-col :span="10" class="sys_cont_bot_right">
            <div class="danger_statistics">
              <h4>隐患统计</h4>
              <div class="danger_sta_wrap">
                <img class="danger_round" src="../assets/icon/round_img.png" alt="">
                <div class="static_btn_wrap">
                  <div class="static_btn_wrap_tab">
                    <span>预警机组<i>30</i></span>
                    <span>最高隐患<i>30</i></span>
                    <span>预警隐患<i>30</i></span>
                  </div>

                </div>
                <ul class="static_ul">
                  <li>
                    <span>Top1</span>
                    <i>无</i>
                  </li>
                  <li>
                    <span>Top2</span>
                    <i>无</i>
                  </li>
                  <li>
                    <span>Top3</span>
                    <i>无</i>
                  </li>
                  <li>
                    <span>Top4</span>
                    <i>无</i>
                  </li>
                  <li>
                    <span>Top5</span>
                    <i>无</i>
                  </li>
                </ul>
              </div>
            </div>

            <div class="danger_trend_wrap">
              <h3>隐患趋势</h3>
              <div class="danger_gray_wrap">
                <div class="danger_gray_wrap_tab">
                  <span>本周</span>
                  <span>本月</span>
                  <span>本年</span>
                </div>
              </div>
            </div>
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
        $('.danger_trend_wrap').height($('.sys_cont_bot_left').height()-$('.danger_statistics').height()-25);
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

      border-Top: none;
      .sys_cont_head {
        height: 48px;
        background: url("../assets/icon/sys_cont_head_bg.png") no-repeat;
        background-size: 100% 100%;
        .sys_cont_tit {
          color: $font_fff;
          font-size: $font_18;
          margin-Top: 20px;
          &.sub {
            position: absolute;
            left: 0;
            Top: 0;
          }
        }

        .refresh_btn {
          display: inline-block;
          vertical-align: middle;
          width: 26px;
          height: 26px;
          margin-Top: 15px;
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

        .sys_cont_bot_left {
          height: 100%;
          background-color: $deep_blue;
          border-radius: 8px 8px 0 0;
          overflow: hidden;
        }

        .sys_cont_bot_right {
          padding-left: 10px;
          height: 100%;

          .danger_statistics {
            border-radius: 5px;
            background-color: $darkgray;
            padding: 10px;
            margin-bottom: 5px;
            h4 {
              height: 40px;
              line-height: 40px;
              font-size: $font_16;
            }

            .danger_round {
              margin: 50px 0 0 40px;
            }

            .danger_sta_wrap {
              width: 100%;
              height: 300px;
              background: url("../assets/icon/det_bg.png") no-repeat;
              -webkit-background-size: 100% 100%;
              background-size: 100% 100%;
              position: relative;

              .static_btn_wrap {
                position: absolute;
                Top: 20px;
                right: 25px;
                width: 286px;
                height: 48px;
                background-color: $darkgray;
                border-radius: 5px;
                padding: 5px;
                .static_btn_wrap_tab {
                  background: url("../assets/icon/danger_btn_bg.png") no-repeat;
                  width: 100%;
                  height: 100%;
                  background-size: 100% 100%;
                  padding-Top: 5px;
                  > span {
                    display: inline-block;
                    vertical-align: middle;
                    overflow: hidden;
                    padding: 0 15px;
                    font-size: $font_12;
                    &:nth-of-type(2) {
                      padding: 0 30px;
                    }
                  }
                  i {
                    display: block;
                    padding-Top: 3px;
                    text-align: center;
                  }
                }
              }

              .static_ul {
                width: 286px;
                position: absolute;
                right: 20px;
                Top: 85px;
                > li {
                  line-height: 26px;
                  color: $font_fff;
                  span {
                    display: inline-block;
                    vertical-align: middle;
                    &:nth-of-type(1) {
                      margin-right: 15px;
                    }
                  }
                  &:nth-of-type(1) {
                    color: $font_co1;
                  }
                  &:nth-of-type(2) {
                    color: $font_co2;
                  }
                  &:nth-of-type(3) {
                    color: $font_co3;
                  }
                  &:nth-of-type(4) {
                    color: $font_co4;
                  }
                }
              }

            }

          }

          .danger_trend_wrap {
            width: 100%;
            background: url("../assets/icon/det_bot_bg.png") no-repeat;
            -webkit-background-size: 100% 100%;
            background-size: 100% 100%;
            position: relative;

            h3{
              font-size: $font_16;
              padding: 20px 0 0 15px;
            }

            .danger_gray_wrap {
              position: absolute;
              right: 30px;
              top: 10px;
              width: 288px;
              height: 48px;
              background-color: $darkgray;
              border-radius: 5px;
              padding: 5px;
              .danger_gray_wrap_tab{
                background: url("../assets/icon/danger_gray_btn_bg.png") no-repeat;
                width: 100%;
                height: 100%;
                background-size: 100% 100%;
                padding-Top: 5px;
                padding-left: 80px;
                >span{
                  display: inline-block;
                  vertical-align: middle;
                  padding: 8px 16px;
                }
              }
            }
          }

        }

      }

    }

  }


</style>
