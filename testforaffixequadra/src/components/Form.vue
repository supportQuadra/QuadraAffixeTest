<template>
  <div>




    
    <form>
      <h1>Form</h1>
      <ul>
        <li><router-link to="/index">Index</router-link></li>
        <li><router-link to="/result">Result</router-link></li>
      </ul>
      <input type="text" :value="msgall" @input="changeMessage" />
      <p>{{ message }}</p>

      <!-- <p>{{ myJson }}</p>
      <button v-on:click="AddJsonElement">Add to Json</button> -->



  <div class="hero-body ">
    <div class="container">
      <div class="columns is-centered">
        <div class="has-background-primary column is-5-tablet is-4-desktop is-3-widescreen">
          <form action="" class="box">
            <div class="field">
              <label for="" class="label">Name</label>
                <input type="email" placeholder="e.g. bobsmith@gmail.com" class="input" required>
            </div>
            <div class="field">
              <label for="" class="label">Adresse</label>
                <input type="password" placeholder="54 rue Louis" class="input" required>
            </div>
            <div class="field">
              <label for="" class="label">City</label>
                <input type="password" placeholder="Lille" class="input" required>
            </div>

            <div class="field">
              <button class="button is-success has-background-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>


    </form>
  </div>
</template>

<script>
import json from "./test.json";
import "../../node_modules/bulma/css/bulma.css";
export default {
  props: ["msgall"],
  data() {
    return {
      myJson: json,
      myJsonString: JSON.stringify(json),
      msgToIndex: "I'm comming from Form",
      message: ""
    };
  },
  methods: {
    changeMessage(event) {
      this.message = event.target.value;
      this.$emit("messageChanged", this.message);
    }
    // adding json elements
    // AddJsonElement() {
    //   this.myJson.push({
    //     id: 3,
    //     name: "Car",
    //     address: "Here is Car",
    //     city: "Anzin"
    //   });
    //   const fs = require("fs");
    //   fs.writeFileSync("test.json", JSON.stringify(this.myJson));
    // }
  }
};
</script>
