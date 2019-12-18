<template>
  <div class="hello">
    <h1>Result</h1>
    <h2></h2>
    <ul>
      <li><router-link to="/form">Form</router-link></li>
      <li><router-link to="/index">Index</router-link></li>
    </ul>
    <p>{{ $attrs.msgFromIndex }}</p>
    <li v-for="client in getClients" :key="client.id">
      <a href="">
        {{ client.name }}
      </a>
    </li>
    <button @click="addClient">Add One</button>
  </div>
</template>
<script>
import store from "../store";
//import Vuex from 'vuex'

export default {
  store: store,
  name: "Result",
  data() {
    return {
      test: this.msgFromIndex
    };
  },
  methods: {
    addClient() {
      store.commit("ADD_CLIENT", "test", "here", "here again");
    }
  },
  computed: {
    getClients() {
      return this.$store.state.client;
    }
  }
};
</script>
