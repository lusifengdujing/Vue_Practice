<template>
    <!-- onmousueenter;onmouseleave;onmouseover;onmouseout -->
    <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background: bgColor}" >
        <label>
            <input type="checkbox" v-model="todo.complete">
            <span>{{todo.title}}</span>
        </label>
        <span><button>shanchu</button></span>
    </li>
  
</template>

<script>
  export default {
      props:{
          todo:Object,
          index:Number

      },
      data(){
          return{
              bgColor:'white',//默认的背景颜色
              isShow:false//按钮默认是否显示
          }
      },
      methods:{
          handleEnter(isEnter){
              console.log(isEnter);
              if(isEnter){
                  this.bgColor="#aaaaaa";
                  this.isShow=true;
              }else{
                  this.bgColor="white";
                  this.isShow=false;
              }

          }
      }
  }
</script>

<style>
    li{
        list-style:none;
        height: 36px;
        line-height:36px;
        padding:0 5px;
        border-bottom:1px solid #ddd;
    }
    li label {
        float: left;
        cursor:pointer;
    }
    li button{
        float: right;
        display:none;
        margin-top:3px;
    }
    li:before{
        content: initial;
    }
    li:last-child{
        border-bottom:none;
    }
</style>
