<template>
  <main class="warp">
      <Header></Header>
      <Blog></Blog>
      <div class="aside" @click="ShowSidebar">
          <span v-for="i in 3"></span>
      </div>
  </main>
</template>
<script>
import Header from './header.vue'
import Blog from './blog.vue'

export default {
    components:{Header,Blog},
    methods:{
        ShowSidebar(){
            
        }
    }
}
</script>

<style scoped>
.aside{
    position: fixed;
    right: 50px;
    bottom: 50px;
    background: #000;
    color: #ffffff;
    width: 25px;
    height: 25px;
    padding-top: 5px;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;
}
.aside span{
    display: block;
    height: 4px;
    width: 15px;
    margin: 0 auto;
    border-top: 2px solid #ffffff;
}
.aside span:hover{
    
}
</style>
