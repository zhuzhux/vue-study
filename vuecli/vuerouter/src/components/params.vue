<template>
	<div>
		<h2>{{msg}}</h2>
		<h2>newsId:{{$route.params.newsId}}</h2>
		<h2>newsTitle:{{$route.params.newsTitle}}</h2>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				msg: "params pagess"
			}
		},
		beforeRouteEnter: (to,from,next)=>{
			console.log("准备进去params路由模板");
			next();
		},
		beforeRouteLeave: (to, from, next)=>{
			console.log("准备离开params路由模板");
			next();
		}
	}
</script>

<style>
</style>