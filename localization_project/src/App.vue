<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">{{ $t("nav.home") }}</router-link> |
      <router-link to="/about">{{ $t("nav.about") }}</router-link>
      <div class="nav__end">
      <LocaleSwitcher/>
    </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
import LocaleSwitcher from './components/LocaleSwitcher.vue'

export default {
  components: { LocaleSwitcher },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.nav__end {
  display: flex;
  align-items: center;
}
</style>
