<template>
  <div id="app">
    <div id="intro">
      <h1 class="i-title">Check A Website's IP Address</h1>
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
  display: flex;
  flex-direction: column;
  margin-top: 3%;
}
#intro {
  .i-title {
    font-size: 2em;
    color: black;
  }
}
@media only screen and (max-width: 600px) {
  #intro {
    .i-title {
      font-size: 1.2em;
    }
  }
}
</style>
