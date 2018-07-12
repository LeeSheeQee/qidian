<template>
  <div class="all-content">
    <div class="all-title">
      <SearchTitle @showChange="getShow" v-bind:num="boxNum"></SearchTitle>
    </div>
    <AllPart v-bind:books="bookMsg" v-show="!boxShow"></AllPart>
    <AllList v-bind:book="listMsg" v-show="boxShow" v-on:click="GetList()"></AllList>
    <ul id="navigator">
      <li>
        <a href=""> <font-awesome-icon :icon="['fas','chevron-left']"/></a>
      </li>
      <li class="active">
        <a href="">1</a>
      </li>
      <li>
        <a href="">2</a>
      </li>
      <li>
        <a href="">3</a>
      </li>
      <li>
        <a href="">4</a>
      </li>
      <li>
        <a href="">5</a>
      </li>
      <li class="navigator-more">
       ...
      </li>
      <li>
        <a href="">4870</a>
      </li>
      <li>
        <a href=""> <font-awesome-icon :icon="['fas','chevron-right']"/></a>
      </li>
      <li class="navigator-jump">
        <input type="text" value="1">
      </li>
      <li>
        <a href="">GO</a>
      </li>
    </ul>
  </div>
</template>

<script>
    import SearchTitle from '@/components/all/SearchTitle'
    import AllPart from '@/components/all/AllPart'
    import AllList from '@/components/all/AllList'
    export default {
        name: 'AllContent',
        data() {
          return {
            bookMsg: [],
            listMsg: [],
            boxShow: false,
            boxNum: 1
          }
        },
        created() {
          this.GetBookMsg();
        },
        mounted() {
        },
        components: {
          SearchTitle,
          AllPart,
          AllList
        },
        methods: {
          GetBookMsg() {
//        获取本周数据推荐信息
            this.axios({
              method: 'get',
              url: 'http://localhost:8080/static/all.json'
            }).then(response => {
              this.bookMsg = response['book'];
              this.boxShow = false;
              this.boxNum = 1;
            })
          },
          GetList() {
            this.axios({
              method: 'get',
              url: 'http://localhost:8080/static/all.json'
            }).then(response => {
              this.listMsg = response['book'];
              this.boxShow = true;
              this.boxNum = 2;
            })
          },
          getShow(data) {
            if(data === 1) {
              this.GetBookMsg();
            }else if(data === 2) {
              this.GetList();
            }
          }
        }
    }
</script>


<style scoped>
  .all-content{width: 100%; }
  .all-title{margin-bottom: 24px;}
  #navigator{float: right;  height: 24px;}
  #navigator>li{float:left; height: 24px; min-width: 24px; text-align: center; line-height: 24px;  font-size: 14px;  border: 1px solid transparent; margin-right: 10px; cursor: pointer;}
  #navigator>li:hover{border: 1px solid #ed4259;}
  #navigator>li:hover>a{color: #ed4259;}
  #navigator>li.active{background-color: #ed4259; border: 1px solid #ed4259; }
  #navigator>li.active>a{color: #fff;}
  #navigator>li>a{font-size: 14px;  color: #262626; padding: 0 5px;}
  #navigator>.navigator-jump{width: 60px;}
  #navigator>.navigator-jump:hover{border: 1px solid transparent;}
  #navigator>.navigator-more:hover{border: 1px solid transparent;}
  .navigator-jump>input{width: 60px;  }
</style>
