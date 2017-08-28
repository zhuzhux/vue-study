<template>
	<div id="">
		<h2>{{msg}}--{{$route.params.username}}--{{$route.params.id}}</h2>
	</div>
</template>

<script>
	export default {
		name: 'hi2',
		data(){
			return{
				msg: 'hi2 page'
			}
		}
	}
</script>

<style>
</style>