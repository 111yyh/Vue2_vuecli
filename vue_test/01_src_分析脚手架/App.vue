<template>
	<div>
		<img src="./assets/logo.png" alt="logo">
		<SchoolList></SchoolList>
		<StudentList></StudentList>
	</div>
</template>

<script>
	//引入组件
	import SchoolList from './components/SchoolList'
	import StudentList from './components/StudentList'

	export default {
		name:'App',
		components:{
			SchoolList,
			StudentList
		}
	}
</script>
