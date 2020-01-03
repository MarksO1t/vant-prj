<template>
  <div>
    <top-navbar :downActive="titleActive"></top-navbar>
    <div class="container" :style="{height:autoHeight+'px'}">
      <!-- <message v-if="active === 0"></message> -->
      <contact v-if="active === 1"></contact>
      <apply v-else-if="active === 2"></apply>
      <personal v-else-if="active === 3"></personal>
      <message v-else></message>      
    </div>
    <bot-tabbar :upActive="active" @pushActive="updateActive"></bot-tabbar>
  
  </div>
</template>

<script>
import TopNavbar from './TopNavbar'
import BotTabbar from './BotTabbar'
import Message from '../Message/index'
import Contact from '../Contact/index'
import Apply from '../Apply/index'
import Personal from '../Personal/index'
export default {
    name: 'test',
  data() {
    return {
      autoHeight: 10,
      active: 0,
      titleActive: '',
    };
  },
  components: {
    TopNavbar,
      BotTabbar,
      Message,Contact,Apply,Personal
  },
  watch: {
    active: {
      handler(val) {if(val === 1) {
          this.titleActive = '式神录'
        }else if(val === 2) {
          this.titleActive = '发现'
        }else if(val === 3) {
          this.titleActive = ''
        }else {
          this.titleActive = 'Onmyoji'
        }
      },
      deep: true
    }
  },
  beforeCreate() {
    this.active = 0;

  },
  created() {
    this.autoHeight = window.innerHeight - 50;
  },
  mounted() {
    if(this.$route.params) {
      this.active = this.$route.params.active
    }
  },
  methods: {
    updateActive(d) {
      window.console.log('active+',d);
      this.active = d;
    }
  }
};
</script>

<style>
body {
  background-color: #f5f5f5;
}
.container {
  width: 100%;
}
</style>
