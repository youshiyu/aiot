<template>
  <div>
    <lg-header :leftArrow="false" :titleType="1" title="路线记录"></lg-header>
    <div class="list">
      <div id="container"></div>
    </div>
  </div>
</template>

<script>
import Map from "./map";
import axios from "@/utils/axios";
import storage from "good-storage";
export default {
  name: "Home",
  data() {
    return {
      jindu: "", //注意这里是字符串类型，在自定义的gps类中要转化成数字
      weidu: "",
      message: "xxx",
      totalMarker: [],
      alarm:false //报警选项,后来没用
    };
  },
  mounted() {
    var map = new AMap.Map("container", {
      resizeEnable: true,
      center: [120.03933, 30.22829],
      zoom: 16
    });
    var _this = this;
    function getready() {
      axios
        .get("http://obs8633.obs.cn-north-4.myhuaweicloud.com")
        .then(response => {
          const len = response.data.length;
          //  console.log(response.data.slice(len-235,len-180));
          const str = response.data.slice(len - 235, len - 180);
          let key = [];
          for (let i = 0; i < str.length; i++) {
            if (
              str[i] == "<" &&
              str[i + 1] == "K" &&
              str[i + 2] == "e" &&
              str[i + 3] == "y"
            ) {
              i = i + 5;
              while (1) {
                key.push(str[i]);
                i++;
                if (
                  str[i] == "<" &&
                  str[i + 1] == "/" &&
                  str[i + 2] == "K" &&
                  str[i + 3] == "e"
                )
                  break;
              }
            }
          }
          console.log(_this.message); //这个是访问不到的，因为mounted函数中的this指向window
          // console.log(key.join(""));
          //  console.log('`````````'+this.name);
          let url = `https://obs8633.obs.cn-north-4.myhuaweicloud.com/${key.join("")}`;
          //先试一下游标获取,测试只能通过OBS获取了，gg
          console.log(url);

          axios.get(`${url}`).then(response => {
            const indexOfFirst=response.data.indexOf('alarm') 
            console.log(response.data.slice(indexOfFirst+8,indexOfFirst+9)) //0|1
            let isalarm=response.data.slice(indexOfFirst+8,indexOfFirst+9);
            if(Number(isalarm)==1){
              alert("老人报警了");
            }

            //if( response.data.slice(80, 90))
            console.log(typeof response.data);
            if (typeof response.data == "object") {
              console.log(response.data.services[0].properties.longitude);
              console.log(response.data.services[0].properties.latitude);
              _this.jindu = response.data.services[0].properties.longitude;
              _this.weidu = response.data.services[0].properties.latitude;
            } else {
              console.log("经度:", response.data.slice(80, 90)); //120.036263
              console.log("纬度:", response.data.slice(104, 113)); // 30.230240
              //经纬度
              _this.jindu = response.data.slice(80, 90);
              _this.weidu = response.data.slice(104, 113);
              //es6构造函数
            }

            //每30获取一次，应该会不一样的,这是之前str的时候获取方式，今天突然变成json了
            class Gps {
              constructor(jin, wei) {
                this.jin = jin;
                this.wei = wei;
              }
            } //Gps是个对象类
            const gps = new Gps(_this.jindu, _this.weidu);
            _this.totalMarker.push(gps);
            console.log(_this.totalMarker, "~~~~~~~", _this.totalMarker.length);
          });
        });

      // 坐标转换,并且加点
      function convertFrom(lnglat, type) {
        AMap.convertFrom(lnglat, type, function(status, result) {
          if (result.info === "ok") {
            var m2;
            var resLnglat = result.locations[0];
            m2 = new AMap.Marker({
              position: resLnglat
            });
            //他把添加坐标的也搞到坐标转换里了，可以最后统一加
            map.add(m2); //这个就每次加一个点,这是加蓝色的坐标位置
          }
        });
      }
      //
      function convertFromred(lnglat, type) {
        AMap.convertFrom(lnglat, type, function(status, result) {
          if (result.info === "ok") {
            var resLnglat = result.locations[0];
            var m1 = new AMap.Marker({
              position: resLnglat,
              icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_r.png"
            });
            //他把添加坐标的也搞到坐标转换里了，可以最后统一加
            map.add(m1); //这个就每次加一个点,这是加蓝色的坐标位置
          }
        });
      }
      for (let j = 0; j < _this.totalMarker.length; j++) {
        //  var lnglat = [120.036263,30.230240]; //这个是gps的经纬度
        var lnglat = [
          Number(_this.totalMarker[j].jin),
          Number(_this.totalMarker[j].wei)
        ];
        // console.log('奇怪这一句',j);
        if (j == _this.totalMarker.length - 1) //终点的画红色
        convertFromred(lnglat, "gps");
        else
         convertFrom(lnglat, "gps");
      }
    }

    getready();

    setInterval(getready, 1000 * 30); //每隔30s执行一次
  }

  // beforeDestroy() {
  //   //销毁定时器
  //   clearInterval(this.timer);
  // }
};
</script>


<style lang="scss" scoped>
.list {
  height: 100%;
  padding-top: 46px;
}
#container {
  height: 98%;
  width: 100%;
  overflow: hidden;
  z-index: -100;
}
</style>
