<template>
  <div>      
      <li class="list-group-item">
        <div class="handle">
          <button @click="deleteItem">删除</button>
        </div>
        <p><span>{{comment.name}}</span><span>说：</span></p>
        <p>{{comment.content }}</p>
      </li>
  </div>
</template>

<script>
   export default {
       props: {
           comment:Object,
           deleteComment:Function,
           key:Number
       },
       methods:{
           deleteItem () {
               const {comment,key,deleteComment}=this;
               if(window.confirm(`确定删除${comment.name}的评论吗`)){
                   deleteComment(key);
               }
           }
       }
   }
</script>

<style>
    li{
        transition:  .5s;
        overflow: hidden;
    }
</style>
