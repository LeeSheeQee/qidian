<template>
  <div class="list">
    <div class="list-head">
      <span class="title">{{list.title}}</span>
      <a class="more">更多&gt;</a>
    </div>
    <ul class="book-list">
      <li v-for="book in list.books">
        <a href="" class="type">[{{book.type}}]</a>
        <strong class="hot-box">
          <a href="" class="book">{{book.name}}</a>
          <span class="hot" v-if="book.isHot"></span>
        </strong>
        <a href="" class="author">{{book.author}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: 'List',
      props: ['list'],
    }
</script>


<style scoped>
  .list{width: 216px;}
  .list-head{margin-bottom: 5px;}
  .title{font-size: 18px; font-weight: bold; color: #1a1a1a;}
  .book-list>li{width: 216px; height: 31px; font-size: 14px; border-top: 1px solid #e6e6e6; position: relative;}
  .book-list>li:first-child{border-top: 1px solid #000;}
  .book-list>li>a:hover{color: #ed4259;}
  strong{list-style: none; font-weight: normal}
  .book-list>li>strong>a:hover{color: #ed4259;}
  .type{color: gray; line-height: 30px; width: 56px;  float: left}
  .book{max-width: 100px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: #000; line-height: 30px; float: left; }
  .author{color: #b3b3b3; line-height: 30px; position: absolute;  top: 0; right: 0; width: 64px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-align: right}
  .more{font-size: 12px; color: blue; opacity: 0; cursor: pointer;  margin-left: 5px;}
  .list:hover .more{opacity: 1;}
  .hot-box{position: relative;}
  .hot{width: 17px; height: 9px; display: block; position: absolute; right: -17px; top: 2px; background: no-repeat url('../assets/tag.7a994.png') 0 -24px;}

</style>
