<template>
  <div class="message">
    <h1>你好</h1>
    
 
    <span class="scroll">
      <p class="out">
      本站用于记录博主日常学习与生活，以及项目归档、资源整合
      </p>
      </span>
    

    <p>
      请以左侧导航栏方式联系我，或发送邮件至
      <span>
        <i class="iconfont icon-email"></i>
        1046944336@qq.com
      </span>
    </p>
    

  </div>
</template>

<script>
export default {
  name: "articleMessage",
  mounted(){

  }
};
</script>

<style lang="scss" scoped>
.message {
  height: 80px;
  width: 100%;
  color: var(--font);
  background-color: var(--bgContent);
  font-size: 12px;
  text-align: left;
  padding: 20px 25px;
  border-bottom: 2px solid gainsboro;

}

.scroll{
  width: 500px;
overflow: hidden;
display: inline-block;

}
.out{
  display: inline-block;
  width: 100%;
  position: relative;

}


</style>