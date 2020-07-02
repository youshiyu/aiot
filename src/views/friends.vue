<template>
  <div class="friend">
    <div class="information">
      <lg-header
        :leftArrow="false"
        :titleType="1"
        style="box-shadow:0px 12px 8px -12px hsl(315, 51%, 85%); border-radius:5px;"
        title="相关信息"
      ></lg-header>
      <div></div>
      <input class="list" type="button" value="紧急联系人 " />
      <input class="loginButton" type="button" value="联系人关系 :" />
      <span class="call">儿子</span>
      <input class="loginButton" type="button" value="联系人电话 :" />
      <span class="call">17816110557</span>
      <!-- //这个是点击这个链接调用客户端发，需要手动 -->
      <!-- <a href="mailto:444794227@qq.com">这个好像必须要点击这个链接</a> -->
      <div
        style="background:linear-gradient(to left,#efefef,#b6b6b6,#efefef);height:1px; margin:5px"
      ></div>
      <input class="list" type="button" value="健康信息 " />
      <input class="loginButton" type="button" value="每分钟心跳 :" />
      <span class="call">{{parseInt (this.rate)}}次/分钟</span>
      <input class="loginButton" type="button" value="健康状态 :" />
      <span class="call">正常</span>
      <div
        style="background:linear-gradient(to left,#efefef,#b6b6b6,#efefef);height:1px; margin:5px"
      ></div>
      <input class="list" type="button" value="环境状态 " />
      <input class="loginButton" type="button" value="温度:" />
      <span class="call">28 °C</span>
      <input class="loginButton" type="button" value="湿度 :" />
      <span class="call">60% RH</span>
    </div>
  </div>
</template>

<script>
import { Divider } from 'vant';
export default {
  data () {
    return {
       rate:60
    }
  },
  mounted(){
    var _this=this;

   function getHeartrate()
   {
         var x = Math.random();
         var y;
         var x = Math.random();
         var y;
         if(x < 0.05)
	       y = 50 + Math.random()*10;
         else if(x > 0.95)
	       y = 100 + Math.random()*10;
         else
         y = 60 + Math.random()*40;

         _this.rate=y;
          if(y<55)
         alert("老人心率过低，请注意")
         if(y>100)
         alert("老人心率过高，请注意")


   }
    getHeartrate();
    setInterval(getHeartrate, 1000 * 10); //每隔30s执行一次
  },
  methods: {


  },
  components: {
    [Divider.name]: Divider,
    name: 'Friends'
  }
}
</script>

<style scoped>
.friend {
  margin: 0;
  padding: 0;
  font-size: 15px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.information {
  height: 100%;
}
.call {
  font-family: sans-serif;
  font-weight: 550;
  padding: 30px;
}
.list {
  display: block;
  margin: 0 auto;
  margin-top: 55px;

  width: 150px;
  height: 30px;
  font-size: 15px;
  color: rgb(12, 0, 0); /* 按钮字体颜色 */
  border: 0; /* 删除按钮边框 */
  border-radius: 10px; /* 按钮圆角边 */
  border-block-color: rgb(143, 143, 204);
  background-image: linear-gradient(
    to right,
    hsl(315, 51%, 85%) 30%
  ); /* 按钮颜色 */
}
.loginButton {
  margin-top: 30px; /* 按钮顶部与输入框的距离 */
  margin-left: 55px;
  width: 130px;
  height: 25px;
  color: white; /* 按钮字体颜色 */
  border: 0; /* 删除按钮边框 */
  border-radius: 10px; /* 按钮圆角边 */
  background-image: linear-gradient(
    to right,
    #e0c0ee 10%,
    #c591dd 30%
  ); /* 按钮颜色 */
}
</style>