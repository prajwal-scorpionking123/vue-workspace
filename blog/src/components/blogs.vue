<template>
  <div class="container ">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">prajwalsweb</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link btn" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link btn" @click="enableCreate()">Create</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="row mt-3">
      <!-- <div class="col-md-4"></div> -->
      <div class="col-md-6">
       <editor v-if="isWriting" @add-to-list="add" />
       <post v-if="isReading" :post="post" @incrLikes="like"/>
      </div>
      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item"  v-for="(post, index) in posts" :key="index"><a class="btn btn-link" @click="show(index)">{{ post.title }}</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import editor from './editor.vue';
import Post from './post.vue';

export default {
  components: { editor, Post },
  data() {
    return {
      isWriting:false,
      isReading:false,
      post:{},
      posts: [
        {
          title: "first blog",
          text: "this is my first blog",
          likes: 0,
          views: 0,
        },
      ],
    };
  },
  methods: {
    add(post) {
      console.log(post);
      this.posts.push(post);
    },
    show(index){
      this.isWriting=false
      this.isReading=true
      this.post={"id":index,"item":this.posts[index]}
    },
    enableCreate(){
      this.isReading=false
      this.isWriting=true
    },
    like(id){
      this.posts[id].likes++
    }
  },
};
</script>

<style>
</style>