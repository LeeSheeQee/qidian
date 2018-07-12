<template>
  <div >
    <ul class="search">
      <li class="active">
        <a href="" >人气排行</a>
        <font-awesome-icon :icon="['fas','arrow-down']"/>
      </li>
      <li>
        <a href="">更新时间</a>
      </li>
      <li>
        <a href="">总收藏</a>
      </li>
      <li>
        <a href="">总字数</a>
      </li>
      <li v-on:click="show('vip')" class="lis">
        <a>会员点击</a>
        <span class="triangle"></span>
        <ul class="vip-click" v-show="vip">
          <li>
            <a href="">会员周点击</a>
          </li>
          <li>
            <a href="">会员月点击</a>
          </li>
          <li>
            <a href="">会员总点击</a>
          </li>
        </ul>
      </li>
      <li  v-on:click="show('ticket')" class="lis">
        <a>推荐票</a>
        <span class="triangle"></span>
        <ul class="vip-click" v-show="ticket">
          <li>
            <a href="">周推荐票</a>
          </li>
          <li>
            <a href="">月推荐票</a>
          </li>
          <li>
            <a href="">总推荐票</a>
          </li>
        </ul>
      </li>
      <li class="see">
        <a>
          <input type="checkbox" id="c1"><label for="c1">只看三个月内新书</label>
        </a>
      </li>
      <li id="change">
        <span  v-on:click="changeList(1)" v-bind:class="[num===1?'active':'']"><font-awesome-icon :icon="['fas','th-large']"/></span>
        <span v-on:click="changeList(2)" v-bind:class="[num===2?'active':'']"><font-awesome-icon :icon="['fas','th']"/></span>
      </li>
      <li class="search-right">
        <a>共 <span class="book-num">950268</span> 本相关作品</a>
        <div class="ask">?
          <div class="ask-msg">
            <span></span>
            由于政策和内容原因部分作品未能显示
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'SearchTitle',
        props:['num'],
        data() {
          return {
            vip: false,
            ticket: false
          }
        },
        mounted() {
          this.SearchHide();
        },
        methods: {
          show(msg) {
            if(msg === 'vip'){
              this.vip = true;
              this.ticket = false;
            }else if(msg === 'ticket') {
              this.vip = false;
              this.ticket = true;
            }
          },
          SearchHide( ) {
            let that = this;
            let lis = document.querySelectorAll('.lis');

            for(let i = 0; i < lis.length; i++ ){
              lis[i].addEventListener('click',function (event) {
                event.stopPropagation();
              })
            }
            document.addEventListener('click',function () {
              that.vip = false;
              that.ticket = false;
            })
          },
          changeList(msg) {
            this.$emit('showChange', msg);
          }
        }
    }
</script>


<style scoped>
  .search{width: 954px; padding: 0 12px;  background-color: #f7f6f2;  height: 40px;}
  .search>li{height: 40px;  float: left; position: relative; padding: 0 10px; margin-right: 10px; font-size: 12px; cursor: pointer;}
  .search>li>a{color: #a6a6a6;  font-size: 12px;  line-height: 40px;  text-align: center;}
  .search>li.active{color: #ed4259;}
  .search>li.active>a{color: #ed4259; font-weight: bold;}
  .search>li>a:hover{color: #ed4259;}
  .triangle{width: 0;  height: 0; border-top: 4px solid #a6a6a6;  border-left: 4px solid transparent; border-right: 4px solid transparent;  border-bottom: 4px solid transparent; position: absolute; top: 18px;  right: 0;}
  .vip-click{width: 100%; background-color: #fff; position: absolute; top: -120px; left: 0; z-index: 500;  -webkit-box-shadow: 0 2px 4px rgba(0,0,0,.2) ;  -moz-box-shadow: 0 2px 4px rgba(0,0,0,.2);  box-shadow: 0 2px 4px rgba(0,0,0,.2);}
  .vip-click>li{width: 100%;  height: 40px; text-align: center;}
  .vip-click>li>a{line-height: 40px; color: #a6a6a6;}
  .vip-click>li:hover>a{color: #ed4259;}
  .see>a>input{vertical-align: middle; }
  .see>a>label{ cursor: pointer;}
  .see>a>input:hover{color: #a6a6a6;}

  /*右侧*/
  .search>li.search-right{float: right;}
  .book-num{color: #262626;}
  .ask{width: 14px; height: 14px; display: inline-block;  border-radius: 50%; background-color: #bfbfbf;  font-size: 12px;  color: #fff;  text-align: center; position: relative}
  .ask-msg>span{width: 0;  height: 0; border-top: 8px solid #404040;  border-left: 8px solid transparent; border-right: 8px solid transparent;  border-bottom: 8px solid transparent; position: absolute; bottom: -15px;  left: 60px;}
  .ask-msg{position: absolute;  top: -48px; left: -60px;  color: #fff;  background-color: #000;  border-radius: 3px; width: 130px; padding-bottom: 5px;  display: none;}
  .ask:hover>.ask-msg{display: block;}
  #change{float: right; line-height: 40px;  color: #a6a6a6}
  #change>.active{color: #262626;}
  #change>span:last-child:hover{color: #666;}
  #change>span{padding: 0 5px;  font-size: 16px;}

</style>
