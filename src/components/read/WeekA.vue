<template>
  <div class="week-a">
    <ul>
      <li v-for="book in msg">
        <a href="" class="type">「{{book.type}}」</a>
        <a href="" class="name">{{book.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'WeekA',
        props: ['msg']
    }
</script>


<style scoped>
  .week-a{width: 100%;}
  .week>ul>li{height: 31px; border-top: 1px solid #e6e6e6;  overflow: hidden;}
  .type,.name{font-size: 14px;  line-height: 32px;}
  .type{min-width: 56px; color: gray;}
  .name{max-width: 155px; color: #1a1a1a; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; margin-left: -3px;}
  .name:hover,.type:hover{color: #ed4259;}
  .week>ul>li>a:hover{color: #ed4259;}
</style>
