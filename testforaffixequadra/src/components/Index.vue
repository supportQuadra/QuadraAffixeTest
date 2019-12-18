<template>
  <div class="hello">
    <h1>Index</h1>
    <ul>
      <li><router-link to="/form">Form</router-link></li>
      <li><router-link :to="{name: 'result', params:{msgFromIndex}}">Result</router-link></li>
    </ul>
{{$attrs.msgToIndex}}
      <h3>Passing data to Index</h3>
  </div>
</template>
<script>
export default {
  name: 'Index',
  data () {
    return {
      msgFromIndex: `I come from Index`,
    }
  }
}
</script>
