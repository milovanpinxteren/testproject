<template>
  <p id="app">
    <a href="/">App</a><br>
    <a href="#/homepage">Home</a><br>
    <a href="#/secondpage">Second Page</a><br>
    <component :is="currentView"/>

  </p>

</template>

<script>

import App from "vue";
import SecondPage from "@/pages/SecondPage";
import {NotFoundError} from "core-js/internals/dom-exception-constants";
import HomePage from "@/pages/HomePage";

const routes = {
  '/': App,
  '/homepage': HomePage,
  '/secondpage': SecondPage
}

export default {
  data() {
    return {
      greeting: 'Hello from parent',
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFoundError
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
