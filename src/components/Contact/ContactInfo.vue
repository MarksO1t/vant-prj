<!--  -->
<template>
  <div>
    <van-nav-bar title left-arrow @click-left="onClickLeft">
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>
    
    <div class="contact-info">
      <div class="img">
        <img src="../.././assets/217.jpg"/>
      </div>
      <div class="content">
        <div>
          <span class="name">{{contactInfo.name}}</span>
        </div>
        <div>
          <span class="cv">CV：</span>
          <span class="cv">{{contactInfo.cv}}</span>
        </div>
        <div>
          <span class="area">技能：</span>
          <span class="area" style="margin-right:5px;" v-for="(item,index) in contactInfo.area" :key="index">{{item}}</span>
        </div>
      </div>
    </div>
    <van-cell title="设置备注和标签" is-link />
    <div class="crack"></div>
    <van-cell title="庭院" is-link />
    <van-cell title="更多信息" is-link />
    <div class="crack"></div>
    <van-nav-bar class="bot-btn">
        <van-icon name="chat-o" slot="title" />
        <span slot="title">发消息</span>
    </van-nav-bar>
    <van-nav-bar class="bot-btn">
        <van-icon name="phone-o" slot="title" />
        <span slot="title">音视频通话</span>
    </van-nav-bar>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data() {
    return {
        contactInfo: {
            name: '大天狗',
            cv: '前野智昭',
            area: ['风袭', '钢铁之羽' ,'羽刃暴风']
        }
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        name: "Index",
        params: {
          active: 1
        }
      });
    }
  },
  mounted() {
  }
};
</script>

<style lang='scss'>
.contact-info {
  background-color: #fff;
  height: 130px;
  width: 100%;
  border-bottom: 1px solid #e9e9e9;
  .img {
    float: left;
    width: 60px;
    height: 60px;
    margin: 10px;
    img {
      width: 100%;
      height: 60px;
      border-radius: 15px;
    }
  }
  .content {
    width: 260px;
    height: 130px;
    float: left;
    .name {
      display: inline-block;
      height: 60px;
      line-height: 60px;
      font-size: 20px;
      font-weight: 700;
    }
    .cv {
      display: inline-block;
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      font-weight: 700;
      color: #808080;
    }
    .area {
        margin-top: 10px;
        display: inline-block;
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      color: #808080;
    }
  }
}
.crack {
  height: 5px;
  width: 100%;
  background-color: #f5f5f5;
}
.bot-btn {
    border-bottom:1px solid #f5f5f5;
    .van-icon {
        font-size: 20px;
    }
    span {
        margin-left: 10px;
        color: #808080;
        font-size: 14px;
        font-weight: 700;
    }
}
</style>