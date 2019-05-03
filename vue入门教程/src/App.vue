<template>
        <div id="app">
           <router-link to="/">Home</router-link>
           <router-link to="/user/1/usa">User1</router-link>
           <router-link to="/user/2/china">User2</router-link>
           <router-link to="/user/3/korea">User3</router-link>
           <router-view></router-view>
        </div>
</template>

<script>
  import './assets/my.css'
  export default {
    name: 'App',
    methods:{
      btnClick(uid){
        //this.$router.push({ path:'/player/${uid}' });//这句传不过去,有bug
        this.$router.push({path:"/player/${uid}/stats"});
        //this.$router.push({name:"Player",params:{uid:uid}});
        //this.$router.push({path:"/player",query:{uid:uid}});//url-get参数写法
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
