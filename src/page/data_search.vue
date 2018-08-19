<!-- by ShiChong -->
<template>
  <div id="search">
    <header-component class="herderBox"></header-component>
    <!--主页content-->
    <section class="sys_content">
      <el-container class="sys_cont_sub">
        <el-header class="sys_cont_head">
          <el-row>
            <el-col :span="12" class="sys_cont_tit">实时数据查询</el-col>
          </el-row>
        </el-header>

        <!-- 内容 容器-->
        <el-main class="sys_cont_main">
          <div class="left-wrap fl">
            <el-container class="item-wrap crew-wrap">
              <el-header class="item-header" height="45px">机组选择</el-header>
              <el-main class="item-main">
                <el-scrollbar style="height:100%" ref="scrollbar">
                  <el-tree
                    ref="crewTree"
                    :data="crew.data"
                    :props="crew.props"
                    node-key="id"
                    show-checkbox>
                  </el-tree>
                </el-scrollbar>
              </el-main>
            </el-container>
          </div>
          <div class="mid-wrap fl">
            <el-container class="item-wrap dataPoint-wrap">
              <el-header class="item-header" height="45px">数据点选择</el-header>
              <el-main class="item-main">
                <el-scrollbar style="height:100%" ref="scrollbar">
                  <el-tree
                    ref="dataPointTree"
                    :data="dataPoint.data"
                    :props="dataPoint.props"
                    node-key="id"
                    show-checkbox>
                  </el-tree>
                </el-scrollbar>
              </el-main>
            </el-container>
          </div>
          <div class="right-wrap fl">
            <el-container class="item-wrap special-item">
              <el-header class="item-header" height="45px">
                <div class="left-box fl" @click="filterClick">
                  <span>数据列表</span>
                  <i :class="{icon_arrow: true, icon_up: showFilter}"></i>
                  <span class="crruCrew">当前机组：{{crruCrew}}</span>
                </div>
              </el-header>
              <el-main class="item-main" id="tableWrap">
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
                    <div class="item-box search">
                      <el-button type="primary" @click="search">查询</el-button>
                    </div>
                  </div>
                </transition>
                <div class="table-header">
                  <div class="my-row">
                    <div class="my-col"><div class="text-inner">型号</div></div>
                    <div class="my-col"><div class="text-inner">时间</div></div>
                    <div class="my-col"><div class="text-inner">风向</div></div>
                    <div class="my-col"><div class="text-inner">有功功率</div></div>
                    <div class="my-col"><div class="text-inner">无功功率</div></div>
                    <div class="my-col"><div class="text-inner">电网电压</div></div>
                  </div>
                </div>
                <div class="table-body" id="tableBody">
                  <el-scrollbar style="height:100%" ref="scrollbar">
                    <div class="my-row" v-for="(item,index) in list" :key="index">
                      <div class="my-col"><div class="text-inner">{{item.type}}</div></div>
                      <div class="my-col"><div class="text-inner">{{item.day + ' '+ item.time}}</div></div>
                      <div class="my-col"><div class="text-inner">{{item.windDir}}</div></div>
                      <div class="my-col"><div class="text-inner">{{item.activePower}}</div></div>
                      <div class="my-col"><div class="text-inner">{{item.reactivePower}}</div></div>
                      <div class="my-col"><div class="text-inner">{{item.voltage}}</div></div>
                    </div>
                  </el-scrollbar>
                </div>
              </el-main>
            </el-container>
          </div>
        </el-main>
      </el-container>
    </section>
  </div>
</template>

