<template>
  <div>
    <DefaultLayout>
      <template v-slot:header>
        <header class="header">
          <div class="account-wrap">
            <div class="input-wrap">
              <input
                @keypress.enter="searchGo"
                v-model="searchKeyword"
                ref="search"
                class="search-input"
                type="text"
                placeholder="제목, 감독으로 검색"
                autofocus
              />
              <button @click="searchGo" class="search-btn">
                <img
                  class="search-img"
                  src="../assets/img/search_gray.svg"
                  alt=""
                />
              </button>
            </div>
            <div class="acoount-content">
              <a class="account" href="#">
                <img src="../assets/img/account.svg" alt="account" />
              </a>
            </div>
          </div>
        </header>
      </template>
      <template v-slot:main>
        <SearchTrend v-if="!searchAction"></SearchTrend>
        <SearchMain
          ref="searchMain"
          v-else
          :searchKeyword="searchKeyword"
        ></SearchMain>
      </template>
    </DefaultLayout>
  </div>
</template>

<script>
import DefaultLayout from "@/components/DefaultLayout.vue";
import SearchMain from "@/components/SearchMain.vue";
import SearchTrend from "@/components/SearchTrend.vue";

export default {
  components: {
    DefaultLayout,
    SearchMain,
    SearchTrend,
  },
  data() {
    return {
      searchKeyword: "",
      searchAction: false,
    };
  },

  watch: {
    searchKeyword() {
      if (this.searchKeyword === "") {
        this.searchAction = false;
      }
    },
  },

  mounted() {
    this.$refs.search.focus();
  },

  methods: {
    searchGo() {
      if (this.searchKeyword === "") {
        this.searchAction = false;
      } else {
        this.searchAction = true;
      }
    },
  },
};
</script>

<style scoped>
@import url("../assets/style/layout.css");
@import url("../assets/style/nav.css");
@import url("../assets/style/header.css");
@import url("../assets/style/search_header.css");
@import url("../assets/style/homeMain.css");
@import url("../assets/style/footer.css");
</style>
