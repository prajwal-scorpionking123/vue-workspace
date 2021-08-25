<template>
  <div class="container">
    <button class="btn btn-warning" @click="createUser">Add User</button>
     <div v-if="status" class="alert alert-primary" role="alert">failed</div>
    <div v-if="show">
      <form class="form-inline" @submit.prevent="createUser">
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

        <button type="submit" class="btn btn-default">Submit</button>
      </form>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Age</th>
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
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "users",
  data() {
    return {
      users: [],
      showForm: false,
      status:null,
      user:{
        fname:"",
        lname:"",
        email:"",
        age:0
      }
    };
  },
  methods: {
    createUser(){
      
      axios
        .post(`http://localhost:3000/api/users`, this.user)
        .then((res) => {
          if (res.status == 200) {
            this.status=true
          } else {
            this.status = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    show() {
      this.showForm = true;
    },
    fetchData() {
      axios
        .get("http://localhost:3000/api/users")
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