<template>
<html>
  <title>Plta</title>
  <div id="app">
    <div id="nav">
      <router-link class="bar" to="/">Home</router-link>
      <router-link class="bar" to="/partidas/abiertas">Salas abiertas</router-link>
      <router-link class="bar" to="/partidas/misSalas">Mis partidas</router-link>
    </div>
    <div class="container-fluid">
      <router-view />
    </div>
  </div>
</html>
</template>

<style lang="scss">
html {
  background-image: url("/src/assets/Page-Files/background2.jpg");
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("/src/assets/Page-Files/background2.jpg");
}

.bar {
  color: white;
  width: 100%;
  text-align: center;
  margin: auto;
}
.bar:hover {
  background-color: #483c6c;
  color: white;
}

#nav {
  padding: 1vh;
  background-color: rgba($color: white, $alpha: 0.6);
  border-color: #631f5c;
  margin-bottom: 4vh;
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  a {
    font-weight: bold;
    color: #483c6c;

    &.router-link-exact-active {
      color: white;
    }
  }
  a:hover {
    color: white;
  }
}
</style>
