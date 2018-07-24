<template>
  <div class="fan">
    <ul>
      <li v-for="(fan, index) in msg" v-if="index < 3">
        <div class="fans-num" >
          <div v-bind:class="{'red': index===0,'origin': index === 1, 'yellow': index === 2}">{{fan.rank}}</div>
        </div>
        <div class="fans-msg">
          <a href="">{{fan.name}}</a>
          <p>{{fan.exp}}粉丝值</p>
        </div>
        <div class="fans-img">
          <a href="">
            <img v-bind:src="fan.img" alt="">
          </a>
          <div></div>
        </div>
        <div class="clear"></div>
      </li>
      <li  v-for="(fan, index) in msg" v-if="index > 2">
        <div class="fans-num">
          <div>{{fan.rank}}</div>
        </div>
        <div class="fans-msg2">
          <a href="">{{fan.name}}</a>
        </div>
        <div class="fans-right">
          <p>{{fan.exp}}</p>
        </div>
        <div class="clear"></div>
      </li>

    </ul>
  </div>
</template>

<script>
    export default {
        name: 'FansRank',
        props: ['msg']
    }
</script>


<style scoped>
  .fan{width: 100%;}
  .fans>ul>li{border-top: 1px solid #e6e6e6; padding: 5px 0 7px 0;}
  .fans-num{float: left;  width: 28px;  height: 32px;}
  .fans-num>div{width: 16px;  height: 16px; line-height: 16px;   margin: 8px 8px 0 0;  text-align: center; font-weight: bold;  font-size: 14px; color: #666; background-color: #ededed;}
  .fans-num>div.red{background-color: #bf2c24; color: #fff;}
  .fans-num>div.origin{background-color: #e67225; color: #fff;}
  .fans-num>div.yellow{background-color: #e6bf25; color: #fff;}
  .fans-msg{float: left;}
  .fans-msg>a{display: block; width: 160px; height: 22px; font-size: 14px;  line-height: 22px;  overflow: hidden; color: #262626;}
  .fans-msg>a:hover{color: #ed4259;}
  .fans-msg>p{height: 22px; color: #a6a6a6; overflow: hidden; font-size: 12px;  line-height: 22px;}
  .fans-img{float: right; width: 34px;  height: 34px; position: relative;}
  .fans-img>a>img{width: 100%;  height: 100%; border-radius: 50%;}
  .fans-img>div{width: 30px;  height: 16px; background: no-repeat url('../../assets/common_sprite.005cf.png') -258px -162px; position: absolute; bottom: -8px; left: 3px;}
  .fans-msg2{float: left; width: 150px; height: 31px; overflow: hidden; font-size: 14px;  line-height: 32px;  color: #1a1a1a;}
  .fans-right{width: 48px; overflow: hidden; font-size: 12px; line-height: 32px;  color: #b3b3b3; height: 32px;   text-align: right;}
  .fans-msg2>a:hover{color: #ed4259;}

</style>
