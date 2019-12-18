<template>
  <div class="hello">
    <h1>ResultOne
    </h1>
    <ul>
      <li><router-link to="/form">Form</router-link></li>
      <li><router-link to="/index">Index</router-link></li>
      <li><router-link :to="{name: 'result', params:{msg}}">Result</router-link></li>
    </ul>
  <h1>
      {{$route.params.oneResult_id}}
  </h1>
  <h2>
      {{$route.params.test}}
  </h2>
  </div>
</template>

<script>
export default {
    name:"OneResult",
}
</script>

<style>

</style>