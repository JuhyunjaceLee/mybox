<template>
  <div>
    <DefaultLayout>
      <template v-slot:header>
        <header class="header">
          <div class="account-wrap">
            <div></div>
            <div class="acoount-content">
              <a class="account" href="#">
                <img
                  class="account-img"
                  src="../assets/img/account.svg"
                  alt="account"
                />
              </a>
            </div>
          </div>
        </header>
      </template>
      <template v-slot:main>
        <main class="main">
          <div class="main-wrap">
            <div class="main-content">
              <div class="ranking-header">
                <h2 class="main-title">평점보기</h2>
                <div class="rating-btn-wrap">
                  <button @click="show = !show" class="rating-btn">
                    <span>{{ showText }}</span>
                    <img
                      class="rating-btn-img"
                      src="../assets/img/arrow_bottom.svg"
                      alt=""
                    />
                  </button>
                  <ul v-if="show" class="rating-dropdown">
                    <li @click="showMore('MOVIE'), (btn = 'movie')">MOVIE</li>
                    <li @click="showMore('TV'), (btn = 'tv')">TV</li>
                  </ul>
                </div>
              </div>
              <section>
                <RatingMovie v-if="btn === 'movie'"></RatingMovie>
                <RatingTv v-if="btn === 'tv'"></RatingTv>
              </section>
            </div>
          </div>
        </main>
      </template>
    </DefaultLayout>
  </div>
</template>

<script>
import DefaultLayout from "@/components/DefaultLayout.vue";
import RatingMovie from "@/components/RatingMovie.vue";
import RatingTv from "@/components/RatingTv.vue";

export default {
  components: {
    DefaultLayout,
    RatingMovie,
    RatingTv,
  },
  data() {
    return {
      show: false,
      btn: "movie",
      showText: "MOVIE",
    };
  },
  methods: {
    showMore(string) {
      this.showText = string;
      this.show = false;
    },
  },
};
</script>

<style scoped>
@import url("../assets/style/layout.css");
@import url("../assets/style/nav.css");
@import url("../assets/style/header.css");
@import url("../assets/style/homeMain.css");
@import url("../assets/style/ratingMain.css");
@import url("../assets/style/footer.css");
</style>
