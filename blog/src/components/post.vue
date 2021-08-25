<template>
    <div class="container" >
         <h3>{{post.item.title}}</h3>
         <p>{{post.item.text}}</p>
         <button class="btn btn-primary" @click="incrLikes(post.id)">Likes:{{post.item.likes}}</button>
         <h4>Views:{{post.item.views}}</h4>
    </div>
</template>

<script>
export default {
  props:['post'],
  methods:{
      incrLikes(id){
          console.log(id)
          this.$emit("incrLikes",id)
      }
  }
}
</script>

<style>

</style>