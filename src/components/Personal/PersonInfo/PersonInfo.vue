<!--  -->
<template>
  <div>
    <van-nav-bar title :left-text="leftText" left-arrow @click-left="onClickLeft">
      <!-- <span slot="left">{{downActive}}</span> -->
    </van-nav-bar>

    <van-nav-bar class="part-img" left-text="头像">
      <div class="person-img" slot="right">
        <img src="@/assets/cat.jpeg" />
      </div>
    </van-nav-bar>
    <van-nav-bar left-text="昵称">
      <span slot="right">{{personInfo.name}}</span>
      <van-icon name="arrow" slot="right" />
    </van-nav-bar>
    <van-nav-bar left-text="神龛号">
      <span slot="right">{{personInfo.nameCode}}</span>
    </van-nav-bar>
    <van-nav-bar left-text="二维码名片">
      <van-icon name="qr" slot="right" style="font-size:24px;" />
      <van-icon name="arrow" slot="right" />
    </van-nav-bar>
    <van-nav-bar left-text="更多">
      <van-icon name="arrow" slot="right" />
    </van-nav-bar>
    <div class="crack"></div>
    <van-nav-bar left-text="我的地址" @click-right="clickAddress">
      <van-icon name="arrow" slot="right" />
    </van-nav-bar>
    <van-nav-bar left-text="我的发票抬头">
      <van-icon name="arrow" slot="right" />
    </van-nav-bar>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data() {
    return {
      leftText: "个人信息",
      personInfo: {
        name: "",
        nameCode: ""
      }
    };
  },
  created() {
    if (this.$route.params) {
      this.personInfo = this.$route.params.personInfo;
      window.console.log(this.personInfo);
    }
  },
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
    },
    clickAddress() {
      this.$router.push({
        name: "Address",
        params: {}
      });
    }
  }
};
</script>

<style lang='scss'>
.part-img {
  height: 70px;
  width: 100%;
  line-height: 70px;
  .person-img {
    width: 60px;
    height: 60px;
    margin: 5px;
    img {
      width: 60px;
      height: 60px;
      border-radius: 10px;
    }
  }
}
.van-nav-bar__text {
  color: #000;
}
.van-nav-bar__right {
  font-size: 14px;
  font-weight: 700;
  color: #808080;
  .van-icon {
    font-size: 16px;
    color: #808080;
  }
}
</style>