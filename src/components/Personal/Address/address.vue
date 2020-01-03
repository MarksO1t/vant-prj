<!--  -->
<template>
  <div>
    <van-nav-bar title :left-text="leftText" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <van-address-list v-model="chosenAddressId" :list="addressList" @add="onAdd" @edit="onEdit" />
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data() {
    return {
      leftText: "我的地址",
      chosenAddressId: 1,
      addressList: [
        {
          id: 1,
          name: "小凡",
          tel: "12300000001",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        },
        {
          id: 2,
          name: "露露",
          tel: "12300123000",
          address: "浙江省杭州市滨湖区恒生大厦1901"
        }
      ]
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        name: "PersonInfo",
        params: {
          personInfo: {
            name: "醉酒狂暴520",
            nameCode: "gd21325224"
          }
        }
      });
    },
    onAdd() {
        this.$router.push({
            name: 'AddressEdit'
        })
    },
    onEdit() {}
  }
};
</script>

<style lang='scss'>
</style>