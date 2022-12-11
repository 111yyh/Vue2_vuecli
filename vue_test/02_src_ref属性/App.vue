<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDom">点我输出上方的dom元素</button>
    <SchoolList ref="sch"/>
  </div>
</template>

<script>
//引入School组件
import SchoolList from './components/School'

export default {
    name:'App',
    data() {
        return {
            msg:'欢迎学习Vue'
        }
    },
    components:{SchoolList,},
    methods: {
        showDom(){
            console.log(this.$refs.title)//真实dom元素
            console.log(this.$refs.btn)//真实dom元素
            console.log(this.$refs.sch)//SchoolList组件的实例对象（vc）
        }
    },
}
</script>

<style>

</style>