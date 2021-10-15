<template>
  <div id="app">
    <!-- <router-link to="/">HOME</router-link> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}

.dark-mode {
  background: #1a1b1d;
}

.dark {
  color: #f3f3f3;
}

.dark hr{
  border-color: #f3f3f3;
}
</style>
