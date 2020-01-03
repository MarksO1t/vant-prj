<!--  -->
<template>
  <div>
    <div class="equip">
      <van-icon name="desktop-o" />
      <span class="equip-font">{{equipMsg}}</span>
    </div>
    <!-- <van-cell-group>
      <van-cell v-for="(item,index) in msgList" :title="item.name" :value="item.info" :key="index" />
    </van-cell-group> -->
<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
  <van-swipe-cell v-for="(item,index) in msgList" :key="index">
      <van-cell :border="false" :title="item.name" :value="item.info" />
      <template slot="right">
        <van-button square type="primary" text="置顶" />
        <van-button square type="danger" text="删除" />
      </template>
    </van-swipe-cell>
</van-pull-refresh>
    
  </div>
</template>

<script type='text/ecmascript-6'>
import msg from '../../mock/msg'
export default {
  data() {
    return {
      equipMsg: "Windows 微信已登录，手机通知已关闭",
      test1: "单元格1",
      msgList: [],
      isLoading: false,
    };
  },
  created() {
    this.msgList = msg.message_list
  },
  methods: {
    onRefresh(){
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false;
      },500)
    }
  },
};
</script>

<style lang="scss">
.equip {
  height: 40px;
  width: 100%;
  font-size: 14px;
  line-height: 40px;
  background-color: #f5f5f5;
  .van-icon {
    width: 40px;
    font-size: 20px;
    line-height: 40px;
    text-align: center;
  }
  .equip-font {
    margin-left: 10px;
  }
}
.van-cell__value {
  height: 24px;
  overflow: hidden;
}
</style>