<template>
  <div id="app">
    <h1>Ejemplo de routing</h1>
    <div id="nav">
      <router-link to="/">Enlace Router 1</router-link> |
      <router-link to="/router2">Enlace router 2</router-link> |
      <router-link to="/router3">Enlace router 3</router-link> |
      <router-link to="/router4">Enlace router 4</router-link> |
      <router-link to="/router5">Enlace router 5</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
