<template>
  <div class="container">
    <button class="btn btn-warning" @click="show()">Add User</button>
     <div v-if="statusSuccess" class="alert alert-primary" role="alert">Success</div>
     <div v-if="statusBad" class="alert alert-primary" role="alert">failed</div>

    <div v-if="showForm">
      <form class="form-inline" @submit.prevent="createUser()">
        <div class="form-group">
          <label for="fname">Fname</label>
          <input type="text" v-model="user.fname" class="form-control" id="fname" />
        </div>
        <div class="form-group">
          <label for="Lname">Lname</label>
          <input type="text" v-model="user.lname" class="form-control" id="Lname" />
        </div>
        <div class="form-group">
          <label for="email">Email address:</label>
          <input type="email" v-model="user.email" class="form-control" id="email" />
        </div>
        <div class="form-group">
          <label for="Age">Age</label>
          <input type="number" v-model="user.age" class="form-control" id="Age" />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <!-- <th scope="col">Email</th>
          <th scope="col">Age</th> -->
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <th>{{ user.fname }}</th>
          <td>{{ user.lname }}</td>
          <!-- <td>{{user.email}}</td>
      <td>{{user.age}}</td> -->
          <td>
            <router-link
              class="btn btn-small btn-primary"
              :to="{ name: 'user', params: { id: user._id } }"
              >view</router-link
            >
          </td>
          <td>
            <button class="btn btn-small btn-danger" @click="del(user._id)">delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
// import { use } from 'vue/types/umd';
export default {
  name: "users",
  data() {
    return {
      users: [],
      showForm: null,
      statusSuccess:null,
      statusBad:null,
      user:{
        fname:"",
        lname:"",
        email:"",
        age:0
      },
      API:process.env.VUE_APP_API
    };
  },
  methods: {
    del(id){
       axios.delete(`/v1/users/${id}`).then((res)=>{
         if(res.status==200){
           this.statusSuccess=true
           this.fetchData()
         }else{
           this.statusBad=true
         }
       }).catch((err)=>{
         console.log(err)
       })
    },
    createUser(){
      var user = {
        "fname":this.user.fname,
        "lname":this.user.lname,
        "email":this.user.email,
        "age":Number.parseInt(this.user.age)
      }
      axios({
        method:"POST",
        url:`/v1/users`,
        data:user
      }).then((res)=>{
         if(res.status==200){
           this.statusSuccess=true
           this.showForm=false
           this.fetchData()
         }else{
           this.statusBad=false
         }
      }).catch((err) => {
          console.log(err);
        });
    },
    show() {
      this.showForm = true;
    },
    fetchData() {
      axios
        .get(`/v1/users`)
        .then((res) => {
          console.log(res);

          this.users = res.data.users;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style>
</style>