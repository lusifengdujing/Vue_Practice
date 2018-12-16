<template>
  <div>
      <ul>
          <li v-for="(news,index) in newsArr" :key="index">{{news}}</li>
      </ul>
  </div>
</template>

<script>
  export default {
      data(){
          return{
              newsArr:['nwes001','nwes002','nwes003','nwes004']
          }
      }
  }
</script>

<style>

</style>
