<!--  -->
<template>
  <div>
    <van-nav-bar title :left-text="leftText" left-arrow @click-left="onClickLeft"></van-nav-bar>

    <van-nav-bar left-text="账号与安全">
      <van-icon name="arrow" slot="right" />
    </van-nav-bar>
    <div class="crack"></div>
    <van-nav-bar left-text="新消息提醒">
      <van-icon name="arrow" slot="right" />
    </van-nav-bar>
    <van-nav-bar left-text="勿扰模式">
      <van-icon name="arrow" slot="right" />
    </van-nav-bar>
    <van-nav-bar left-text="聊天">
      <van-icon name="arrow" slot="right" />
    </van-nav-bar>
    <van-nav-bar left-text="隐私">
      <van-icon name="arrow" slot="right" />
    </van-nav-bar>
    <van-nav-bar left-text="通用">
      <van-icon name="arrow" slot="right" />
    </van-nav-bar>
    <div class="crack"></div>
    <van-nav-bar left-text="关于神龛">
      <van-icon name="arrow" slot="right" />
    </van-nav-bar>
    <van-nav-bar left-text="帮助与反馈">
      <van-icon name="arrow" slot="right" />
    </van-nav-bar>
    <van-nav-bar>
      <span slot="left">插件</span>
      <van-icon name="cluster-o" slot="left" />
      <van-icon name="arrow" slot="right" />
    </van-nav-bar>
    <div class="crack"></div>
    <van-nav-bar class="bot-btn">
        <span slot="title">切换账号</span>
    </van-nav-bar>
    <div class="crack"></div>
    <van-nav-bar class="bot-btn">
        <span slot="title">退出</span>
    </van-nav-bar>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data() {
    return {
      leftText: "设置"
    };
  },
  created() {},
  //   watch: {
  //     personInfo: {
  //       handler(val,old) {
  //           window.console.log('personInfo',val,old);
  //       },
  //       deep: true
  //     }
  //   },
  methods: {
    onClickLeft() {
      this.$router.push({
        name: "Index",
        params: {
          active: 3
        }
      });
    }
  }
};
</script>

<style lang='scss'>
.crack {
  height: 5px;
  width: 100%;
  background-color: #f5f5f5;
}
.van-nav-bar__left {
  .van-nav-bar__text {
    color: #000;
  }
  span {
    font-size: 15px;
    font-weight: 700;
    margin-right: 5px;
  }
  .van-icon {
    font-size: 18px;
    color: #969799;
  }
}
.van-nav-bar__right {
  .van-icon-arrow {
    color: #969799;
  }
}
.van-nav-bar__title {
  font-weight: 700;
}
</style>