<script>
  const g_tree_template = [
    {
      id: 1,
      label: '一级 1',
      children: [
        {
          id: 11,
          label: '二级 1-1',
        },
        {
          id: 12,
          label: '二级 1-2',
        },
        {
          id: 13,
          label: '二级 1-3',
        },
      ]
    },
    {
      id: 2,
      label: '一级 2',
      children: [
        {
          id: 21,
          label: '二级 2-1',
        },
        {
          id: 22,
          label: '二级 2-2',
        },
        {
          id: 23,
          label: '二级 2-3',
        },
      ]
    },
  ]
  const g_template = {
    id: 0,
    windDir: 242,
    type: "SQ03",
    day: "2018/8/7/31",
    time: "15:13:00",
    activePower: -5,
    reactivePower: -9,
    voltage: 397.3
  }
  export default {
    data() {
      return {
        crruCrew: "SQ03",
        list:[],
        beginTime: "",
        endTime: "",
        showFilter: false,
        crewList: [],
        dataPointList: [],
        crew: {
          data: [],
          props: {
					  label: 'label',
            children: 'children',
            key: 'id'
          }
        },
        dataPoint: {
          data: [],
          props: {
					  label: 'label',
            children: 'children',
            key: 'id'
          }
        }
      };
    },
    created(){
      this.getCrewData()
      this.getDataPointData()
      this.getDataList()
    },

    components: {},

    computed: {},

    mounted() {
      let tableHeight =  $('#tableWrap').height() - 18 - 44;
      $('#tableBody').height(tableHeight);
    },

    methods: {
      //获得 机组选择 tree
      getCrewData(){
        //  请求
        this.setCrewData();
      },
      //机组选择 数据 处理
      setCrewData(){
        this.crew.data = g_tree_template;
      },
      //获得  数据点 tree
      getDataPointData(){
        //  请求
        this.setDataPointData();
      },
      //数据点 数据 处理
      setDataPointData(){
        this.dataPoint.data = g_tree_template;
      },
      //获得 数据列表 数据
      getDataList(){
        let params = {
          beginTime: this.beginTime,
          endTime: this.endTime,
          crew: this.crewList,
          dataPoint: this.dataPointList,
        }

        //请求
        this.setDataList()
      },
      setDataList(){
        let list = []
        for(let i = 0 ; i < 50; ++i){
          let obj = {}

          obj.id = g_template.id + i
          obj.type = g_template.type
          obj.day = g_template.day
          obj.time = g_template.time
          obj.windDir = g_template.windDir + i
          obj.activePower = g_template.activePower
          obj.reactivePower = g_template.reactivePower
          obj.voltage = g_template.voltage

          list.push(obj)
        }
        this.list = list
      },
      search(){
        this.filterClick();
        //获得 机组选择 的key
        this.crewList = this.$refs.crewTree.getCheckedKeys();
        //获得 数据点 的key
        this.dataPointList = this.$refs.dataPointTree.getCheckedKeys();
        this.getDataList();
        alert("查询成功！")
      },
      filterClick(){
        this.showFilter = !this.showFilter
      },
    }
  }

</script>
<style lang='scss'>
  #search{
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

    .el-tree-node__content:hover {
      background: none;
    }
    .el-tree-node:focus>.el-tree-node__content{
      background: none;
    }

    .el-tree-node__label{
      font-size: 10px;
      color: #fff;
    }

    //.crew-wrap{
      .el-checkbox__inner{
        border: 0.5px solid rgb(98, 98, 98);
        border-radius: 2px;
        background-image: linear-gradient( 90deg, rgb(206,206,206) 0%, rgb(255,255,255) 100%);

        &::after{
          border-color: #000;
        }

        &::before{
          background-color: #000;
        }
      }
    //}
  }
</style>

<style lang='scss' scoped>
  @import '../style/base/_variable.scss';

  #search {
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

        .item-wrap{
          height: 100%;
          width: 100%;
          background: #0c1f34;
          border: 1px solid #0c1016;
          border-top: 0;

          .item-header{
            line-height: 45px;
            padding-left: 18px;
            background-image: linear-gradient(to bottom, #4d4d4d, #040406);
            border: 1px solid #181818;
            font-size: 14px;
            color: #fff;
          }

          .item-main{
            padding: 9px 11px;
            overflow: hidden;
            .el-tree{
              background: none;
            }
          }
        }

        .special-item{
          border-radius: 8px 8px 0 0;

          .popbox{
            position: absolute;
            z-index: 10;
            left: 17px;
            top: 0;
            width: 210px;
            height: 197px;
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

          .item-header{
            border-radius: 8px 8px 0 0;

            .crruCrew{
              margin-left: 30px;
            }

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

          .item-main{
            position: relative;
            .my-row{
              height: 44px;
              line-height: 44px;
              color: #fff;
              font-size: 14px;
              display: flex;
              flex-direction: row;
              overflow: hidden;

              &:nth-child(2n){
                background-color: rgba(0, 0, 0, 0.149);
              }

              .my-col{
                display: inline-flex;

                .text-inner{
                  text-align: center;
                  width: 100%;
                }

                &:nth-child(1){
                  width: 10%;
                }

                &:nth-child(2){
                  width: 30%;
                }

                &:nth-child(3){
                  width: 10%;
                }

                &:nth-child(4){
                  width: 15%;
                }

                &:nth-child(5){
                  width: 15%;
                }

                &:nth-child(6){
                  width: 20%;
                }
              }
            }

            .table-header{
              .my-row{
                color: #366ca7;
                background-color: rgba(0, 0, 0, 0.149);
              }

            }

            .table-body{
              //padding-top: 44px;
              height: 100%;
              width: 100%;
            }

          }


        }

        .left-wrap{
          width: 12%;
          height: 100%;
        }

        .mid-wrap{
          width: 12%;
          height: 100%;
          margin: 0 1%;
        }

        .right-wrap{
          width: 74%;
          height: 100%;
        }

      }

    }

  }


</style>
