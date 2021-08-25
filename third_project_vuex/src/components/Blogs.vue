<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">PrajwalsWeb</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Blog Count: {{countBlog}}</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="container">
<div class="row mt-3">
   
    <div class="col-md-6">
         <button class="btn btn-warning btn-small" @click="showForm">Create</button>
       <Editor v-if="isWriting"/>
       <Post v-if="isReading" :post="post"/>
    </div>
    <div class="col-md-6">
      <ul class="list-group">
          <li class="list-group-item" v-for="blog,index in blogs" :key="index"><a class="btn btn-link" @click="show(index)">{{blog.title}}</a> <button class="btn btn-small btn-danger" @click="deleteBlog(index)">Delete</button></li>
     </ul>
    </div>
</div>
<h1 class="mt-3">
    Posts from online api
</h1>
<Posts/>
</div>

  </div>
</template>

<script>
import Editor from "./Editor.vue";
import Post from './Post.vue';
import {mapState}  from "vuex"
import {mapGetters} from "vuex"
import Posts from './Posts.vue';
export default {
  components: { Editor, Post, Posts },
  data(){
      return{
          post:{},
          isWriting:false,
          isReading:false
      }
  },
  methods:{
      show(index){
          this.isWriting=false
         this.isReading=true
         this.post={"index":index,"item":this.$store.state.blogs[index]}
         this.$store.commit("views",index)
      },
      showForm(){
          this.isWriting=true
         this.isReading=false
      },
      deleteBlog(index){
          this.$store.commit("deleteBlog",index)
      }
  },
  computed:{
      ...mapState(["blogs"]),
      ...mapGetters(["countBlog"])
  }
};
</script>

<style>
</style>