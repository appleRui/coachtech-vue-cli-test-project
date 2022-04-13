<template>
  <div id="app">
    <button @click="topPage">ECサイトのトップページ</button>
    <button @click="manufactureListPage">商品一覧ページ</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    topPage() {
      this.$router.push({ name: "HomeView" });
    },
    manufactureListPage() {
      this.$router.push({ name: "ManufactureList" });
    },
  },
};
</script>
