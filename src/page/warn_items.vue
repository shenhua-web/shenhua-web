<!-- by ShiChong -->
<template>
  <div id="warnItems">
    <header-component class="herderBox"></header-component>
    <!--主页content-->
    <section class="sys_content">
      <el-container class="sys_cont_sub">
        <el-header class="sys_cont_head">
          <el-row>
            <el-col :span="12" class="sys_cont_tit">预警条目</el-col>
          </el-row>
        </el-header>

        <!-- 列表 容器-->
        <el-main class="sys_cont_main">
          <el-container class="sys_main_wrap">
            <el-header class="sys_main_head" height="45px">
              <div class="left-box fl" @click="filterClick">
                <span>隐患列表</span>
                <i :class="{icon_arrow: true, icon_up: showFilter}"></i>
              </div>
              <div class="right-box fr">
                <i class="icon_recorded" @click="recordedList"></i>
              </div>
            </el-header>
            <el-main class="sys_main_main" id="tableWrap">
              <!-- 筛选条件弹出框 -->
              <transition name="el-zoom-in-top">
                <div class="popbox" v-show="showFilter">
                  <div class="item-box beginTime">
                    <p class="label">开始日期</p>
                    <el-date-picker
                      class="content"
                      v-model="beginTime"
                      type="date"
                      placeholder="选择日期">
                    </el-date-picker>
                  </div>
                  <div class="item-box endTime">
                    <p class="label">结束日期</p>
                    <el-date-picker
                      class="content"
                      v-model="endTime"
                      type="date"
                      placeholder="选择日期">
                    </el-date-picker>
                  </div>
                  <div class="item-box wind">
                    <p class="label">风厂名称</p>
                    <el-select v-model="windName" placeholder="请选择">
                      <el-option
                        v-for="item in windList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </div>
                  <div class="item-box fan">
                    <p class="label">风机名称</p>
                    <el-select v-model="fanName" placeholder="请选择">
                      <el-option
                        v-for="item in fanList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </div>
                  <div class="item-box warn">
                    <p class="label">隐患名称</p>
                    <el-select v-model="warnName" placeholder="请选择">
                      <el-option
                        v-for="item in warnList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </div>
                  <div class="item-box search">
                    <el-button type="primary" @click="search">查询</el-button>
                  </div>
                </div>
              </transition>
              <!-- 列表 内容 -->
              <div id="tableBody" class="table-body">
                <el-scrollbar style="height:100%" ref="scrollbar">
                  <div class="my-row" v-for="(item,index) in list" :key="index">
                    <div class="my-col">{{item.name}}</div>
                    <div class="my-col">{{item.type}}</div>
                    <div class="my-col">{{item.day + ' '+ item.time}}</div>
                    <div class="my-col">{{item.module}}</div>
                    <div class="my-col">{{item.info}}</div>
                  </div>
                </el-scrollbar>
              </div>
            </el-main>
          </el-container>
        </el-main>
      </el-container>
    </section>
  </div>
</template>

<script>
  const g_template = {
    id: 0,
    name: "神华集团河北黄花梁风电场",
    type: "SQ02",
    day: "2018/8/7/31",
    time: "15:13:00",
    module: "电网电流振荡",
    info: "检查系统压力测量传感器是否正常,信号传输回路是否正常。检查系统贿赂是否漏油,如果漏油,处理后,加注油。检查系统蓄..."
  }
  export default {
    data() {
      return {
        list:[],
        showFilter: false,
        beginTime: "",
        endTime: "",
        windName: 0,
        fanName: 0,
        warnName: 0,
        windList: [],
        fanList: [],
        warnList: [],
      };
    },
    created(){
      this.getTroubleData()
    },

    components: {},

    computed: {},

    mounted() {
      let tableHeight =  $('#tableWrap').height() - 18;
      $('#tableBody').height(tableHeight);

    },

    methods: {
      getTroubleData(){
        let params = {
          beginTime: this.beginTime,
          endTime: this.endTime,
          windName: this.windName,
          fanName: this.fanName,
          troubleName: this.warnName,
        }

        //请求
        this.setTroubleData()
      },
      setTroubleData(){
        let list = []
        let wind = [
          {
            label: '< 全部 >',
            value: 0,
          }
        ]
        let fan = [
          {
            label: '< 全部 >',
            value: 0,
          }
        ]
        let warn = [
          {
            label: '< 全部 >',
            value: 0,
          }
        ]
        for(let i = 0 ; i < 50; ++i){
          let obj = {}
          let windObj = {
            label: g_template.name + i,
            value: i + 1
          }
          let fanObj = {
            label: g_template.type + i,
            value: i + 1
          }
          let warnObj = {
            label: g_template.module + i,
            value: i + 1
          }

          obj.id = g_template.id + i
          obj.name = g_template.name + i
          obj.type = g_template.type + i
          obj.day = g_template.day
          obj.time = g_template.time
          obj.module = g_template.module + i
          obj.info = g_template.info

          list.push(obj)
          wind.push(windObj)
          fan.push(fanObj)
          warn.push(warnObj)
        }
        this.list = list
        this.windList = wind
        this.fanList = fan
        this.warnList = warn
      },
      recordedList(){
        this.reset();
        this.getTroubleData()
        alert("刷新啦！")
      },
      filterClick(){
        this.showFilter = !this.showFilter
      },
      search(){
        this.filterClick();
        this.getTroubleData();
        alert("查询成功！")
      },
      reset(){
        this.showFilter = false
        this.beginTime = ""
        this.endTime = ""
        this.windName = 0
        this.fanName = 0
        this.warnName = 0
      }
    }
  }

