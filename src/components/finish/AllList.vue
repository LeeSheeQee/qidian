<template>
  <div>
    <ul class="list">
      <li>
        <ul class="list-title">
          <li class="list-type">类别</li>
          <li class="list-name">小说书名</li>
          <li class="list-chapter">最新章节</li>
          <li class="list-words">字数</li>
          <li class="list-author">小说作者</li>
          <li class="list-time">更新时间</li>
        </ul>
        <ul class="list-content" v-for="b in book">
          <li class="list-type">
            <a href="">[{{b.type}}]</a><span>·</span><a href="">[{{b.tag}}]</a>
          </li>
          <li class="list-name">
            <a href="">{{b.name}}</a>
          </li>
          <li class="list-chapter">
            <a href="">{{b.article}}</a>
          </li>
          <li class="list-words">
            <a href="">{{b.words}}万字</a>
          </li>
          <li class="list-author">
            <a href="">{{b.author}}</a>
          </li>
          <li class="list-time">
            <a href="">{{b.update}}</a>
          </li>
        </ul>
      </li>
    </ul>
    <div class="clear"></div>
  </div>
</template>

<script>
    export default {
        name: 'AllList',
        props: ['book']
    }
</script>


<style scoped>
  .list{width: 100%;  margin-bottom: 40px;}
  .list-title{width: 100%;  height: 20px;}
  .list-title>li{font-size: 12px; color: #262626; font-weight: bold;  line-height: 20px;  overflow: hidden;}
  .list-type{ width: 144px; color: gray;}
  .list-name{width: 164px;}
  .list-chapter{width: 318px;}
  .list-words{width: 86px;}
  .list-author{width: 115px;}
  .list-type>a{color:gray;}
  .list-name>a:hover{color: #ed4259;}
  .list-type>a:hover{color: #ed4259;}
  .list-chapter>a{color: #666;}
  .list-chapter>a:hover{color: #262626;}
  .list-words>a{color: #999;}
  .list-author>a{color: #999;}
  .list-author>a:hover{color: #262626;}
  .list-time>a{color: #666;}
  .list-time{width: 127px;  text-align: right;}
  .list-content{width: 100%;  height: 41px;}
  .list-title>li{float: left; height: 20px;}
  .list-content>li{float: left; height: 41px; overflow: hidden; line-height: 40px;  font-size: 14px; border-bottom: 1px solid #e6e6e6;}
  .list-content:hover{background: #F7F6F2;}

</style>
