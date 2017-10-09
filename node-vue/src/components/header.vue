<template>
  <div class="header">
    <div class="top">
      <img src="../assets/logo.png" alt="logo" class="logo">
      <ul class="headerlist">
        <li v-for="i in headerlist">
          <icon :name="i.icona"></icon>
          <a href="">{{i.name}}</a>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'header',
    data() {
      return {
        headerlist: [{
            name: '首页',
            icona: 'home'
          },
          {
            name: '归档',
            icona: 'th',
          },
          {
            name: '分类',
            icona: 'user',
          },
          {
            name: '关于',
            icona: 'user',
          },
          {
            name: '标签',
            icona: 'tags',
          }
        ]
      }

    }
  }
</script>

<style scoped>
.header{
    margin: 0 auto;
    width: 800px;
}
.top{
    display: flex
}
  .logo {
    width:50px;
    height: 50px;
    margin-right: 200px;
    margin-left: 50px
  }

  .headerlist {
    display: flex;
    width: 60%;
  }

  .headerlist li {
    margin: 0 20px;
    font-size: 15px;
  }

</style>
