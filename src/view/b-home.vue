<template>
  <div id="home">

      <div class="left">
        <leftNav></leftNav>

    </div>

    <div class="right row_flex">
      <div class="rightTop">
        <i class="iconfont icon-jiqiren" @click="toHome"></i>
        <p>Welcome,Stranger</p>
        <nSerach></nSerach>
      </div>

      <div class="content">
        <router-view :articles="articles.list"></router-view>
      </div>

     
    </div>
  </div>
</template>

<script>
import leftNav from "./childCom/left-nav.vue";
import nSerach from "@/components/n-serach";


export default {
  name: "blogHome",
  components: { leftNav, nSerach },
  data() {
    return {
      articles: {
     
        pages: 0,
        list: [],
      }, //模拟数据
    }
  },
  mounted(){
   
    addEventListener("scroll",this.handelScroll,true);
  },
  created() { 
    this.getArticle();
  },
  methods: {
  
    //fixed固定导航跟随左右滚动
    handelScroll(){
      let left = document.querySelector('.left');
     let scrollLeft =
        document.body.scrollLeft || document.documentElement.scrollLeft;

       left.style.transform ='translateX(-' + scrollLeft+ 'px)';
    },
    toHome() {
      this.$router.push("/home");
    },
    getArticle() {
      //用假数据请求
      //后台接口返回数据格式
      //list文章详情,评论数量应该是通过后台请求，然后整合到项目上的
      let count = 5;
      let articles = {
        list: [
          {
            id: 1,
            title: "了解和使用promise",
            content: "我个人理解异步就是模拟多线程，不过因为js是单线程，所以是js同步执行线程后面的另一段线程，执行完同步后再执行异步",
            author: "a",
            data: "2022-05-22",
            like: 21,
            comment: 5,
            img: "",
          },
          {
            id: 2,
            title: "aa",
            content: "test",
            author: "a",
            data: "2022-05-22",
            like: 21,
            comment: 0,
            img: "",
          },
          {
            id: 2,
            title: "aa",
            content: "test",
            author: "a",
            data: "2022-05-22",
            like: 21,
            comment: 0,
            img: "",
          },
          {
            id: 2,
            title: "aa",
            content: "test",
            author: "a",
            data: "2022-05-22",
            like: 21,
            comment: 0,
            img: "",
          },
        ],
        code: 200,
      };
      this.articles.pages = articles.list.length + 1 / count;
      //总页数
      this.articles.list = articles.list;
    },
  },
};
</script>

<style lang="scss" scoped>
#home {
  margin: 0 auto;
  width: 1100px;
  
}

.left {
  box-shadow: -5px 0px 12px -5px #464662d4;
  background-color: var(--orange);
  position: fixed;
  top: 0;
  width: 250px;

  height: 100vh;
}
.right {
  background-color: var(--bgWhite);
  margin-left: 250px;
    box-shadow: 5px 0px 12px -5px #464662d4;
}
.rightTop {
  background-color: var(--bgNav);
  width: 100%;
  border-top: 0;
  height: 40px;
  line-height: 40px;
  color: var(--bgContent);
  i {
    font-size: 18px;
  }
  p {
    display: inline-block;
    float: left;
    letter-spacing: 1px;
    font-weight: 400;
    margin-left: 30px;
    font-size: 18px;
  }
}
.content {
  background-color: #dce0e8;
  width: 100%;

  color: var(--font);
}

.icon-jiqiren {
  float: left;
  position: relative;
  left: 10px;
  &:hover {
    opacity: 0.8;
  }
}
</style>