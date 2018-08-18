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

        <el-container class="sys_cont_bot">
          <el-aside class="pr">
            <h3 class="sys_left_head_tit">机组隐患概况</h3>
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

      }

    }

  }

  /*@media screen and (min-width:1366px){ //>1366*/
  /**/
  /*}*/


</style>
