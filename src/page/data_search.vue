<!-- by Qzz -->
<template>
  <div id="index">

    <header-component></header-component>


    <!--主页content-->
    <section class="sys_content">
      <el-container class="sys_cont_sub">
        <el-header class="sys_cont_head">
          <el-row>
            <el-col :span="12" class="sys_cont_tit">预警概览</el-col>
            <el-col :span="12" align="right">
              <a href="javascript:;" class="refresh_btn"></a>
            </el-col>
          </el-row>
        </el-header>

        <el-container class="sys_cont_bot">
          <el-aside width="210px" class="pr">
            <h3 class="sys_left_head_tit">隐患列表</h3>
            <div class="sys_left_cont"></div>
          </el-aside>
          <el-main class="sys_cont_bot_main">
            <el-row>
              <el-col :span="12" class="sys_right_left_wrap">
                <div class="sys_right_common_head">
                  <div class="sys_search_wrap">
                    <input type="text" placeholder="<机组搜索>" class="aircrew_search_inp">
                    <i class="el-icon-search"></i>
                  </div>
                </div>

                <div class="sys_cont_container">
                  <img src="../assets/icon/aircrew_img.png" alt="" class="aircrew_img fr">

                  <div class="crew_data_wrap">
                    <span class="crew_data_item">
                      <i>预警机组</i>
                    </span>
                    <span class="crew_data_item">
                      <i>预警机组类型</i>
                      <em>上气1250</em>
                    </span>
                  </div>

                  <div class="fault_wrap">无</div>

                </div>

              </el-col>
              <el-col :span="12" class="sys_right_col_wrap">
                <div class="sys_right_common_head">
                  <h4>近一周大部件调查</h4>
                </div>
                <div class="sys_cont_container">
                  <div class="fault_list_wrap">
                    <ul>
                      <li>
                        <div class="li_left fl">发动机</div>
                        <div class="li_right_con fl">
                          <div class="fault_ev_item">
                            <span>隐患数量</span>
                            <span>-</span>
                          </div>
                          <div class="fault_ev_item">
                            <span>隐患占比</span>
                            <span>-</span>
                          </div>
                          <div class="fault_ev_item">
                            <span>最高隐患</span>
                            <span>-</span>
                          </div>
                          <div class="fault_ev_item">
                            <span>运维建议</span>
                            <span>-</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="li_left fl">齿轮箱</div>
                        <div class="li_right_con fl">
                          <div class="fault_ev_item">
                            <span>隐患数量</span>
                            <span>-</span>
                          </div>
                          <div class="fault_ev_item">
                            <span>隐患占比</span>
                            <span>-</span>
                          </div>
                          <div class="fault_ev_item">
                            <span>最高隐患</span>
                            <span>-</span>
                          </div>
                          <div class="fault_ev_item">
                            <span>运维建议</span>
                            <span>-</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="li_left fl">叶片</div>
                        <div class="li_right_con fl">
                          <div class="fault_ev_item">
                            <span>隐患数量</span>
                            <span>-</span>
                          </div>
                          <div class="fault_ev_item">
                            <span>隐患占比</span>
                            <span>-</span>
                          </div>
                          <div class="fault_ev_item">
                            <span>最高隐患</span>
                            <span>-</span>
                          </div>
                          <div class="fault_ev_item">
                            <span>运维建议</span>
                            <span>-</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="li_left fl">高隐患</div>
                        <div class="li_right_con fl">
                          <div class="fault_ev_item">
                            <span>隐患数量</span>
                            <span>-</span>
                          </div>
                          <div class="fault_ev_item">
                            <span>隐患占比</span>
                            <span>-</span>
                          </div>
                          <div class="fault_ev_item">
                            <span>最高隐患</span>
                            <span>-</span>
                          </div>
                          <div class="fault_ev_item">
                            <span>运维建议</span>
                            <span>-</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24" class="sys_cont_recommend">
                <div class="sys_right_common_head">
                  <h4>运维建议</h4>
                </div>
                <div class="sys_recommend_txt">一些建议等等</div>
              </el-col>
            </el-row>
          </el-main>
        </el-container>
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

  .nav_head {
    height: 94px;
    background: url("../assets/icon/head_bg.png") no-repeat;
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
              background: url("../assets/icon/sys01.png") no-repeat center;
            }

            .sys02 {
              @extend .sys_nav_icon;
              background: url("../assets/icon/sys02.png") no-repeat center;
            }

            .sys03 {
              @extend .sys_nav_icon;
              background: url("../assets/icon/sys03.png") no-repeat center;
            }

            .sys04 {
              @extend .sys_nav_icon;
              background: url("../assets/icon/sys04.png") no-repeat center;
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
        background: url("../assets/icon/scale_wrap_btn.png") no-repeat;
      }
    }

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
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
        }

        .sys_left_cont {
          background-color: $deep_blue;
          height: 100%;
        }

        ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
          color: $font_fff;
        }
        :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
          color: $font_fff;
        }
        ::-moz-placeholder { /* Mozilla Firefox 19+ */
          color: $font_fff;
        }
        :-ms-input-placeholder { /* Internet Explorer 10-11 */
          color: $font_fff;
        }

        .sys_cont_bot_main {
          padding: 0;
          margin-left: 5px;
          background-color: $deep_blue;
          border-radius: 8px 0 0 0;

          .sys_right_common_head {
            height: 50px;
            padding: 10px 0 0 10px;
            border-radius: 8px 8px 0 0;
            border: 1px solid $darkgray;
            background-image: linear-gradient(to bottom, $light_fff, $black);
            h4 {
              padding-top: 6px;
            }
            .sys_search_wrap {
              width: 170px;
              height: 28px;
              padding: 6px 6px 0 10px;
              border-radius: 14px;
              background-color: $darkgray;
              .aircrew_search_inp {
                border: none;
                outline: none;
                background-color: transparent;
                color: $font_fff;
                width: 130px;
              }
            }
          }

          .sys_right_left_wrap {
            overflow: hidden;

            .crew_data_wrap {

            }

          }

          .sys_right_col_wrap {
            padding-left: 5px;
          }

          .sys_recommend_txt{
            padding: 10px;
          }

          .sys_cont_container {
            height: 330px;
            position: relative;



            .fault_wrap {
              width: 90px;
              height: 20px;
              background-color: $darkgray;
              border-radius: 10px;
              color: $font_fff;
              text-align: center;
              position: absolute;
              right: 6px;
              bottom: 10px;
              line-height: 20px;
              font-size: 12px;
            }

            .crew_data_wrap {
              position: absolute;
              left: 10px;
              top: 10px;
              background-color: $darkgray;
              padding: 5px;
              border-radius: 5px;
              > span {
                min-height: 45px;
                background-color: $light_blue;
                float: left;
                padding-top: 5px;
                text-align: center;
                &:nth-of-type(1) {
                  width: 76px;
                  margin-right: 2px;
                }
                &:nth-of-type(2) {
                  width: 114px;
                  i {
                    margin-bottom: 5px;
                  }
                }

                em {
                  color: $light_green
                }

                i {
                  display: block;
                  text-align: center;
                }
              }

            }

            .fault_list_wrap {
              padding: 20px 0 0 20px;
              ul {
                overflow: hidden;
                li {
                  height: 140px;
                  margin: 0 10px 10px 0;
                  float: left;
                  overflow: hidden;
                  .li_left {
                    width: 24px;
                    height: 110px;
                    background: url("../assets/icon/left_sm_icon.png") no-repeat;
                    background-size:100% 100%;
                    padding-top: 25px;
                    text-align: center;
                  }
                  .li_right_con {
                    width: 300px;
                    background-color: $most_blue;
                    padding: 12px;
                    .fault_ev_item{
                      height: 26px;
                      line-height: 26px;
                      &:nth-of-type(3){
                        margin-bottom: 12px;
                      }
                      span{
                        display: inline-block;
                        vertical-align: middle;
                        color: $font_blue;
                        &:nth-of-type(1){
                          width: 100px;
                          box-sizing: border-box;
                        }
                      }

                    }
                  }
                }
              }
            }

          }

        }

      }

    }

  }

  /*@media screen and (min-width:1366px){ //>1366*/
  /**/
  /*}*/


</style>
