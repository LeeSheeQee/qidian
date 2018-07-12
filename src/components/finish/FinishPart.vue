<template>
  <div>
    <div class="part" v-for="part in msg">
      <div class="part-img">
        <a href=""><img v-bind:src="part.img" alt=""></a>
        <span class="part-score">{{part.score}}</span>
      </div>
      <div class="part-content">
        <p class="part-title">
          <a href="">{{part.name}}</a>
        </p>
        <p class="part-box">
          <img src="../../assets/user.f22d3.png" alt="">
          <a href="" class="part-author">{{part.author}}</a>
          <a href="" class="part-type">{{part.type}}</a>
          <span>{{part.state}}</span>
        </p>
        <p class="part-des">{{part.des}}</p>
        <p class="update-box">
          <a href="" class="part-update">最新更新&nbsp;&nbsp;{{part.update}}</a>

          <span class="part-time">·&nbsp;&nbsp;{{part.time}}</span>
        </p>
        <div class="part-info">
          <div class="part-price">
            <p>{{part.priceNow|RMB}}</p>
            <s>{{part.price|RMB}}</s>
          </div>
          <a class="part-read">免费阅读</a>
          <a class="part-join">加入书架</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'FinishPart',
        props: ['msg']
    }
</script>


<style scoped>
  .part{width: 954px; height: 188px;  position: relative; border-top: 1px solid #e6e6e6;  padding-top: 25px;}
  .part:first-child{padding-top: 0; border-top: 1px solid #fff;}
  .part-img{width: 102px; height: 136px;  margin-right: 16px; float: left;  overflow: hidden; position: relative;}
  .part-score{font-size: 14px;  line-height: 14px;  color: #fff;  background-color: #ed4259;  position: absolute; bottom: 0;  left: 0; padding: 0 3px 0 2px;  border-radius: 0 5px 0 0;}
  .part-img>a>img{width: 100%;  height: auto;  -webkit-transition: transform 0.5s;  -moz-transition: transform 0.5s;  -ms-transition: transform 0.5s;  -o-transition: transform 0.5s;  transition: transform 0.5s;}
  .part-img>a>img:hover{  -webkit-transform: scale(1.2);  -moz-transform: scale(1.2);  -ms-transform: scale(1.2);  -o-transform: scale(1.2);  transform: scale(1.2);}
  .part-content{width: 542px; height: 133px; padding-top: 3px;  float: left;}
  .part-title{font-size: 18px;  height: 24px; line-height: 24px;  margin-bottom: 8px; width: 100%;  overflow: hidden;}
  .part-title>a{color: #262626;}
  .part-title>a:hover{color: #ed4259;}
  .part-box{height: 16px; line-height: 16px; overflow: hidden;  margin-bottom: 6px; font-size: 12px; color: #a6a6a6;}
  .part-box>img{width: 14px;  height: 14px; vertical-align: middle;}
  .part-author,.part-type{font-size: 12px; color: #a6a6a6;}
  .part-type{border-left: 1px solid #e6e6e6; border-right: 1px solid #e6e6e6; padding: 0 5px; margin: 0 5px;}
  .part-author:hover{color: #262626; }
  .part-type:hover{color: #ed4259;}
  .part-des{width: 100%;  height: 48px; overflow: hidden; font-size: 14px;  line-height: 24px;  margin-bottom: 8px; color: #666;}
  .update-box{ height: 22px;}
  .part-update{font-size: 12px; color: #3f5a93; display: inline-block;  width: 222px; overflow: hidden; height: 22px; line-height: 22px;  vertical-align: middle;}
  .part-update:hover{color: #2972cc;}
  .part-time{font-size: 12px; color: #b5b5b5; line-height: 22px;  display: inline-block;  vertical-align: middle;}
  .part-info{width: 230px;  height: 136px;  position: absolute; top: 0; right: 0; padding-top: 5px; text-align: right;}
  .part-price{ padding-top: 35px;  text-align: right;  height: 100px;}
  .part-price>p{font-size: 18px;  line-height: 24px;  font-weight: bold; color: #262626;  margin-bottom :5px;}
  .part-price>s{color: #a6a6a6; font-size: 12px;}
  .part-read,.part-join{display: inline-block;  width: 98px;  height: 32px; line-height: 32px;  font-size: 14px;  text-align: center; cursor: pointer;
    -webkit-transition: color 0.3s, background-color 0.3s;
    -moz-transition: color 0.3s, background-color 0.3s;
    -ms-transition: color 0.3s, background-color 0.3s;
    -o-transition: color 0.3s, background-color 0.3s;
    transition: color 0.3s, background-color 0.3s;}
  .part-read{background: #bf2c24; border: 1px solid #bf2c24;  color: #fff;  margin-right: 24px;}
  .part-read:hover{background-color: #ED4259;}
  .part-join{color: #3f5a93;  border: 1px solid #3f5a93;}
  .part-join:hover{background-color: #F0F5FF; border-color: #2972CC;  }




</style>
