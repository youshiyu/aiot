<template>
  <div>
    <lg-header :leftArrow="false"
               :titleType="1"
               title="路线记录"></lg-header>
    <div class="list">
      <div id="container">

      </div>
    </div>
  </div>
</template>

<script>
import Map from "./map"
import axios from '@/utils/axios';

export default {
  name: 'Home',
  data () {
    return {
      message: '',
    }
  },
  mounted () {
    //先试一下游标获取,测试只能通过OBS获取了，gg
    // axios.get("")
    //   .then(response => {
    //     console.log(response);
    //     // this.message = response.partition_cursor;
    //     // console.log(this.message);
    //   });
    var marker, map = new AMap.Map("container", {
      resizeEnable: true,
      center: [120.03933, 30.22829],
      zoom: 15,
    }
    );
    var marker1 = new AMap.Marker({
      icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
      position: [120.03943, 30.22829],
      offset: new AMap.Pixel(-13, -30)
    });
    var marker2 = new AMap.Marker({
      icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_r.png",
      position: [120.03933, 30.22847],
      offset: new AMap.Pixel(-13, -30)
    });
    map.add(marker1);
    map.add(marker2);
    map.setFitView();
  }
}




function updateContent () {

  if (!marker) {
    return;
  }

  // 自定义点标记内容
  var markerContent = document.createElement("div");

  // 点标记中的图标
  var markerImg = document.createElement("img");
  markerImg.className = "markerlnglat";
  markerImg.src = "下载.png";
  markerContent.appendChild(markerImg);

  // 点标记中的文本
  var markerSpan = document.createElement("span");
  markerSpan.className = 'marker';
  markerSpan.innerHTML = "Hi，我被更新啦！";
  markerContent.appendChild(markerSpan);

  marker.setContent(markerContent); //更新点标记内容
  marker.setPosition([120.419, 30.3]); //更新点标记位置
}

// 清除 marker
function clearMarker () {

  if (marker) {
    marker.setMap(null);
    marker = null;
  }
}

</script>
<style lang="scss" scoped>
.list {
  height: 100%;
  padding-top: 46px;
}
#container {
  height: 95%;
  width: 100%;
  overflow: hidden;
  z-index: -100;
}
</style>