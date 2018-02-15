<template>
  <div id="app">
    <a href="/home"><img src="./assets/logo.png"></a>
    <button @click="goBack">Back</button>
    <div id="content-pane">
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    goBack: function () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#content-pane {
  text-align: left;
  margin-left: 3px;
}

h1 {
  text-align: center;
  color: blueviolet;
}

</style>
