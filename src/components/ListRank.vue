<template>
  <div class="list-rank">
    <div class="list-head">
      <span class="title">{{listRank.title}}</span>
      <a class="more">更多&gt;</a>
    </div>
    <ul class="book-list">
      <!--<li v-for="(book,bookIndex) in listRank.books">-->
        <!--<a href="" class="type">[{{book.type}}]</a>-->
        <!--<strong class="hot-box">-->
          <!--<a href="" class="book">{{book.name}}</a>-->
          <!--<span class="hot" v-if="book.isHot"></span>-->
        <!--</strong>-->
        <!--<a href="" class="author">{{book.author}}</a>-->
      <!--</li>-->
      <li class="top">
        <div class="rank-num">
          <span v-if="!(listRank.msgType==='xuanhuang')">NO.1</span>
          <span v-if="listRank.msgType==='xuanhuang'">{{listRank.type}}</span>
        </div>
        <p class="book-name"><a href="">{{listRank.name}}</a></p>
        <p class="month-tk" v-if="!(listRank.msgType==='xuanhuang')"><span>{{listRank.ticket}}</span>{{listRank.rankType}}</p>
        <p class="month-tk nabook" v-if="(listRank.msgType==='xuanhuang')"><span>{{listRank.ticket}}</span> · {{listRank.rankType}}</p>
        <p class="bottom-box">
          <span class="type" v-if="!(listRank.msgType==='xuanhuang')">{{listRank.type}}</span>
          <span v-if="!(listRank.msgType==='xuanhuang')">·</span>
          <span class="author">{{listRank.author}}</span>
        </p>
        <div class="book-img">
          <a href="">
            <img v-bind:src="listRank.img" alt="">
          </a>
          <span></span>
        </div>
      </li>
      <li v-for="(book,index) in listRank.books">
        <p class="book-name">
          <span v-bind:class="{'rank-num2':index===0,'rank-num3':index===1,'rank-num4':index>1}">{{index + 2}}</span>
          <a href="">{{book.name}}</a>
          <span class="month-tk2">{{book.ticket}}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'ListRank',
        props: ['listRank']
    }
</script>


<style scoped>
  .list-rank{width: 100%;}
  .list-head{margin-bottom: 5px;}
  .title{font-size: 18px; font-weight: bold; color: #1a1a1a;}
  .book-list>li{width: 216px; height: 31px;  font-size: 14px; border-top: 1px solid #e6e6e6; position: relative;   display: inline-block;}
  .book-list>li>p>a{font-size: 14px;}
  .book-list>li.top{height: 114px;padding-top:10px;}
  .book-list>li:first-child{border-top: 1px solid #000;}
  .book-list>li>a:hover{color: #ed4259;}
  .book-list>li>strong>a:hover{color: #ed4259;}
  .rank-num{width: 36px;  height: 18px;  margin-bottom: 3px;  text-align: center;  color: #fff;  background: #bf2c24; font-size: 14px;}
  .rank-num2{    color: #fff;  background: #e67225;width: 16px;  height: 16px;  margin-top: 8px;  text-align: center;  letter-spacing: -1px; display: inline-block; }
  .rank-num3{    color: #fff;  background: #e6bf25;width: 16px;  height: 16px;  margin-top: 8px;  text-align: center;  letter-spacing: -1px; display: inline-block; }
  .rank-num4{    color: #666;  background: #ededed;width: 16px;  height: 16px;  margin-top: 8px;  text-align: center;  letter-spacing: -1px; display: inline-block; }
  .book-img{  display: block;  position: absolute;  top: 10px;  right: 10px;  width: 52px;  height: 91px;  z-index: 4;  transform: perspective(60px) rotateY(-10deg);
  }
  .book-img>a{    transform: translateZ(50px);display: block; z-index: 10;  }
  .book-img>a:after{    position: absolute;  z-index: 2;  top: 2%;  left: 100%;  width: 10%;  height: 92%;  content: ' ';  -webkit-transform: perspective(60px) rotateY(30deg);  -moz-transform: perspective(60px) rotateY(30deg);
    transform: perspective(60px) rotateY(30deg);  background-color: #efefef;  box-shadow: inset 0 0 5px #333; }
  .book-img>span{    position: absolute;  z-index: -1;  top: 84.1%;  left: 7px;  width: 20px;  height: 10px;  content: '';
    -webkit-transform: perspective(74px) rotateX(-70deg) rotateY(-5deg);  -moz-transform: perspective(74px) rotateX(-70deg) rotateY(-5deg);  -ms-transform: scale(0);  transform: perspective(74px) rotateX(-70deg) rotateY(-5deg);  box-shadow: 25px 0 5px 5px #adadad;}
  .book-img>a>img{width: 52px;  height: 87px;}
  .book-name{font-size: 16px;   }
  .book-name>a:hover{color: #bf2c24;}
  .month-tk{color: #bf2c24; padding-top: 3px; margin-bottom: 4px;}
  .month-tk>span{font-size: 18px;}
  .nabook>span{font-size: 12px;}
  .month-tk2{float: right;  overflow: hidden;  width: 72px;  text-align: right;  white-space: normal;  text-overflow: ellipsis;  color: #b3b3b3;  font-size: 12px;  line-height: 31px;}
  .bottom-box{color: #a6a6a6; font-size: 12px;}



</style>
