<template>
  <div class="article row_flex">
    <div class="left">
      <aMessageVue></aMessageVue>
      <artiListVue :list="list"></artiListVue>
    </div>

    <div class="in-right">
      <hotTopic :articles="list"></hotTopic>
    </div>
  </div>
</template>

<script>
import aMessageVue from "./articleCom/a-message.vue";
import artiListVue from "./articleCom/arti-list.vue";
import hotTopic from '@/components/article/hot-topic'
export default {
  name: "articleList",
  components: { artiListVue, aMessageVue ,hotTopic},
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.list = this.articles;
  },
  props: {
    articles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.article {
  color: var(--font);
}
.in-right {
  right: 0;
  width: 25%;
  border-left: 3px solid gainsboro;
  background-color: var(--bgContent);
}
.left {
  width: 75%;
  flex: 1;
}
</style>