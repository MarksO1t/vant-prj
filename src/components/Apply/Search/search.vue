<!--  -->
<template>
  <div>
    <van-nav-bar title :left-text="leftText" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="search-container">
      <van-cell-group>
        <van-field placeholder="搜索或输入网址" left-icon="search" right-icon="volume" />
      </van-cell-group>
      <div class="search-type">
        <van-grid :border="false" :gutter="0" :column-num="3">
          <van-grid-item v-for="value in searchType" :key="value" :text="value" />
        </van-grid>
      </div>
      <div class="hot-container">
          <van-cell :border="false" title="热点" />
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-swipe-cell v-for="(item,index) in hotList" :key="index">
          <van-cell :border="false" :title="item" />
        </van-swipe-cell>
      </van-pull-refresh>
      </div>
      
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data() {
    return {
      leftText: "搜一搜",
      searchType: ["咨询", "百科", "问答", "视频", "音乐", "表情"],
      hotList: ["咨询", "百科", "问答", "视频", "音乐", "表情"],
      isLoading: false,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        name: "Index",
        params: {
          active: 2
        }
      });
    },
    onRefresh(){
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false;
      },500)
    }
  }
};
</script>

<style lang='scss'>
.search-container {
  //   background-color: #808080;
  //   height: 200px;
  width: 100%;
  .van-cell-group {
    display: inline-block;
    width: 80%;
    margin: 40px 10%;
  }
  .search-type {
    width: 80%;
    margin: 0 10%;
    .van-grid-item__content {
      background-color: #f5f5f5;
    }
    .van-grid-item__text {
      color: #1989fa;
      font-size: 14px;
      font-weight: 700;
    }
  }
  .hot-container {
      width: 80%;
      margin: 20px 10%;
      .van-cell {
          border-bottom: 1px solid #f5f5f5;
      }
      .van-cell__title {
          font-size: 14px;
          font-weight: 700;
          color: #000;
      }
  }
}
</style>