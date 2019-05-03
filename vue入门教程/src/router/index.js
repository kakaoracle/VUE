import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import User from '@/components/User'
/* import News from '@/components/News' */
import Player from "@/components/Player"
import PlayerProfile from '@/components/Player/Profile'
import PlayerStats from '@/components/Player/Stats'
import SettingDetail from '@/components/setting/Detail'
import SettingHeader from '@/components/setting/Header'
import SettingSidebar from '@/components/setting/Sidebar'
import { userInfo } from 'os';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      name:"HelloWorld",
      components:{
        myHeader:SettingHeader,
        mySidebar:SettingSidebar,
        myDetail:SettingDetail
      }
    },
    {
      path: "/about",
      name:"About",
      component: About,
      alias:"/aboutme"
    },
    {
      path:"/user/:uid/:nationality",
      name:"User",
      component:User,
      props:true
    },
    {
      path:"/curry",
      redirect: "/player/1"
    },
    {
      path:"/player/:uid",//id就是组件接收的参数
      name:"Player",
      component: Player,
      children:[
        {
          path:"profile",
          component:PlayerProfile
        },
        {
          path:"stats",
          component:PlayerStats
        }
      ]
    }
  ]
})
