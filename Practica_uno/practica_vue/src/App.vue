<template>
<html>
  <div id="app">
    <div id="nav">
      <router-link class="bar" to="/">Home</router-link>
      <router-link class="bar" to="/about">About</router-link>
      <router-link class="bar" to="/profile">Profile</router-link>
      <router-link class="bar" to="/juego-1/partida-1">Partida</router-link>
    </div>
    <router-view />
  </div>
</html>
</template>

<style lang="scss">
html {
  background-image: url("/src/assets/Page-Files/background2.jpg");
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.bar {
  background-color: rgba($color: #ea5680, $alpha: 0.6);
  color: white;
}
#nav {
  padding: 15px;
  background-color: rgba($color: white, $alpha: 0.6);
  border-color: #631f5c;
  margin-bottom: 4vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  a {
    font-weight: bold;
    color: rgba($color: white, $alpha: 0.6);

    &.router-link-exact-active {
      background-color: rgba($color: #ffdc55, $alpha: 0.6);
      color: #ea5680;
    }
  }
}
</style>
