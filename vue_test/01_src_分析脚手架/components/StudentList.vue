<template>
  <div>
    <h2>学生姓名：{{ StudentName }}</h2>
    <h2>学生年龄：{{ StudentAge }}</h2>
  </div>
</template>
<script>
export default {
  name: "StudentList",
  data() {
    return {
      StudentName: "张三",
      StudentAge: 18,
    };
  },
};
</script>
