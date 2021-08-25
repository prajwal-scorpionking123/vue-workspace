<template>
  <div class="container">
      <h3 v-if="$store.state.onlinePost.status"></h3>
      <ul class="list-group">
          <li class="list-group-item" v-for="post,index in $store.state.onlinePost.posts" :key="index"><a class="btn btn-link" >{{post.title}}</a></li>
     </ul>
  </div>
</template>

<script>
export default {
 created(){
     this.$store.dispatch("fetchPosts").onlinePost
 },
 methods:{
    //  del(index){
    //      this.$store.dispatch("deletePost",index).onlinePost
    //  }
 }
}
</script>

<style>

</style>