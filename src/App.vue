<template>
  <div id="app">
    <HomeHeader></HomeHeader>
    <router-view/>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    HomeHeader,
    HomeFooter
  }
}
import HomeHeader from '@/components/HomeHeader'
import HomeFooter from '@/components/HomeFooter'
</script>

<style>
  *{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,body{
    margin: 0;
    padding: 0;
  }

  h1,h2,h3,h4,h5,h6,p,span,a,button,div,ul,li,ol,input,table{
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a:link{
    text-decoration: none;
  }
  a:visited{
    text-decoration: none;
  }
  a:hover{
    text-decoration: none;
  }
  a:active{
    text-decoration: none;
  }
  a{
    text-decoration: none;
    color: #000;
  }
  .clear-l{
    clear: left;
  }
  .clear-r{
    clear: right;
  }
  .clear{
    clear: both;
  }
  button{outline: none; cursor: pointer;}
  .router-link-active {
    background: #ed4259!important;
    /*border-top: 2px solid #ed4259*/
  }
</style>
