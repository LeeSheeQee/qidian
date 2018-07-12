<template>
  <div class="main">
    <p class="title">{{msg.type1}}<i v-if="msg.show">·</i>{{msg.type2}}<b v-bind:class="msg.bg"></b></p>
    <ul class="book-list">
      <li v-for="bookMsg in msg.list">
        <a class="type">[{{bookMsg.type}}]</a>
        <a href="" class="name">{{bookMsg.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'HotBookList',
        props: ['msg'],
        mounted() {

        }
    }
</script>


<style scoped>
  .title{font-size: 18px; font-weight: bold; line-height: 24px;  height: 25px; margin-bottom: 5px;  color: #1a1a1a; position: relative}
  .title>b{ position: absolute;   top: -5px;  right: -6px;  background-image: url('../assets/home/hot.png'); z-index: 200;}
  .bg1{ background-position: 0 -206px; width: 41px;  height: 39px;}
  .bg2{ background-position: 0 -167px; width: 45px;  height: 39px;}
  .bg3{ background-position: 0 0; width: 46px;  height: 36px;}
  .bg4{ background-position: 0 -76px;width: 47px;  height: 43px;}
  .bg5{ background-position: 0 -245px; width: 52px;  height: 42px;}
  .bg6{ background-position: 0 -119px; width: 57px;  height: 46px;}
  .bg7{ background-position: 0 -36px;width: 52px;  height: 40px;}
  .title>i{margin: 0 5px;}
  .book-list{border-top: 1px solid #666;}
  .type{font-size: 14px;      overflow: hidden;  width: 56px;  height: 32px;  margin-right: 5px;  color: grey;  line-height: 32px;}
  .name{font-size: 14px;  color: #1a1a1a; height: 32px; line-height: 32px;  max-width: 168px; overflow: hidden;}
</style>
