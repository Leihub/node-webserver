<template>
  <div class="blog">
    <div class="item" v-for="i in blogslist.blogs">
      <h2 class="title">{{i.title}}</h2>
      <p class="txt">{{i.content}}</p>
      <div class="btn">
        <a href="">
          <button>阅读全文>></button>
        </a>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .blog {
    margin: 0 auto;
    width: 100%;
    margin-top: 80px;
  }

  .item {
    width: 700px;
    margin: 0 auto;
    box-shadow: 0 0 7px rgba(202, 203, 203, 0.7);
    margin-top: 120px;
    padding: 25px;
  }

  .item:first-child {
    margin-top: 0;
  }

  .title {
    margin-bottom: 20px;
  }

  .txt {
    text-align: left;
  }

  .btn {
    margin-top: 50px;
  }

  .btn button {
    width: 100px;
    height: 30px;
    background: #000;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }

</style>
<script>
  export default {
    data() {
      return {
        blogs: []
      }
    },
    computed: {
      // console.log("sdajsd", this.$store.getters.blogs)
      blogslist() {
        return this.$store.getters.blogslist
      }
    }

  }

</script>
