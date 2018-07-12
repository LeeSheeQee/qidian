<template>
  <div class="update-book">
    <div class="update">
      <div class="box" v-for="message in msg">
        <div class="box-out">
          <div class="box-img">
            <a href="">
              <img v-bind:src="message.img" v-bind:alt="message.name">
            </a>
            <span></span>
          </div>
          <div class="box-des">
            <a href="" class="box-name">{{message.name}}</a>
            <p><span class="box-num">{{message.number}}</span> ·<span class="box-score">{{message.score}}</span>分</p>
            <a href="" class="box-author">{{message.author}}</a>
          </div>
        </div>
        <p class="box-article">{{message.des}}</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'UpdateBook',
        props: ['msg']
    }
</script>


<style scoped>
  .update-book{width: 216px; background-color: #f7f5f0; }
  .update{width: 100%;  padding: 0 12px;}
  .box{width: 100%;  height: 211px;   border-bottom: 1px solid #E6E6E6;}
  .box:last-child{border-bottom: 1px solid transparent;}
  .box-out{padding: 25px 0 12px 0;  width: 100%;  height: 126px;  margin-bottom: 10px;}
  .box-img{width: 50px; float: left;     position: relative;  z-index: 4;  height: 91px;  margin-top: -3px;  margin-right: 8px;  text-align: center;     transform: perspective(60px) rotateY(-10deg);}
  .box-img:after{    position: absolute;  z-index: 2;  top: 2%;  left: 100%;  width: 10%;  height: 92%;  content: ' ';  -webkit-transform: perspective(60px) rotateY(30deg);  -moz-transform: perspective(60px) rotateY(30deg);  transform: perspective(60px) rotateY(30deg);  background-color: #efefef;  box-shadow: inset 0 0 5px #333;}
  .box-img>span{    position: absolute;  z-index: 1;  top: 84.1%;  left: 7px;  width: 20px;  height: 10px;  content: '';  -webkit-transform: perspective(74px) rotateX(-70deg) rotateY(-5deg);  -moz-transform: perspective(74px) rotateX(-70deg) rotateY(-5deg);  -ms-transform: scale(0);  transform: perspective(74px) rotateX(-70deg) rotateY(-5deg);  box-shadow: 25px 0 5px 5px #adadad;}
  .box-des{width: 132px;  float: right; text-align: right; margin-top: 22px;}
  .box-img>a{  position: relative;  z-index: 10;  display: inline-block;  transform: translateZ(50px);  }
  .box-img>a>img{    width: 52px;  height: 87px;  }
  .box-name{font-size: 16px;  color: #1a1a1a; height: 24px; overflow: hidden; width: 100%;  display: block;}
  .box-des>p{color: #bf2c24;  font-size: 12px;  padding: 3px 0 ;}
  .box-name{line-height: 20px;}
  .box-author{display: block; font-size: 12px;  color:#a6a6a6;}
  .box-article{font-size: 12px; color: #666;  height: 60px; overflow: hidden;}
</style>
