<template>
  <div>
    <h2>Home</h2>
    <div>
      <div>{{msg}}</div>
      <ul class="nav nav-tabs">
        <router-link to="/home/news">News</router-link>
        <router-link to="/home/message">Message</router-link>
      </ul>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      msg:String
    }
  } 
</script>

<style>

</style>
