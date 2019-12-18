<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <router-view
      :msgall="message"
      @messageChanged="message = $event"
    ></router-view>
      <p>{{ myJson }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "This is a great Message!",
      myJson: ''
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
