<template>
  <div>
    <div class="item" v-for="item in msg">
      <div class="img">
        <a href="">
          <img v-bind:src="item.img" alt="">
        </a>
        <span class="score">{{item.score}}</span>
      </div>
      <div class="content">
        <p class="title">
          <a href="">{{item.name}}</a>
        </p>
        <p class="box">
          <img src="../../assets/user.f22d3.png" alt="">
          <a href="" class="author">{{item.author}}</a>
        </p>
        <p class="des">{{item.des}}</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'FreeRight',
        props: ['msg']
    }
</script>


<style scoped>
  .item{width: 216px; height: 128px;  padding: 15px 0;  border-bottom: 1px solid #e6e6e6;}
  .img{width: 72px; height: 96px;float: left;  overflow: hidden; position: relative;}
  .score{font-size: 14px;  line-height: 14px;  color: #fff;  background-color: #ed4259;  position: absolute; bottom: 0;  left: 0; padding: 0 3px 0 2px;  border-radius: 0 5px 0 0;}
  .img>a>img{width: 100%;  height: auto;  -webkit-transition: transform 0.5s;  -moz-transition: transform 0.5s;  -ms-transition: transform 0.5s;  -o-transition: transform 0.5s;  transition: transform 0.5s;}
  .img>a>img:hover{  -webkit-transform: scale(1.2);  -moz-transform: scale(1.2);  -ms-transform: scale(1.2);  -o-transform: scale(1.2);  transform: scale(1.2);}
  .content{float: right;  width: 130px; height: 93px; overflow: hidden;}
  .title{font-size: 18px;  height: 24px; line-height: 24px;  margin-bottom: 8px; width: 100%;  overflow: hidden;}
  .title>a:hover{color: #ed4259;}
  .title>a{color: #262626; font-size: 16px;}
  .box{height: 16px; line-height: 16px; overflow: hidden;  margin-bottom: 6px; font-size: 12px; color: #a6a6a6;}
  .box>img{width: 14px;  height: 14px;  vertical-align: middle;}
  .author,.part-type{font-size: 12px; color: #a6a6a6;}
  .author:hover{color: #262626; }
  .des{width: 100%;  height: 40px; overflow: hidden; font-size: 12px;  line-height: 20px;  margin-bottom: 8px; color: #666;}
</style>
