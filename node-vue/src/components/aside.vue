<template>
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
</template>
<script>
  export default {
    data() {
      return {
        user: {
        }

      }
    },
    computed:{
      user(){
        return this.$store.getters.user
      }
    }


  }

</script>
<style scoped>

  .asidebar {
    display: none;
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    width: 300px;
    background: #222;
    color: #999999
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
