<template>
  <div>
    <DefaultLayout>
      <template v-slot:header>
        <header class="header">
          <div class="account-wrap">
            <div></div>
            <div class="acoount-content">
              <router-link to="/login" class="account" href="login.html">
                <img
                  class="account-img"
                  src="../assets/img/account.svg"
                  alt="account"
                />
              </router-link>
            </div>
          </div>
        </header>
      </template>
      <template v-slot:main>
        <main class="main">
          <div class="main-wrap">
            <div class="main-content">
              <h1 class="home-main-title">홈</h1>
              <div class="btn-wrap">
                <button
                  @click="btn = 'movie'"
                  class="btn"
                  :class="{ active: btn === 'movie' }"
                  type="button"
                >
                  영화
                </button>
                <button
                  @click="btn = 'tv'"
                  class="btn"
                  :class="{ active: btn === 'tv' }"
                  type="button"
                >
                  TV 프로그램
                </button>
              </div>
              <HomeMovieSection v-if="btn === 'movie'"></HomeMovieSection>
              <HomeTvSection v-if="btn === 'tv'"></HomeTvSection>
            </div>
          </div>
        </main>
      </template>
    </DefaultLayout>
  </div>
</template>

<script>
import DefaultLayout from "@/components/DefaultLayout.vue";
import HomeMovieSection from "@/components/HomeMovieSection.vue";
import HomeTvSection from "@/components/HomeTvSection.vue";

export default {
  components: {
    DefaultLayout,
    HomeMovieSection,
    HomeTvSection,
  },
  data() {
    return {
      btn: "movie",
    };
  },
};
</script>

<style scoped>
@import url("../assets/style/layout.css");
@import url("../assets/style/nav.css");
@import url("../assets/style/header.css");
@import url("../assets/style/homeMain.css");
@import url("../assets/style/footer.css");
</style>
