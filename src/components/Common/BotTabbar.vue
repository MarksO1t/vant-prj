<!--  -->
<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="chat-o">消息</van-tabbar-item>
      <van-tabbar-item icon="friends-o">通讯录</van-tabbar-item>
      <van-tabbar-item icon="qr">发现</van-tabbar-item>
      <van-tabbar-item icon="manager-o">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  name: "BotTabbar",
  props: ["upActive"],
  data() {
    return {
      active: 0
    };
  },
  created() {
    // this.active = upActive
  },
  watch: {
    upActive: {
      handler(val) {
        this.active = val;
      },
      deep: true
    },
    active: {
      handler(val) {
        // window.console.log('val',val);
        this.$emit("pushActive", val);
      },
      deep: true
    }
  }
};
</script>

<style>
</style>