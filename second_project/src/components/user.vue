<template>
  <div class="container">
    <!-- <h1>Profile</h1>
        <h3>First Name:{{user.fname}}</h3>
        <h3>Last Name:{{user.lname}}</h3>
        <h3>Email:{{user.email}}</h3>
        <h3>Age:{{user.age}}</h3> -->
    <div v-if="status" class="alert alert-primary" role="alert">failed</div>
    <form @submit.prevent="updateUser()" class="form-inline">
      <div class="form-group">
        <label class="sr-only" for="fname">First Name:</label>
        <input
          type="text"
          class="form-control"
          v-model="user.fname"
          id="fname"
        />
      </div>
      <div class="form-group">
        <label class="sr-only" for="lname">Last Name:</label>
        <input
          type="text"
          class="form-control"
          v-model="user.lname"
          id="lname"
        />
      </div>
      <div class="form-group">
        <label class="sr-only" for="email">Email address:</label>
        <input
          type="email"
          class="form-control"
          v-model="user.email"
          id="email"
        />
      </div>
      <div class="form-group">
        <label class="sr-only" for="pwd">Age</label>
        <input type="text" class="form-control" v-model="user.age" id="pwd" />
      </div>
      <div class="form-group">
        <input type="submit" class="form-control" value="submit" />
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "user",
  data() {
    return {
      user: null,
      status: null,
    };
  },
  methods: {
    updateUser() {
      console.log(this.users);
      axios
        .put(`http://localhost:3000/api/users/${this.user._id}`, this.user)
        .then((res) => {
          if (res.status == 200) {
            this.$router.go(-1)
          } else {
            this.status = true;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchUser() {
      axios
        .get(`http://localhost:3000/api/users/${this.$route.params.id}`)
        .then((res) => {
          console.log(res);

          this.user = res.data.users;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.fetchUser();
  },
};
</script>

<style>
</style>