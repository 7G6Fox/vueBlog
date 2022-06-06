<template>
  <div class="arti-list">
    <ul>
      <li class="arti col_flex" v-for="item in list" :key="item.key">
        <div class="left">
          <img src="item.img" v-show="item.img" />
        </div>

        <div class="right">
          <h4>{{ item.title }}</h4>
          <p>{{ item.content }}</p>
          <div class="detail row_flex">
            <span><i class="iconfont icon-yonghu"></i>{{item.author}}</span>
            <span><i class="iconfont icon-jiazhuangjiajuleimufill"></i> {{item.data}} </span>
            <span><i class="iconfont icon-sousuoremensousuo"></i> {{item.like}} </span>
            <span><i class="iconfont icon-pinglun"></i>
            <span v-if="item.commt">{{item.commt}}</span>
            <span v-else>暂无评论</span>
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "articleList",
  created() {
    console.log("artiList收到父组件的：", this.list);
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.arti-list {
  width: 90%;
  margin: 20px auto;

  ul {
  }
  .arti {
    justify-content: space-between;
    background-color: var(--bgWhite);
    margin: 20px 0;
    height: 120px;
    border-radius: 10px;
    padding: 20px;
    .left {
      height: 100%;
      border: 1px dashed;
      width: 30%;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .right {
      position:relative;
      width: 65%;
      h4 {
        margin: 10px;
      }
      p,.detail{
        color: gray;
        opacity: 0.8;
        font-size: 14px;
        text-align: left;
      }
      .detail{
        font-size: 12px;
        position: absolute;
        top:105px;
        span{
          padding-right: 15px;
          margin: 0;
          i{
            margin: 0;
            padding-right: 2px;     
          }
        }
      }
    }
    &:hover {
      box-shadow: 0px 0px 10px 0px;
      cursor: pointer;
      h4,.detail i{
        color: var(--fontBlue);
      }
    }
  }
}
</style>