</script>
<style lang='scss'>
  #warnItems{
    .popbox{
      .el-input__inner{
        height: 30px;
        line-height: 30px;
        font-size: 12px;
      }

      .el-input__icon{
        line-height: 30px;
      }

      .el-button--primary{
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        color: #fff;
        padding: 0;
        background: #103f72;
        border: 0;
      }
    }
  }
</style>

<style lang='scss' scoped>
  @import '../style/base/_variable.scss';

  #warnItems {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: default;

    .herderBox{
      position: relative;
      z-index: 10;
    }
  }

  .sys_content {
    width: 100%;
    height: 100%;
    padding-top: 94px;
    position: relative;
    top: -94px;
    left:0;
    background-color: $blue;
    overflow: hidden;

    .sys_cont_sub {
      padding: 15px;
      height: 100%;
      width: 100%;
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
      }

      .sys_cont_main{
        background: #0e2439;
        border: 1px solid #0c1016;
        border-top: 0;
        padding: 9px;
        height: 100%;
        width: 100%;
        border-radius: 5px;

        .sys_main_wrap{
          width: 100%;
          height: 100%;

          .sys_main_head{
            line-height: 45px;
            padding-left: 18px;
            background-image: linear-gradient(to bottom, #4d4d4d, #040406);
            border-radius: 8px 8px 0 0;
            border: 1px solid #181818;
            font-size: 14px;
            color: #fff;

            .left-box{
              cursor: pointer;
              height: 100%;

              .icon_arrow{
                display: inline-block;
                width: 13px;
                height: 8px;
                margin-left: 12px;
                background: url('../assets/icon/arrow.png') no-repeat;
                background-size: 100% 100%;
                transform:rotate(180deg);
                transform-origin: center center;
                transition:transform .1s ease-in-out;
              }

              .icon_up{
                transform:rotate(0);
              }
            }

            .right-box{
              cursor: pointer;
              height: 100%;

              .icon_recorded{
                display: inline-block;
                width: 26px;
                height: 26px;
                margin-top: 7.5px;
                background: url('../assets/icon/refresh_btn.png') no-repeat;
                background-size: 100% 100%;
              }
            }
          }

          .sys_main_main{
            background: #0c1f34;
            border: 1px solid #0c1016;
            border-top: 0;
            padding: 9px 11px;
            border-radius: 5px;
            position: relative;

            .table-body{
              overflow: hidden;
            }

            .popbox{
              position: absolute;
              z-index: 10;
              left: 17px;
              top: 0;
              width: 210px;
              height: 376px;
              border: 1px solid #608dbf;
              border-top: 0;
              background: #0c243e;
              padding: 15px;

              .item-box{
                margin-top: 10px;
                &:first-child{
                  margin-top: 0;
                }
                &:last-child{
                  margin-top: 20px;
                }
              }

              .label{
                color: #fff;
                font-size: 12px;
                line-height: 20px;
                height: 20px;
              }

              .content{
                width: 100%;
                height: 30px;
                line-height: 30px;
              }




            }

            .my-row{
              height: 44px;
              line-height: 44px;
              color: #fff;
              font-size: 14px;
              display: flex;
              flex-direction: row;
              padding-left: 20px;
              overflow: hidden;

              &:nth-child(2n + 1){
                background-color: rgba(0, 0, 0, 0.149);
              }

              .my-col{
                display: inline-flex;
                text-align: left;

                &:nth-child(1){
                  width: 16%;
                }

                &:nth-child(2){
                  width: 7%;
                  padding: 0 20px 0 14px;
                }

                &:nth-child(3){
                  width: 14%;
                }

                &:nth-child(4){
                  width: 13%;
                  padding: 0 29px 0 23px;
                }

                &:nth-child(5){
                  width: 50%;
                }
              }
            }
          }
        }
      }

    }

  }


</style>
