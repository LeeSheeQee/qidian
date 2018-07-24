<template>
  <div class="famous">
    <ul>
      <li v-for="f in msg">
        <div class="famous-msg">
          <a href="">{{f.name}}</a>
          <p>{{f.exp}}</p>
        </div>
        <div class="famous-img">
          <a href="">
            <img v-bind:src="f.img" alt="">
          </a>
          <div v-bind:class="{'d1': f.tag === 1, 'd2' : f.tag === 2, 'd3' : f.tag ===3, 'd4' : f.tag === 4}"></div>
        </div>
        <div class="clear"></div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'FansFamous',
        props: ['msg']
    }
</script>


<style scoped>
  .famous{width: 100%;}
  .famous>ul>li{padding: 10px 0;  border-top: 1px solid #e6e6e6;}
  .famous-msg{float: left;}
  .famous-msg>a:hover{color: #ed4259;}
  .famous-img{float: right; width: 44px;  height: 48px; position: relative;}
  .famous-img>a>img{width: 44px;  height: 44px; border-radius: 50%;}
  .famous-img>div{width: 48px;  height: 19px; position: absolute; top: 26px; left: -1px;  }
  .famous-img>div.d1{ background: no-repeat url('../../assets/sprite.385d7.png') -249px -200px;}
  .famous-img>div.d2{ background: no-repeat url('../../assets/sprite.385d7.png') -188px -222px;}
  .famous-img>div.d3{ background: no-repeat url('../../assets/sprite.385d7.png') -240px -222px;}
  .famous-img>div.d4{ background: no-repeat url('../../assets/sprite.385d7.png') 0 -272px;}
  .famous-msg>a{display: block; max-width: 160px; white-space: nowrap;  overflow: hidden; text-overflow: ellipsis;  font-size: 14px; line-height: 22px; height: 22px; color: #262626;}
  .famous-msg>p{font-size: 12px;  height: 16px; line-height: 16px;  max-width: 160px; overflow: hidden; text-overflow: ellipsis;  white-space: nowrap;  color: #a6a6a6;}
</style>
