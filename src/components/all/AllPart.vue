<template>
  <div>
    <ul class="books">
      <li v-for="book in books">
        <div class="book-img">
          <a href="">
            <img v-bind:src="book.img" alt="">
          </a>
        </div>
        <div class="book-content">
          <p class="book-name">
            <a href="">{{book.name}}</a>
          </p>
          <p class="book-msg">
            <img src="../../assets/user.f22d3.png" alt="">
            <a href="" class="book-author">{{book.author}}</a>
            <span>|</span>
            <a href="" class="book-type">{{book.type}}</a>
            <span>·</span>
            <a href="" class="book-tag">{{book.tag}}</a>
            <span class="book-state">{{book.state}}</span>
          </p>
          <p class="book-des">{{book.des}}</p>
          <p class="book-word">{{book.words}}万字</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'AllPart',
        props: ['books']
    }
</script>


<style scoped>
  .books>li{float: left;  width: 477px; height: 188px;  overflow: hidden; border-top: 1px solid #e6e6e6;  padding-top: 25px;}
  .books>li:first-child{border-top: 1px solid transparent;  padding-top: 0; height: 166px;}
  .books>li:nth-child(2){border-top: 1px solid transparent; padding-top: 0; height: 166px;}
  .book-img{width: 102px; height: 136px;  float: left;  margin-right: 16px; overflow: hidden;  }
  .book-img:hover img{  -webkit-transform: scale(1.2);  -moz-transform: scale(1.2);  -ms-transform: scale(1.2);  -o-transform: scale(1.2);  transform: scale(1.2);}
  .book-img img{width: 100%;  height: auto;  -webkit-transition: transform 0.5s;  -moz-transition: transform 0.5s;  -ms-transition: transform 0.5s;  -o-transition: transform 0.5s;  transition: transform 0.5s; }
  .book-content{float: left;  width: 344px;}
  .book-name{height: 24px;  line-height: 24px;  overflow: hidden; width: 100%;  margin-bottom: 8px;}
  .book-name>a{font-size: 18px; color: #262626; }
  .book-name>a:hover{color: #ed4259;}
  .book-msg{font-size: 12px;  height: 16px; line-height: 16px;  margin-bottom: 6px; width: 100%;  overflow: hidden; color: #a6a6a6;}
  .book-msg>a{color: #a6a6a6; margin: 0 3px;}
  .book-msg>a:hover{color: #ed4259;}
  .book-msg>a.book-author:hover{color: #000;}
  .book-msg>img{width: 14px;  height: 14px; vertical-align: bottom;}
  .book-des{font-size: 14px;  color: #666;  height: 48px; width: 100%;  line-height: 24px;  overflow: hidden; text-overflow: ellipsis;display: -webkit-box;  -webkit-box-orient: vertical;  -webkit-line-clamp: 2;  margin-bottom: 8px;}
  .book-word{font-size: 12px; line-height: 22px;  height: 22px; overflow: hidden; color: #a6a6a6;}

</style>
