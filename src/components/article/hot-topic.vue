<template>
  <div class="hot">
      <h3>热门推荐</h3>
      <ul>
          <li v-for="(item,index) in articles" :key="index"> 
             <p @click="toArticle(item.id)">
               No{{index+1}}
                {{item.title}}</p>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  //展示热门文章的区域
 name:"hotTopic",
 props:{
   //要传标题和id
   articles:{
     type:Array,
     default(){
       return []
     }
   }
 },
 create(){
   console.log('articles:',this.articles);
 },
 methods:{
   toArticle(aId){
     this.$router.push({
       path:"/detail",
       query:{id:aId} //文章id跳转详情文章
     })
   }
 }
}
</script>

<style scoped>
 .hot{
   width: 100%;
   border-bottom: 3px solid gainsboro;
  
    color: var(--font);
     text-align: left;
    padding: 15px 0;
    height:300px;
 }
 .hot h3{
    padding-bottom: 10px;
     font-size: 16px;
   padding-left:10px;
 }
 
   .hot li{
   font-size: 14px;
   margin-left: 10px;
   padding-left:10px;
   line-height: 24px;
 }
 .hot p{
  cursor: pointer;
 
 }
    .hot p:hover{
   display: inline-block;
   border-bottom: 1px dashed;
 }
 .hot li:first-child{
   color: red;
 }

 .hot li:nth-child(2){
   color: orangered;
 }
  .hot li:nth-child(3){
   color: orange;
 }
</style>