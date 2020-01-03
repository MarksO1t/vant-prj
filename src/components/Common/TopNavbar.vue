<!--  -->
<template>
  <div>
    <van-nav-bar title :left-text="downActive">
      <!-- <span slot="left">{{downActive}}</span> -->
      <van-icon v-show="downActive" name="search" slot="right" />
      <van-icon v-show="downActive" name="add-o" slot="right" style="margin-left:10px;" />
      <van-icon v-show="!downActive" name="photograph" slot="right"/>
    </van-nav-bar>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  name: "TopNavbar",
  props: ["downActive"],
  // watch: {
  //   downActive: {
  //     handler(val) {
  //       window.console.log("downActive", val);
  //     },
  //     deep: true
  //   }
  // },
  data() {
    return {
      test: "123"
    };
  }
};
</script>

<style>
.van-nav-bar__text {
  font-size: 15px;
  font-weight: 700;
}
.van-icon {
  font-size: 24px;
}
</style>