<template>
  <div>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/Home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/Home/message">Message</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  // beforeDestroy(){
  //   console.log('Home组件即将被销毁');
  // },
  // mounted(){
  //   console.log('Home组件挂载完毕了',this);
  //   window.homeRoute == this.$route
  //   window.homeRouter == this.$router
  // }
};
</script>