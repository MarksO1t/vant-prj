<!--  -->
<template>
  <div>
    <div class="person-info" @click="toInfo">
      <div class="img">
        <img src="@/assets/cat.jpeg"/>
      </div>
      <div class="content">
        <div>
          <span class="name">{{personInfo.name}}</span>
        </div>
        <div>
          <span class="name-code">神龛号：</span>
          <span class="name-code">{{personInfo.nameCode}}</span>
        </div>
      </div>
      <div class="qr-code">
        <van-icon name="qr" />
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="crack"></div>
    <!-- <van-cell title="支付" icon="gold-coin" is-link /> -->
    <van-collapse v-model="activeNames">
      <van-collapse-item title="支付" icon="gold-coin" name="1">
          <van-cell title="支付宝" icon="alipay" is-link />
          <van-cell title="微信" icon="wechat" is-link />
          <van-cell title="银联卡" icon="card" is-link />
      </van-collapse-item>
    </van-collapse>
    <div class="crack"></div>
    <van-cell title="收藏" icon="like" is-link />
    <van-cell title="相册" @click="toPhoto" icon="photo" is-link />
    <van-cell title="卡券" icon="gift-card" is-link />
    <van-cell title="性能" @click="toPerfor" icon="fire" is-link />
    <van-cell title="表情" icon="smile" is-link />
    <div class="crack"></div>
    <van-cell title="设置" @click="toSetting" icon="setting" is-link />
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data() {
    return {
      personInfo: {
        name: "醉酒狂暴520",
        nameCode: "gd21325224"
      },
      activeNames: ["0"]
    };
  },
  methods: {
      toInfo() {
          this.$router.push({
            name: 'PersonInfo',
            params: {
              personInfo: this.personInfo
            }
          });
      },
      toPhoto() {
          this.$router.push({
            name: 'Photo',
          });
      },
      toPerfor() {
          this.$router.push({
            name: 'Perfor',
          });
      },
      toSetting() {
          this.$router.push({
            name: 'Setting',
          });
      },
  },
};
</script>

<style lang="scss">
.person-info {
  background-color: #fff;
  height: 100px;
  width: 100%;
  .img {
    float: left;
    width: 80px;
    height: 80px;
    margin: 10px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 15px;
    }
  }
  .content {
    width: 200px;
    height: 100px;
    float: left;
    .name {
      display: inline-block;
      height: 60px;
      line-height: 60px;
      font-size: 20px;
      font-weight: 700;
    }
    .name-code {
      display: inline-block;
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      font-weight: 700;
      color: #808080;
    }
  }
  .qr-code {
    position: relative;
    float: right;
    // background-color: #dcdcdc;
    width: 50px;
    height: 80px;
    .van-icon-qr {
      position: absolute;
      left: 0;
      bottom: 0;
    }
    .van-icon-arrow {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
}
.crack {
  height: 5px;
  width: 100%;
  background-color: #f5f5f5;
}
.van-icon-gold-coin {
  color: #e6d933;
}
.van-icon-alipay {
  color: #00BBEE;
}
.van-icon-wechat {
  color: #00C250;
}
.van-icon-card {
  color: #ff0000;
}
.van-icon-like {
  color: #a2c777;
}
.van-icon-photo {
  color: #4169e1;
}
.van-icon-gift-card {
  color: #4169e1;
}
.van-icon-fire {
  color: #cc0000;
}
.van-icon-smile {
  color: #e6d933;
}
.van-icon-setting {
  color: #6a5acd;
}
</style>