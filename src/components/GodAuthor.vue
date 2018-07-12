<template>
  <div class="update-book">
    <div class="update" v-for="message in msg">
        <div class="box-out">
          <div class="box-des">
            <a href="" class="box-author">{{message.author}}</a>
            <p >{{message.lv}}</p>
            <div class="work">
              <p>代表作</p>
              <a v-for="work in message.works">{{work}}<span class="line">|</span></a>
            </div>
            <div class="box-img">
              <a href=""><img v-bind:src="message.img" v-bind:alt="message.author"></a>
            </div>
          </div>
        </div>
        <p class="box-article">{{message.des}}</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'GodAuthor',
        props: ['msg']
    }
</script>


<style scoped>
  .update-book{width: 216px; background-color: #f7f5f0; }
  .update{width: 100%;  padding: 0 12px;border-bottom: 1px solid #E6E6E6;}
  .box{width: 100%;  height: 211px;   }
  .box:last-child{border-bottom: 1px solid transparent;}
  .box-out{padding: 25px 0 12px 0;  width: 100%;  height: 126px;  margin-bottom: 10px;}
  .box-img{width: 60px; position: absolute; top: 0; right: 0;   height: 60px; border-radius: 50%; overflow: hidden;}
  .box-des{width: 100%;  float: left; position: relative;}
  .box-img>a{  position: relative;  z-index: 10;  display: inline-block;  transform: translateZ(50px);  }
  .box-img>a>img{  width: 60px; height: 60px; }

  .box-des>p{ font-size: 12px;  padding: 3px 0 ;}

  .box-author{display: block; font-size: 16px;  color:#1a1a1a;  height: 21px; font-weight: bold;  margin-bottom: 5px;}
  .box-article{font-size: 12px; color: #666;  height: 60px; overflow: hidden; width: 100%;}

  .work{color: #999;  margin-bottom: 15px;  font-size: 12px;}
  .work>p{margin-bottom: 5px;}
  .work>a{color: #3f5a93;   cursor: pointer;}
  .work>a:hover{color: #ed4259;}
  .work>a:hover>.line{color: #3f5a93; }
  .work>a:last-child>.line{display: none;}
  .line{margin: 0 4px;}
</style>
