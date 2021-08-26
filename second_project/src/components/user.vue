<template>
  <div class="container">

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
          required
        />
      </div>
      <div class="form-group">
        <label class="sr-only" for="pwd">Age</label>
        <input type="text" class="form-control" v-model="user.age" id="pwd" />
      </div>
        <button type="submit" class=" btn-lg btn-primary" value="update">Update </button>
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
       API:process.env.VUE_APP_API
    };
  },
  methods: {
    updateUser() {
      console.log(this.users);
      var user = {
        "fname":this.user.fname,
        "lname":this.user.lname,
        "email":this.user.email,
        "age":Number.parseInt(this.user.age)
      }
      axios
        .put(`/v1/users/${this.user._id}`, user)
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
        .get(`/v1/users/${this.$route.params.id}`)
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