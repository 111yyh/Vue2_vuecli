<template>
	<div>
		<SchoolList/>
		<hr>
		<StudentList/>
	</div>
</template>

<script>
	import SchoolList from './components/School'
	import StudentList from './components/Student'

	export default {
		name:'App',
		components:{
			SchoolList,
			StudentList
			}
	}
</script>
