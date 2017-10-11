<template>
  <main class="warp">
    <div class="page" ref="page">
      <Header></Header>
      <Blog></Blog>
    </div>
    <div class="asidebar" ref="abc" style="width:0px">
      <img src="../assets/logo.png" alt="userlogo" class="userlogo">
      <p class="username">{{user.name}}</p>
      <ul class="inducelist">
        <li v-for="i in user.induce">{{i}}|</li>
      </ul>
      <div class="more" ref="cd">
        <div class="show">
          <a href="">
            <span class="num">{{user.rizhi}}</span>
            <span>日志</span>
          </a>
        </div>
        <div class="show">
          <a href="">
            <span class="num">{{user.type}}</span>
            <span>分类</span>
          </a>
        </div>
        <div class="show">
          <a href="">
            <span class="num">{{user.tags}}</span>
            <span>标签</span>
          </a>
        </div>
      </div>
    </div>
    <div class="aside" @click="ShowSidebar()">
      <span v-for="i in 3"></span>
    </div>

  </main>

</template>
<script>
  import Header from './header.vue'
  import Blog from './blog.vue'
  //import Aside from './aside.vue'

  export default {
    data() {
      return {
        user: {
          name: 'lei',
          induce: ['前端', 'hexo', '技术'],
          rizhi: 10,
          tags: 5,
          type: 2,
        }
      }
    },
    components: {
      Header,
      Blog,
    },
    mounted() {
      console.log(this.$refs.abc.style.display)
      console.log(this.$store.state.blogslist.blogs[0].content)
    },
    methods: {
      ShowSidebar() {
        if (this.$refs.abc.style.width == '0px') {
          this.$refs.abc.style.width = '300px'
          this.$refs.cd.style.opacity = 1
          
          this.$refs.page.style.cssText = "transform: translateX(-160px);transition:all .4s"
          console.log(this.$refs.page.style.cssText)
        } else {
          this.$refs.abc.style.width = '0px'
          this.$refs.page.style.cssText = "transform: translateX(0px);transition:all .4s"
        }
      }
    }
  }

</script>

<style scoped>
  .aside {
    position: fixed;
    right: 50px;
    bottom: 50px;
    background: #222;
    color: #ffffff;
    width: 25px;
    height: 25px;
    padding-top: 5px;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;
    z-index: 1001;
  }

  .aside span {
    display: block;
    height: 4px;
    width: 15px;
    margin: 0 auto;
    border-top: 2px solid #ffffff;
  }
  /* .aside span:hover{
    
} */

  .asidebar {
    /* display: none; */
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    width: 300px;
    background: #222;
    color: #999999;
    transition: all linear .4s
  }

  .userlogo {
    width: 100px;
    height: 100px;
    margin-top: 50px;
    border-radius: 50%;
    border: 2px solid #333;
    background: #ffffff
  }

  .username {
    margin: 5px 0 0;
    color: #ffffff;
  }

  .inducelist {
    margin: 0 auto;
    margin-top: 5px;
    margin-bottom: 10px;
    text-align: center;
  }

  .inducelist li {
    display: inline;
  }

  .inducelist li:nth-child(2) {
    padding-top: 3px;
  }

  .more {
    display: flex;
    flex-direction: row;
    width: 60%;
    margin: 0 auto;
    margin-top: 30px;
    opacity: 0;
    -webkit-transition: opacity .4s;
    -moz-transition: opacity .4s;
    transition: opacity .4s;
  }

  .show {
    flex-direction: column;
    flex: 1;
    border-right: 1px solid #bbb;
    padding: 0 10px;
  }

  .show:last-child {
    border: none
  }

  .show span {
    display: block
  }

  .more a {
    color: #999;
  }

  .num {
    font-size: 20px;
    font-weight: bold;
  }

</style>
