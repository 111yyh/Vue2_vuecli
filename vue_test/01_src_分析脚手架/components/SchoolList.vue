<template>
  <div class="demo">
    <h2>学校名称：{{ SchoolName }}</h2>
    <h2>学校地址：{{ SchoolAddress }}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>
<script>
export default {
  name: "SchoolList",
  data() {
    return {
      SchoolName: "尚硅谷",
      SchoolAddress: "北京昌平",
    };
  },
  methods: {
    showName() {
      alert(this.SchoolName);
    },
  },
};
</script>
<style>
.demo {
  background-color: orange;
}
</style>