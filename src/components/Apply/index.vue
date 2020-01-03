<!--  -->
<template>
  <div>
    <van-notice-bar
      :text="notice"
      left-icon="volume-o"
      color="#1989fa"
      background="#ecf9ff"
      mode="closeable"
    />
    <van-cell title="朋友圈" icon="browsing-history-o" is-link />
    <div class="crack"></div>
    <van-cell title="扫一扫" icon="scan" is-link />
    <div class="crack"></div>
    <van-cell
      title="看一看"
      icon="closed-eye"
      id="capture"
      ref="pleasePhoto"
      @click="clickPhoto"
      is-link
    />
    <!--video用于显示媒体设备的视频流，自动播放-->
    <video
      v-show="videoShow"
      id="video"
      autoplay
      :style="{width: widthAuto+'px',height: heightAuto+'px'}"
    ></video>
    <van-cell title="搜一搜" @click="clickSearch" icon="search" is-link />
    <div class="crack"></div>
    <van-cell title="附件的人" icon="location-o" is-link />
    <van-cell title="小程序" icon="apps-o" is-link />

    <!-- <canvas id="canvas" width="480" height="320"></canvas> -->
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data() {
    return {
      notice:
        "足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。",
      video: Object,
      canvas: Object,
      context: Object,
      widthAuto: 0,
      heightAuto: 0,
      videoShow: false
    };
  },
  created() {
    this.widthAuto = this.heightAuto = window.innerWidth;
  },
  mounted() {
    this.video = document.getElementById("video");
    this.canvas = document.getElementById("canvas");
    // this.context = this.canvas.getContext("2d");
    // if (
    //   navigator.mediaDevices.getUserMedia ||
    //   navigator.getUserMedia ||
    //   navigator.webkitGetUserMedia ||
    //   navigator.mozGetUserMedia
    // ) {
    //   //调用用户媒体设备，访问摄像头
    //   this.getUserMedia(
    //     {
    //       video: {
    //         width: 480,
    //         height: 320,
    //         facingMode: { exact: "environment" }
    //       }
    //     },
    //     this.success(),
    //     this.error()
    //   );
    // } else {
    //   alert("你的浏览器不支持访问用户媒体设备");
    // }
  },
  methods: {
    clickSearch() {
          this.$router.push({
            name: 'Search',
          });
    },
    clickPhoto() {
      if (this.videoShow) {
        this.videoShow = false;
      } else {
        var promise = navigator.mediaDevices.getUserMedia({
          audio: true,
          video: { width: 500, height: 500 }
        });
        this.videoShow = true;
        promise.then(MediaStream => {
          //   将视频流设置为video元素的源
          this.video.srcObject = MediaStream;
          window.console.log("MediaStream", MediaStream);
          //播放视频
            this.video.play();
        });

        //   alert(this.video.src); //此处是生成图片的url
        //   //绘制画面
        //   this.context.drawImage(this.video, 0, 0, 480, 320);
      }
    }
    // success(stream) {
    //   //兼容webkit内核浏览器
    //   var CompatibleURL = window.URL || window.webkitURL;
    //   //将视频流设置为video元素的源
    //   this.video.src = CompatibleURL.createObjectURL(stream);
    //   //播放视频
    //   this.video.play();
    // },
    // error(error) {
    //   window.console.log("访问用户媒体设备失败：", error.name, error.message);
    // },
    // getUserMedia(constrains, success, error) {
    //   if (navigator.mediaDevices.getUserMedia) {
    //     //最新标准API
    //     navigator.mediaDevices
    //       .getUserMedia(constrains)
    //       .then(success)
    //       .catch(error);
    //   } else if (navigator.webkitGetUserMedia) {
    //     //webkit内核浏览器
    //     navigator
    //       .webkitGetUserMedia(constrains)
    //       .then(success)
    //       .catch(error);
    //   } else if (navigator.mozGetUserMedia) {
    //     //Firefox浏览器
    //     navagator
    //       .mozGetUserMedia(constrains)
    //       .then(success)
    //       .catch(error);
    //   } else if (navigator.getUserMedia) {
    //     //旧版API
    //     navigator
    //       .getUserMedia(constrains)
    //       .then(success)
    //       .catch(error);
    //   }
    // },
  }
};
</script>

<style>
.crack {
  height: 5px;
  width: 100%;
  background-color: #f5f5f5;
}
.van-icon-browsing-history-o {
  color: #a2c777;
}
.van-icon-scan {
  color: #4169e1;
}
.van-icon-closed-eye {
  color: #e5e619;
}
.van-icon-search {
  color: #ff0000;
}
.van-icon-location-o {
  color: #4169e1;
}
.van-icon-apps-o {
  color: #6a5acd;
}
</style>