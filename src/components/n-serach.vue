<template>
  <div class="search">
    <input
      :class="{ active: isActive }"
      type="text"
      placeholder="输入关键词搜索"
      @click="lengthAdd"
      @blur="remove"
      v-model="keyword"
    />
    <i class="iconfont icon-sousuo"></i>
  </div>
</template>

<script>
export default {
  name: "nSerach",
  data() {
    return {
      isActive: false,
      keyword: "",
    };
  },
  methods: {
    lengthAdd() {
      this.isActive = true;
    },
    remove() {
      this.isActive = false;
      this.keyword = "";
    },
  },
};
</script>

<style scoped>
.search{
  position: relative;
}
.search input {
  width: 150px;
  height: 20px;
  background-color: transparent;
  color: var(--bgContent);
  border: 2.5px solid var(--bgContent);
  border-radius: 20px;
  transition: all 0.5s;
  font-size: 14px;
  letter-spacing: 1px;
  position: absolute;
  padding-left:10px ;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
}
.search .active {
  width: 250px;
}
.search .active +.icon-sousuo{
 left: calc(30px + 100px);
}
.icon-sousuo {
  transition: all 0.5s;
  font-size: 22px;
  position: relative;
  left: 30px;
  top: 2px;
  color: var(--bgContent);
  cursor: pointer;
}
</style>
