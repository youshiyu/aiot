<template>
	<div class="search">
	    <input type="text" placeholder="输入搜索内容"> 
		<van-loading  color="green" />
	</div>
</template>

<script>
import { Loading } from 'vant';
export default {
  components: {
    [Loading.name]: Loading,
    name:'Search'
}
}
</script>
<style scoped>
.search{
	text-align:center;
}
.search input{
	margin : 0 auto;
	padding: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	/* width: 535px;
	height: 34px; */
	height: 2.125rem;
	border: 1px solid dimgray;
	border-radius: 2px;
	color: #fff;
	background:floralwhite
	
}
</style>