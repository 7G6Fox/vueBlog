<template>
  <nav class="left-nav">
    <img :src="person" alt="头像" />
    <h4>7G6Fox's Blog</h4>
    <div class="info row_flex">
      <a href="https://github.com/7G6Fox?tab=repositories">
        <i class="iconfont icon-github"></i>
        Github
      </a>
      <a href="https://blog.csdn.net/qq_42312396?type=blog">
        <i class="iconfont icon-csdn"></i>
        CSDN
      </a>
      <a href="mailto:1046944336@qq.com">
        <i class="iconfont icon-email"></i>
        Email
      </a>
    </div>

    <div class="col_flex">
      <p class="nav-title">导航</p>

      <ul class="nav-list">
        <li>
          <router-link to="article">
            <i class="iconfont icon-shouye"> </i>
            首页
          </router-link>
        </li>
        <li>
          <router-link to="item">
            <i class="iconfont icon-chilun"> </i>
            项目</router-link
          >
        </li>
        <li>
          <router-link to="tag">
            <i class="iconfont icon-fenlei"> </i>
            分类</router-link
          >
        </li>
        <li>
          <router-link to="comment">
            <i class="iconfont icon-pinglun"> </i>
            留言</router-link
          >
        </li>
      </ul>

      <p class="nav-title">个人</p>
      <ul class="nav-list">
        <li>
          <router-link to="/picture">
            <i class="iconfont icon-erji"> </i>
            生活</router-link
          >
        </li>

        <li>
          <router-link to="/mark">
            <i class="iconfont icon-daohang1"> </i>
            收藏</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "leftNav",
  data() {
    return {
      person: require("assets/logo.svg"),
    };
  },
};
</script>

<style lang="scss" scoped>
nav {
  height: 100%;
  font-size: 12px;
  padding: 20px 10px;
  text-align: center;
  color: var(--deepOrange);
  img {
    border-radius: 50%;
    width: 100px;
  }
  h4 {
    margin: 10px;
    letter-spacing: -1px;
  }
  .info {
    justify-content: space-around;
    text-align: center;
    padding: 12px 0;
    font-family: Helvetica;
    a {
      color: var(--deepOrange);
      transition: transform 0.4s;
      position: relative;
    }
    a:hover {
      //将原本颜色变透明
      color: transparent !important;
      display: block;
      transform: scale(1.2);
      position: relative;
      animation: spotlight 5s infinite;
      background: linear-gradient(90deg, #ff2a2a, #c613f9, #71d7ff, #ff2a2a);
      background-size: 400%;
      background-clip: text;
      // 兼容webkit内核
      -webkit-background-clip: text;
    }
    @keyframes spotlight {
      0% {
        background-position: 0;
      }

      100% {
        background-position: 400%;
      }
    }

    i {
      display: block;
      width: 50px;
    }
  }

  div.col_flex {
    padding: 12px 10px;
    text-align: left;

    .nav-title {
      color: var(--navAct);
      border-top: solid 1px #9f816b3d;
      padding: 12px 0 5px 0;
      letter-spacing: 3px;
      font-size: 14px;
      width: 100%;
    
    }

    .nav-list {
      padding: 0 18px;
      li {
        height: 30px;
        line-height: 30px;
          &:last-child{
        margin-bottom: 10px;
      }
      }
      a {
        margin: 10px 0;
        color: var(--deepOrange);
        font-size: 14px;
        display: block;
        width: 100%;
        i {
          font-size: 25px;
          padding-right: 12px;
          transition: 0.5s;
        }
      }

      a {
        position: relative;
      }

      a:hover i,
      .router-link-active i {
        display: inline-block;
        transform: translateX(-10px);
      }
      a:hover::after,
      .router-link-active::after {
        content: "";
        position: absolute;
        left: -10px;
        top: 0;
        padding-right: 10px;
        height: 100%;
        width: 100%;
        display: block;
        background-color: var(--navAct);
        opacity: 0.2;
        border-right: 6px solid #000;
      }
    }
  }
}
</style>