import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blogs: [
      {
        "title": "how to use the windows",
        "desc": "Just click I agree next",
        "likes": 0,
        "views": 0
      },
      {
        "title": "how to use the oracle 11g",
        "desc": "download it install it and configure the user details",
        "likes": 0,
        "views": 0
      }
    ],

  },
  mutations: {
    addBlog(state, post) {
      state.blogs.push(post)
    },
    like(state, index) {
      state.blogs[index].likes++
    },
    views(state, index) {
      state.blogs[index].views++
    },
    deleteBlog(state, index) {
      state.blogs.splice(index, 1)
    }
  },
  getters: {
    countBlog: state => {
      return state.blogs.length
    }
  },
  actions: {
    //   fetchPosts(context){
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(response => response.json())
    // .then(json =>context.state.posts=json)
    //   }
  },
  modules: {
    onlinePost: {
      state: {
        status: null,
        posts: []
      },
      actions: {
        fetchPosts(context) {
          fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => context.state.posts = json)
        },
      // deletePost(context, index) {
      //   fetch(`https://jsonplaceholder.typicode.com/posts/${index}`,{
      //     method:'DELETE'
      //   })
      //     .then(response => {
      //       if (response.status == 200) {
      //         console.log(response)
      //         context.state.status = true
      //       } else {
      //         context.state.status = false
      //       }
      //     }).catch((err) => {

      //       console.log(err)
      //     })
      // }
    }
    }
  }

})
