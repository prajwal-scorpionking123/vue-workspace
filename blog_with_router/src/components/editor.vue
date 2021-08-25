<template>
  <div>
    <form @submit.prevent="handleSubmit()">
      <label>title</label>
      <input type="text" class="form-control" v-model="title">
      <label>Content</label>
      <textarea class="form-control" v-model="text" cols="70" rows="10"></textarea>
      <input type="submit" class="btn btn-success"  value="post">
    </form>
  </div>
</template>

<script>
export default {
  name: "editor",
  data(){
      return{
        title:"",
        text:"",
         post:{}
      }
  },
  methods:{
     handleSubmit(){
        this.post={
            "title":this.title,
            "text":this.text,
            "likes":0,
            "views":0
        }
        // console.log(this.post)
        this.$emit("add-to-list",this.post)
     }
  }
};
</script>

<style>
</style>