<template>
  <section class="jumbotorn">
    <h3 class="jumbotorn-heading" >Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="searchName"
        @keyup.13="search()"
      />
      <button @click="search()">Search</button>
    </div>
  </section>
</template>

<script>
import PubSub from 'pubsub-js'

export default {
    data(){
        return{
            searchName:'',

        }
    },
    methods:{
        search(){            
            const searchName=this.searchName.trim();
            if(searchName){
                // 发布搜索的消息
                PubSub.publish('search',searchName);
            }
        }
    }
};
</script>

<style>
</style>
