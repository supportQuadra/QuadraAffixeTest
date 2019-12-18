<template>
  <div class="hello">
    <h1>Result</h1>
    <h2>
    </h2>
    <ul>
      <li><router-link to="/form">Form</router-link></li>
      <li><router-link to="/index">Index</router-link></li>
    </ul>
    <p>{{$attrs.msgFromIndex}}</p>
  </div>
</template>
<script>
export default {
  name: 'Result',
  data () {
    return {
      test: this.msgFromIndex
    }
  }
}
</script>
