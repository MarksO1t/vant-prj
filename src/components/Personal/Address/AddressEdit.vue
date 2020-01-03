<!--  -->
<template>
  <div>
    <van-nav-bar title :left-text="leftText" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script type='text/ecmascript-6'>
import area from "@/mock/area";
export default {
  data() {
    return {
      leftText: "地址编辑",
      areaList: {},
      searchResult: []
      //   addressEdit: { id: '1',
      //  name: '张三',
      //  tel: '13000000000',
      //  province:'江苏',
      //  city:'无锡',
      //  county:'崇安区',
      //  area_code:'120000',
      //  address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
      //  postal_code:'123456',
      // }
    };
  },
  created() {
    //   window.console.log(area);
    this.areaList = area;
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        name: "Address"
      });
    },
    onSave(AddressInfo) {
      window.console.log(AddressInfo);
      //   this.$toast({
      //     message: "chengg"
      //   });
      const toast = this.$toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: "新增成功， 3 秒后跳转"
      });
      let second = 3;
      const timer = setInterval(() => {
        second--;
        if (second) {
          toast.message = `新增成功， ${second} 秒后跳转`;
        } else {
          clearInterval(timer);
          // 手动清除 Toast
          this.$toast.clear();
          this.$router.push({
            name: "Address"
          });
        }
      }, 1000);
    },
    onDelete() {}
    // onChangeDetail(val) {
    //   if (val) {
    //     this.searchResult = [{
    //       name: '黄龙万科中心',
    //       address: '杭州市西湖区'
    //     }];
    //   } else {
    //     this.searchResult = [];
    //   }
    // }
  }
};
</script>

<style lang='scss'>
.van-toast {
    width: 160px;
}
</style>