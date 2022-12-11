<template>
	<div>
		<StudentList name="李四" sex="女" :age="18"/>
		<!-- <StudentList name="王五" sex="男" age="20"/> -->
	</div>
</template>

<script>
	import StudentList from './components/Student'

	export default {
		name:'App',
		components:{StudentList}
	}
</script>
