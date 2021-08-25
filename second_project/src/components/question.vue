<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">Question</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{qno}}</h6>
        <p class="card-text">
           {{questions[qno].que}}
        </p>    
        <button class="btn btn-success" @click="prev()">Prev</button>
        <button class="btn btn-success" @click="next()">Next</button>
      </div>
    </div>
      </div>
         <div class="col-md-6">
           <user/>
      </div>
    </div>
    
  </div>
</template>

<script>
import user from './users.vue';
export default {
  components: { user },
  data() {
    return {
      qno:0,
      questions: [
        {
          que: "What is html?",
        },
        {
             que: "What is css?",
        },
        {
             que: "What is js?",
        },
        {
          que: "What is xml?",
        }
      ],
      
    };
  },
  methods:{
     prev(){
      this.qno==0? this.qno==0:this.qno--
     },
     next(){
      this.qno==3?this.qno=3:this.qno++
     }
  }
};
</script>

<style>
</style>