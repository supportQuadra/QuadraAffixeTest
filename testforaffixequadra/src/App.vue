<template>
  <div id="app">


    <h1>{{ message }}</h1>
    <router-view
      :msgall="message"
      @messageChanged="message = $event"
    ></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "This is a great Message!",
      myJson: '',

      fin: false,
      index: 0,
      score: 0,
      variants: [...Array(4)],
      voirReponse: false,
    };
  },methods: {
    action: function(index) {
      // Test bonne réponse
      if(index == this.client[this.index].ok) {
        this.score++;
      } else {
        this.variants[index] = 'danger';
      }
      this.voirReponse = true;
      this.variants[this.client[this.index].ok] = 'success';
      if(this.index == this.client.length - 1) {
        this.fin = true;
      }
    },
    recommencer: function() {
      this.voirReponse = this.fin = this.index = this.score = 0;
      this.variants = [...Array(4)];
    },
    continuer: function() {
      this.voirReponse = false;
      this.variants = [...Array(4)];
      this.index++;
    }
  },
  computed: {
    client () {
      return this.$store.state.client;
    }
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
