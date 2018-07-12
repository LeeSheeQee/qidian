<template>
  <div class="free">
    <div class="free-box"  v-for="(message,index) in msg" v-bind:class="{'bg1': index%2===0, 'bg2': index%2!==0}">
      <div class="free-img">
        <a href="">
          <img v-bind:src="message.img" v-bind:alt="message.name">
          <span class="score">{{message.score}}</span>
        </a>

      </div>
      <a class="free-name">{{message.name}}</a>
      <p class="price"><s>{{message.cost}}</s></p>
      <a class="read">免费阅读</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'FreeRead',
        props: ['msg']
    }
</script>


<style scoped>
  .free-box{width: 171px; height: 222px;  float: left;  text-align: center;  -webkit-transition: box-shadow .5s;  -moz-transition: box-shadow .5s;  -ms-transition: box-shadow .5s;  -o-transition: box-shadow .5s;  transition: box-shadow .5s;  border:1px solid #fcfcfa;}
  .free-box:hover{  -webkit-box-shadow: 0 5px 16px #d9d4c7;  -moz-box-shadow: 0 5px 16px #d9d4c7 ;  box-shadow: 0 5px 16px #d9d4c7;}
  .bg1{ background: #fcfcfa;}
  .bg2{background: #f7f6f2;}
  .free-img{width: 100%;  height: 88px; text-align: center; margin-top: 20px; margin-bottom: 10px;  }
  .score{position: absolute;  left: 0;  bottom: 0; background: #ed4259; color: #fff;  padding: 0 3px 0 2px; border-radius: 0 5px 0 0; font-size: 12px;}
  .free-img>a>img{width: 66px;  height: auto;  -webkit-transition: transform 1s;  -moz-transition: transform 1s;  -ms-transition: transform 1s;  -o-transition: transform 1s;  transition: transform 1s; }
  .free-img>a{display: block; width: 66px;  height: 88px; overflow: hidden; margin: 0 auto; position: relative;}
  .free-img>a>img:hover{  -webkit-transform: scale(1.2);  -moz-transform: scale(1.2);  -ms-transform: scale(1.2);  -o-transform: scale(1.2);  transform: scale(1.2);}
  .free-name{font-size: 16px; line-height: 21px; width: 100%; overflow: hidden; color: #1a1a1a; height: 21px; display: block; cursor: pointer;}
  .free-name:hover{color:#ed4259;}
  .price{font-size: 12px; color:#999; height: 14px; line-height: 14px;  margin: 8px 0; width: 100%; overflow: hidden;}
  .read{width: 88px;  height: 30px; display: block; margin: 0 auto; border: 1px solid #3F5A93; color: #3f5a93;  line-height: 30px; border-radius: 15px; cursor: pointer;}
  .read:hover{color: #2972cc;}

</style>
