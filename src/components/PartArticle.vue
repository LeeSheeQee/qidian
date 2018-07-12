<template>
  <div class="part-article">
    <div class="update-head">
      <a class="update-all" v-on:click="change('all')" v-bind:class="{'active': all}">全部</a>
      <span>·</span>
      <a class="update-free" v-on:click="change('free')" v-bind:class="{'active': free}">免费</a>
      <span>·</span>
      <a class="update-vip" v-on:click="change('vip')" v-bind:class="{'active': vip}">VIP</a>
      <span>|</span>
      <a href="" class="more">更多 &gt;</a>
    </div>
    <ul class="update">
      <li v-for="book in msg" v-bind:class="{'is-vip': book.vip,'is-free': !book.vip}" ref="lis">
        <ul class="update-content">
          <li class="update-type">
            <a href="">[{{book.type}}]</a>
          </li>
          <li class="update-title">
            <a href="">{{book.name}}</a>
          </li>
          <li class="update-article">
            <a href="">{{book.article}}</a>
            <span class="vip" v-if="book.vip===true">vip</span>
          </li>
          <li class="update-author">
            <a href="">{{book.author}}</a>
          </li>
          <li class="update-time">{{book.time}}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'PartArticle',
        props: ['msg'],
        data() {
          return{
            all: true,
            free: false,
            vip: false,
            allShow: true,
            freeShow: false,
            vipShow: false
          }
        },
        mounted() {
        },
        methods: {
          change(msg) {
            let lis = this.$refs.lis;
            let c ;
            let re;
            let len = lis.length;
            if(msg === 'all') {
              for(let i = 0; i < len; i++) {
                lis[i].style.display = 'block';
              }
              this.free = false;
              this.vip = false;
              this.all = true;
            } else if(msg === 'free') {
              re = new RegExp('is-free');
              for(let i = 0; i < len; i++) {
               c = lis[i].getAttribute('class');
               if(re.test(c)){
                  lis[i].style.display = 'block';
               }else {
                  lis[i].style.display = 'none';
               }
              }
              this.free = true;
              this.vip = false;
              this.all = false;
            }else if( msg === 'vip') {
              re = new RegExp('is-vip');
              for(let i = 0; i < len; i++) {
                c = lis[i].getAttribute('class');
                if(re.test(c)){
                  lis[i].style.display = 'block';
                }else {
                  lis[i].style.display = 'none';
                }
              }
              this.free = false;
              this.vip = true;
              this.all = false;
            }
          }
      }
    }
</script>


<style scoped>
  /*最近更新*/
  .update-head{text-align: right; height: 29px; border-bottom: 1px solid #666;  font-size: 12px;  color: #a6a6a6;}
  .update-head>a{line-height: 29px;  color: #a6a6a6;  cursor: pointer;}
  .update-head>span{margin: 0 5px;}
  .update-head>a.more{color: #3f5a93;}
  .update-head>a.active{color: #ed4259; font-weight: bold;}
  .part-article{width: 100%;}
  .update{width: 100%;  margin: 0 15px;}
  .update>li{float: left; width: 100%;  height: 30px; border-bottom: 1px solid #ebebeb;}
  .update>li:last-child{border-bottom: 1px solid transparent;}
  .update-content>li{float: left; line-height: 30px;  height: 30px; overflow: hidden;}
  .update-type{width:68px;  overflow: hidden;}
  .update-type>a{color: gray; font-size: 14px; }
  .update-type>a:hover{color: #ed4259;}
  .update-title{width: 179px;}
  .update-title>a{color: #1a1a1a; font-size: 14px;}
  .update-title>a:hover{color: #ed4259; }
  .update-article{width: 285px;}
  .update-article>a{font-size: 12px;  color: #666;}
  .update-article>a:hover{color:  #1a1a1a;}
  .update-author{width: 106px;  overflow: hidden;}
  .update-author>a{font-size: 12px; color: #999;}
  .update-author>a:hover{color: #1a1a1a; }
  .update-time{width: 75px; overflow: hidden; color: #666;  font-size: 12px;  text-align: right}
  .vip{    color: #fff;  background: #FC6C28;  border-radius: 2px;  padding: 0 2px;  font-size: 12px;}
</style>
