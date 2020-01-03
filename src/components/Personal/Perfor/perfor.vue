<!--  -->
<template>
  <div>
    <van-nav-bar title :left-text="leftText" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="wall">
      <van-circle
        v-model="currentRate"
        :rate="rate"
        :stroke-width="60"
        size="60%"
        :speed="perforSpeed"
        :color="perforColor"
        layer-color="#f5f5f5"
        :text="rateShow"
      />
      <div class="udBtn">
        <van-icon name="arrow-up" @click="perforUp" />
        <van-icon name="arrow-down" @click="perforDown" />
      </div>
    </div>
    <div class="chart-area">
      <div ref="chart" id="chart" class="chart"></div>
    </div>
    <div class="grow-area">
      <div class="grow-title">
        <van-icon name="chart-trending-o" />
        <span>成长曲线</span>
      </div>
      <div class="grow-item" v-for="(item,index) in growList" :key="index">
        <div class="item-left">
          <van-icon :name="item.icon" />
        </div>
        <div class="item-mid">
          <div class="item-task">{{item.task}}</div>
          <div class="item-val">成长值 +{{item.val}}</div>
        </div>
        <div class="item-right">
          <span>{{item.progress}}/{{item.progressAll}}</span>
        </div>
      </div>
    </div>
    <div class="tips">
      <van-row>
        <van-col span="2" offset="1" class="tips-title">说明:</van-col>
        <van-col span="20" offset="1">
          <div>1.性能配置范围在30~50%属于省电模式；在50~75%属于省电模式；在75~90%属于省电模式。</div>
          <div>2.使用时间指在每月平均每天该APP在设备中的运行时间。</div>
          <div>3.完成任务可加相应的成长值，一天最多累计100分。</div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data() {
    return {
      leftText: "性能配置",
      currentRate: 0,
      rate: 70,
      perforColor: "#ff7c00",
      perforSpeed: 80,
      growList: [
        {
          icon: 'checked',
          task: '今日签到',
          val: 10,
          progress: 0,
          progressAll: 1,
        },
        {
          icon: 'cart',
          task: '购买商品',
          val: 10,
          progress: 1,
          progressAll: 3,
        },
        {
          icon: 'point-gift',
          task: '送礼物',
          val: 20,
          progress: 1,
          progressAll: 1,
        },
        {
          icon: 'comment-circle',
          task: '论坛评论',
          val: 20,
          progress: 4,
          progressAll: 10,
        },
        {
          icon: 'good-job',
          task: '论坛点赞',
          val: 7,
          progress: 7,
          progressAll: 10,
        },
        {
          icon: 'live',
          task: '观看直播',
          val: 10,
          progress: 1,
          progressAll: 2,
        },
      ]
    };
  },
  created() {},
  mounted() {
    this.drawLine();
  },
  watch: {
    rate: {
      handler(val, old) {
        if (val !== old) {
          this.perforSpeed = 10;
        }
        if (val <= 50) {
          this.perforColor = "#00a000";
        } else if (val > 50 && val <= 75) {
          this.perforColor = "#ff7c00";
        } else {
          this.perforColor = "#e60000";
        }
      },
      deep: true
    }
  },
  computed: {
    rateShow() {
      if (this.rate <= 50) {
        return "省电模式" + this.rate + "%";
      } else if (this.rate > 50 && this.rate < 75) {
        return "均衡模式" + this.rate + "%";
      } else {
        return "性能模式" + this.rate + "%";
      }
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        name: "Index",
        params: {
          active: 3
        }
      });
    },
    perforUp() {
      if (this.rate < 90) {
        this.rate += 5;
      } else {
        this.$notify({
          type: "danger",
          message:
            "已到性能最高值，再加强会致使电耗增境加；若要强行进行，请开启开发者模式！"
        });
      }
    },
    perforDown() {
      if (this.rate > 30) {
        this.rate -= 5;
      } else {
        this.$notify({
          type: "danger",
          message:
            "已到性能最低值，再降低会致使系统卡顿；若要强行进行，请开启开发者模式！"
        });
      }
    },
    drawLine() {
      let chart = this.$refs.chart;
      if (chart) {
        let myChart = this.$echarts.init(chart);
        myChart.setOption({
          // tooltip: {
          //   trigger: "item",
          //   formatter: "{b}: {d}%"
          // },
          color: ["#3398DB"],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
          },
          xAxis: {
            type: "category",
            data: ["6月", "7月", "8月", "9月", "10月", "11月"],
            axisTick: {
              alignWithLabel: true
            }
          },
          yAxis: {
            name: "使用时间(h)",
            type: "value"
          },
          series: [
            {
              name: "性能配置",
              type: "bar",
              barWidth: "60%",
              data: [2.45, 3.1, 2.76, 0.89, 2.65, 3.01]
            }
          ]
        });
      }
    }
  }
};
</script>

<style lang='scss'>
body {
  background-color: #f5f5f5;
}
.crack {
  height: 5px;
  width: 100%;
  background-color: #f5f5f5;
}
.wall {
  height: 200px;
  width: 100%;
  opacity: 0.8;
  background-color: #fff;
  .van-circle {
    float: left;
    margin: 40px 0 0 20%;
  }
  .udBtn {
    position: relative;
    float: right;
    width: 15%;
    height: 100px;
    margin: 50px 5% 50px 0;
    .van-icon {
      position: absolute;
      padding: 5px;
      font-size: 36px;
      left: 0;
    }
    .van-icon-arrow-up {
      top: 0;
      color: #e60000;
    }
    .van-icon-arrow-down {
      bottom: 0;
      color: #00a000;
    }
  }
}
.chart-area {
  background-color: #fff;
  margin: 10px 0;
  height: 190px;
  .chart {
    margin: 0 5%;
    width: 90%;
    height: 190px;
  }
}
.grow-area {
  background-color: #fff;
  margin-bottom: 10px;
  .grow-title {
    font-size: 20px;
    line-height: 30px;
    color: #ff7c00;
    border-bottom: 1px solid #f5f5f5;
    span {
      height: 30px;
      font-size: 14px;
      line-height: 20px;
      color: #000;
    }
  }
  .grow-item {
    border-bottom: 1px solid #f5f5f5;
    height: 50px;
    .item-left {
      float: left;
      width: 50px;
      height: 50px;
      color: #ff7c00;
      .van-icon {
        font-size: 30px;
        margin: 10px;
      }
    }
    .item-mid {
      float: left;
      // background-color: #808080;
      width: 200px;
      height: 50px;
      .item-task {
        font-size: 16px;
        color: #000;
        line-height: 30px;
      }
      .item-val {
        font-size: 12px;
        color: #ff7c00;
      }
    }
    .item-right {
      float: right;
      margin-right: 20px;
      width: 50px;
      height: 50px;
      color: #ff7c00;
      font-weight: 700;
      line-height: 50px;
    }
  }
}
.tips {
  background-color: #fff;
  padding: 5px 0 50px;
  font-size: 12px;
  line-height: 16px;
  color: #808080;
  .tips-title {
    font-weight: 700;
  }
}
</style>