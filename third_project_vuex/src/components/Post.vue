<template>
    <div>
        <h5>title</h5>
        <p>{{post.item.title}}</p>
        <h5>Description</h5>
        <p>{{post.item.desc}}</p>
        <p><button class="btn btn-primary" @click="like(post.index)">likes{{post.item.likes}}</button></p>
        <p><button class="btn btn-primary">Views{{post.item.views}}</button></p>
    </div>
</template>

<script>
export default {
   props:["post"],
   methods:{
       like(index){
           this.$store.commit("like",index)
       }
   }
}
</script>

<style>

</style>