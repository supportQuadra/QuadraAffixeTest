<template>
  <div>
    <form>
      <h1>Form</h1>
      <ul>
        <li><router-link to="/index">Index</router-link></li>
        <li><router-link to="/result">Result</router-link></li>
      </ul>
      <input type="text" :value="msg" @input="changeMessage" />
      <p>{{ message }}</p>

      <!-- <p>{{ myJson }}</p>
      <button v-on:click="AddJsonElement">Add to Json</button> -->


      <h3>Passing data to Index</h3>
    </form>
  </div>
</template>

<script>
import json from "./test.json";
export default {
  props: ["msg"],
  data() {
    return {
      myJson: json,
      myJsonString: JSON.stringify(json),
      msgToIndex : "I'm comming from Form",
      message: ''
    };
  },
  methods: {
    changeMessage(event) {
      this.message = event.target.value;
      this.$emit("messageChanged", this.message);
    },
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
