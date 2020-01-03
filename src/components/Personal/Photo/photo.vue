<!--  -->
<template>
  <div>
    <van-nav-bar title :left-text="leftText" left-arrow @click-left="onClickLeft"></van-nav-bar>

    <van-tabs v-model="tabActive">
      <van-tab title="朋友圈相册">
        <van-row class="tab-content" v-for="(it,i) in dataList" :key="i">
          <van-col span="6">
            <div class="month">{{it.month.slice(5)}}</div>
            <div class="year">{{it.month.slice(0,5)}}</div>
          </van-col>
          <van-col span="18">
            <van-grid square :gutter="10" :column-num="3">
              <van-grid-item class="square" v-for="(item,index) in it.friendList" :key="index">
                <van-image :src="item" />
              </van-grid-item>
            </van-grid>
          </van-col>
        </van-row>
      </van-tab>
      <van-tab title="式神录">式神录List</van-tab>
    </van-tabs>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data() {
    return {
      leftText: "相册",
      tabActive: 0,
      month: [
        // "2019年12月",
        // "2019年11月",
        // "2019年10月",
        // "2019年9月",
        // "2019年8月",
        // "2019年7月"
      ],
      src1: require("@/assets/cat.jpeg"),
      dataList: []
    };
  },
  created() {
    let temp = [];
    let mn = 10;
    for (let i = 12; i > 0; i--) {
      this.month.push(`2019年${i}月`);
    }
    this.month.forEach(item => {
      temp.push({
        month: item,
        friendList: this.loopFriend(mn, mn + 5)
      });
      mn += 5;
    });
    this.dataList = temp;
    window.console.log("temp", temp);
  },
  mounted() {
    //   // window.console.log('png1',png1);
    // this.getBase64('@/assets/cat.jpeg').then(res => {
    //   window.console.log('res',res);
    // })
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
    getBase64(file) {
      return new Promise(function(resolve, reject) {
        let reader = new FileReader();
        let imgResult = "";
        reader.readAsDataURL(file);
        reader.onload = function() {
          imgResult = reader.result;
        };
        reader.onerror = function(error) {
          reject(error);
        };
        reader.onloadend = function() {
          resolve(imgResult);
        };
      });
    },
    loopFriend(m, n) {
      let srcList = [];
      for (let i = m; i < n; i++) {
        srcList.push(require(`@/assets/lol/ia_8000000${i}.png`));
      }
      return srcList;
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
.van-grid-item__content {
  padding: 0;
}
.tab-content {
  margin-top: 20px;
}
.month {
  margin-left: 10px;
  font-size: 16px;
  font-weight: 700;
  color: #808080;
}
.year {
  margin-left: 30px;
  font-size: 10px;
  color: #808080;
}
</style>