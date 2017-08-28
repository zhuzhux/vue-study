<template>
  <div id="app">
    <img src="./assets/logo.png"><br />
    <div>
    	<button @click="goBack">后退</button>
    	<button @click="goGo">前进</button>
    	<button @click="goHome">返回首页</button>
    </div>
    <router-link to="/">Home</router-link> | 
    <router-link to="/params/198/wxj">params</router-link> |
    <router-link to="/goHome">goHome</router-link> |
    <router-link to="/goParams/928/wxjii vue.js">goParams</router-link> |
    <router-link to="/hi1">Hi1</router-link> |
    <router-link to="/wxj">wxj</router-link> |
    <router-link :to="{name: 'Params',params:{newsId:'123',newsTitle:'123asdqwe'}}">params</router-link> |
    <router-link to="/Error404">Error404瞎写的</router-link> |
    
    <transition name="fade" mode="out-in">    	
    	<router-view></router-view>	
    </transition>

  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
  	goBack(){
  		this.$router.go(-1);
  	},
  	goGo(){
  		this.$router.go(1);
  	},
  	goHome(){
  		this.$router.push("/");
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

.fade-enter{
	opacity: 0;
}
.fade-leave{
	opacity: 1;
}
.fade-enter-active{
	transition: opacity .5s;
}
.fade-leave-active{
	opacity: 0;
	transition: opacity .5s;
}
</style>
