<!--  -->
<template>
  <div>
    <!-- <van-cell-group>
      <van-cell v-for="(item,index) in funList" :title="item.name" :value="item.info" :key="index"/>
    </van-cell-group>-->
    <ul class="ul-container">
      <li class="part">
        <div class="part-frame">
          <van-icon name="add-o" />
        </div>
        <span class="part-title">新的朋友</span>
      </li>
      <li class="part">
        <div class="part-frame" style="background-color: #2aae2a;">
          <van-icon name="friends-o" />
        </div>
        <span class="part-title">群聊</span>
      </li>
      <li class="part">
        <div class="part-frame" style="background-color: #4169e1;">
          <van-icon name="label-o" />
        </div>
        <span class="part-title">标签</span>
      </li>
      <li class="part">
        <div class="part-frame" style="background-color: #4169e1;">
          <van-icon name="contact" />
        </div>
        <span class="part-title">公众号</span>
      </li>
    </ul>
    <van-index-bar :index-list="indexList" :style="{height:indexbarHeight+'px'}">
      <div v-for="(item,index) in contactList" :key="index">
        <van-index-anchor :index="item.index" />
        <van-cell v-for="(it,i) in item.contactAll" :title="it" :key="i" @click="showContact" />
      </div>
    </van-index-bar>
  </div>
</template>

<script type='text/ecmascript-6'>
import contact from "../../mock/contact";
export default {
  data() {
    return {
      indexList: ["N", "R", "SR", "SSR", "SP"],
      contactList: [],
      indexbarHeight: 0
    };
  },
  created() {
    const contactOrg = contact.contact_list;
    let N = [],
      R = [],
      SR = [],
      SSR = [],
      SP = [];
    contactOrg.forEach(item => {
      if (item.level == "N") {
        N.push(item.name);
      }
      if (item.level == "R") {
        R.push(item.name);
      }
      if (item.level == "SR") {
        SR.push(item.name);
      }
      if (item.level == "SSR") {
        SSR.push(item.name);
      }
      if (item.level == "SP") {
        SP.push(item.name);
      }
    });
    this.indexList.forEach(item => {
      if (item == "N") {
        this.contactList.push({
          index: item,
          contactAll: N
        });
      }
      if (item == "R") {
        this.contactList.push({
          index: item,
          contactAll: R
        });
      }
      if (item == "SR") {
        this.contactList.push({
          index: item,
          contactAll: SR
        });
      }
      if (item == "SSR") {
        this.contactList.push({
          index: item,
          contactAll: SSR
        });
      }
      if (item == "SP") {
        this.contactList.push({
          index: item,
          contactAll: SP
        });
      }
    });
    this.contactList.push(
      {
          index: "#",
          contactAll: [""]
        },)
    window.console.log('式神',this.contactList);
  },
  mounted() {
    // this.contactList.forEach(item => {
    //   this.indexList.push(item.index);
    // });
    this.indexbarHeight = window.innerHeight - 260;
  },
  methods: {
    showContact() {
      this.$router.push({
        name: "ContactInfo",
      });
    }
  }
};
</script>

<style lang="scss">
.ul-container {
  height: 164px;
  width: 100%;
  background-color: #fff;
}
.part {
  height: 40px;
  width: 100%;
  display: inline-block;
  border-bottom: 1px solid #f4f4f4;
  .part-frame {
    display: inline-block;
    width: 30px;
    height: 30px;
    margin: 5px;
    border-bottom: none;
    border-radius: 5px;
    background-color: #debe00;
  }
  .van-icon {
    font-size: 20px;
    margin: 5px;
    color: #fff;
  }
  .part-title {
    margin-left: 10px;
    display: inline-block;
    font-size: 16px;
  }
}
</style>