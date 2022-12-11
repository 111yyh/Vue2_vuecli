<template>
  <div>这里是Home</div>
</template>

<script>
export default {
    name:'Home',
    // beforeDestroy(){
    //   console.log('Home组件即将被销毁');
    // },
    mounted(){
      console.log('Home组件挂载完毕了',this);
      window.homeRoute == this.$route
      window.homeRouter == this.$router
    }
}
</script>

<style>

</style>