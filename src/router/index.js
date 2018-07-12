import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Rank from '@/components/Rank'
import Finish from '@/components/Finish'
import Free from '@/components/Free'
import All from '@/components/All'
import Client from '@/components/Client'
import Author from '@/components/Author'
import NotFound from '@/components/NotFound'
import Info from '@/components/Info'
import AuthorMessage from '@/components/AuthorMessage'

Vue.use(Router);

Vue.filter('NumFormat', function(value) {
  if(!value) {
    return null;
  }else {
    let intPart = Number(value).toFixed(0); //获取整数部分
    let intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'); //将整数部分逢三一断
    return intPartFormat;
  }
});
Vue.filter('RMB', function (value) {
  if(!value) {
    return null;
  }else {
    return '\u00A5 '+ value;
  }
})

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/finish',
      name: 'Finish',
      component: Finish
    },
    {
      path: '/free',
      name: 'Free',
      component: Free
    },
    {
      path: '/all',
      name: 'All',
      component: All
    },
    {
      path: '/author',
      name: 'Author',
      component: Author
    },
    {
      path: '/client',
      name: 'Client',
      component: Client
    },
    {
      path: '/info',
      name: 'Info',
      component: Info,
      children:[{
        // 冒号后面的数据可获取是动态的
        path:':bookId',
        component:Info
      }]
    },
    {
      path: '/authormsg',
      name: 'AuthorMessage',
      component: AuthorMessage,
      children:[{
        // 冒号后面的数据可获取是动态的
        path:':authorId',
        component:AuthorMessage
      }]
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
