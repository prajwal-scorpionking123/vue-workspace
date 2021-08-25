<template>
  <div class="container ">
    <div class="row mt-3">
      <!-- <div class="col-md-4"></div> -->
      
      <div class="col-md-6">
        <button class="btn btn-warning" @click="enableCreate()">Create</button>
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
  name:"blogs",
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