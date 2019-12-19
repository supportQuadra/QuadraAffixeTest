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

    <br />
    <br />

<vuetable ref="vuetable"
      :fields="['name', 'address', 'city']"
      :api-mode="false"
      :data="getClients"
      data-path=""
      pagination-path=""
    ></vuetable>


  </div>
</template>
<script>
import store from "../store";
//import Vuex from 'vuex'
import Vuetable from "vuetable-2";
import { mapMutations } from 'vuex';

export default {
  name: "Result",
  store: store,
  components: { Vuetable },
  data() {
    return {
      test: this.msgFromIndex,
      columns: ["name", "address", "city"],
      options: {
        headings: {
          name: "Name",
          address: "Address",
          city: "City"
        },
        editableColumns: ["name"],
        sortable: ["name", "address", "city"],
        filterable: ["name", "adress", "city"]
      }
    };
  },
  methods: {
    ...mapMutations([
      'ADD_CLIENT',
    ]),
    ...mapMutations({
      add: 'ADD_CLIENT'
    }),
    addClient() {
      this.add({
        name: "tedfdifdf",
        address: "difdofiffofffefo",
        city: "ofkodkfododikfdkfodkf"
      })
    },
  },
  computed: {
    getClients() {
      return this.$store.state.client;
    }
  }
};
</script>
