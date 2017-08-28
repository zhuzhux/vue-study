<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
			<router-link to="/">首页</router-link> |
			<router-link to="/Hi">hi</router-link> |
			<router-link :to="hi1">hi1</router-link> |
			<router-link :to="{name:'hi2',params:{username:'wxj',id:950928}}">hi2</router-link>
    </div>
    <p>{{ $route.name }}</p>
    
    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
  	return{
  		hi1: {name:'hi1',params:{username:'wxj',id:928}}
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
