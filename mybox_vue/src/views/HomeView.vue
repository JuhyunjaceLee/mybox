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
                <button class="btn active">영화</button>
                <button class="btn">TV 프로그램</button>
              </div>
              <section>
                <h2 class="section-title">MOVIE TOP 20</h2>
                <div class="home-list-wrap">
                  <button class="prev-btn prev1"></button>
                  <ul class="home-list-container">
                    <li class="poster-list">
                      <span class="ranking">1</span>
                      <a class="poster-link" href="detailPage.html">
                        <img
                          class="poster-img"
                          src="../assets/img/movie_poster.jpg"
                          alt="poster_img"
                        />
                      </a>
                    </li>
                    <li class="poster-list">
                      <span class="ranking">2</span>
                      <a class="poster-link" href="detailPage.html">
                        <img
                          class="poster-img"
                          src="../assets/img/movie_poster.jpg"
                          alt="poster_img"
                        />
                      </a>
                    </li>
                    <li class="poster-list">
                      <span class="ranking">3</span>
                      <a class="poster-link" href="detailPage.html">
                        <img
                          class="poster-img"
                          src="../assets/img/movie_poster.jpg"
                          alt="poster_img"
                        />
                      </a>
                    </li>
                    <li class="poster-list">
                      <span class="ranking">4</span>
                      <a class="poster-link" href="detailPage.html">
                        <img
                          class="poster-img"
                          src="../assets/img/movie_poster.jpg"
                          alt="poster_img"
                        />
                      </a>
                    </li>
                    <li class="poster-list">
                      <span class="ranking">5</span>
                      <a class="poster-link" href="detailPage.html">
                        <img
                          class="poster-img"
                          src="../assets/img/movie_poster.jpg"
                          alt="poster_img"
                        />
                      </a>
                    </li>
                    <li class="poster-list">
                      <span class="ranking">6</span>
                      <a class="poster-link" href="detailPage.html">
                        <img
                          class="poster-img"
                          src="../assets/img/movie_poster.jpg"
                          alt="poster_img"
                        />
                      </a>
                    </li>
                    <li class="poster-list">
                      <span class="ranking">7</span>
                      <a class="poster-link" href="detailPage.html">
                        <img
                          class="poster-img"
                          src="../assets/img/movie_poster.jpg"
                          alt="poster_img"
                        />
                      </a>
                    </li>
                    <li class="poster-list">
                      <span class="ranking">8</span>
                      <a class="poster-link" href="detailPage.html">
                        <img
                          class="poster-img"
                          src="../assets/img/movie_poster.jpg"
                          alt="poster_img"
                        />
                      </a>
                    </li>
                    <li class="poster-list">
                      <span class="ranking">9</span>
                      <a class="poster-link" href="detailPage.html">
                        <img
                          class="poster-img"
                          src="../assets/img/movie_poster.jpg"
                          alt="poster_img"
                        />
                      </a>
                    </li>
                    <li class="poster-list">
                      <span class="ranking">10</span>
                      <a class="poster-link" href="detailPage.html">
                        <img
                          class="poster-img"
                          src="../assets/img/movie_poster.jpg"
                          alt="poster_img"
                        />
                      </a>
                    </li>
                    <li class="poster-list">
                      <span class="ranking">11</span>
                      <a class="poster-link" href="detailPage.html">
                        <img
                          class="poster-img"
                          src="../assets/img/movie_poster.jpg"
                          alt="poster_img"
                        />
                      </a>
                    </li>
                  </ul>
                  <button class="next-btn next1"></button>
                </div>
              </section>
              <section>
                <h2 class="section-title">NOW PLAYING</h2>
                <div class="home-list-wrap">
                  <button class="prev-btn"></button>
                  <ul class="home-list-container">
                    <li class="poster-list">
                      <a class="poster-link" href="detailPage.html">
                        <img
                          class="poster-img"
                          src="../assets/img/movie_poster.jpg"
                          alt="poster_img"
                        />
                      </a>
                    </li>
                    <li class="poster-list">
                      <a class="poster-link" href="detailPage.html">
                        <img
                          class="poster-img"
                          src="../assets/img/movie_poster.jpg"
                          alt="poster_img"
                        />
                      </a>
                    </li>
                    <li class="poster-list">
                      <a class="poster-link" href="detailPage.html">
                        <img
                          class="poster-img"
                          src="../assets/img/movie_poster.jpg"
                          alt="poster_img"
                        />
                      </a>
                    </li>
                    <li class="poster-list">
                      <a class="poster-link" href="detailPage.html">
                        <img
                          class="poster-img"
                          src="../assets/img/movie_poster.jpg"
                          alt="poster_img"
                        />
                      </a>
                    </li>
                    <li class="poster-list">
                      <a class="poster-link" href="detailPage.html">
                        <img
                          class="poster-img"
                          src="../assets/img/movie_poster.jpg"
                          alt="poster_img"
                        />
                      </a>
                    </li>
                    <li class="poster-list">
                      <a class="poster-link" href="detailPage.html">
                        <img
                          class="poster-img"
                          src="../assets/img/movie_poster.jpg"
                          alt="poster_img"
                        />
                      </a>
                    </li>
                    <li class="poster-list">
                      <a class="poster-link" href="detailPage.html">
                        <img
                          class="poster-img"
                          src="../assets/img/movie_poster.jpg"
                          alt="poster_img"
                        />
                      </a>
                    </li>
                    <li class="poster-list">
                      <a class="poster-link" href="detailPage.html">
                        <img
                          class="poster-img"
                          src="../assets/img/movie_poster.jpg"
                          alt="poster_img"
                        />
                      </a>
                    </li>
                  </ul>
                  <button class="next-btn"></button>
                </div>
              </section>
              <section>
                <h2 class="section-title">개봉 예정작</h2>
                <div class="home-list-wrap">
                  <button class="prev-btn"></button>
                  <ul class="home-list-container">
                    <li class="poster-list">
                      <a class="poster-link" href="detailPage.html">
                        <img
                          class="poster-img"
                          src="../assets/img/movie_poster.jpg"
                          alt="poster_img"
                        />
                      </a>
                    </li>
                    <li class="poster-list">
                      <a class="poster-link" href="detailPage.html">
                        <img
                          class="poster-img"
                          src="../assets/img/movie_poster.jpg"
                          alt="poster_img"
                        />
                      </a>
                    </li>
                    <li class="poster-list">
                      <a class="poster-link" href="detailPage.html">
                        <img
                          class="poster-img"
                          src="../assets/img/movie_poster.jpg"
                          alt="poster_img"
                        />
                      </a>
                    </li>
                    <li class="poster-list">
                      <a class="poster-link" href="detailPage.html">
                        <img
                          class="poster-img"
                          src="../assets/img/movie_poster.jpg"
                          alt="poster_img"
                        />
                      </a>
                    </li>
                    <li class="poster-list">
                      <a class="poster-link" href="detailPage.html">
                        <img
                          class="poster-img"
                          src="../assets/img/movie_poster.jpg"
                          alt="poster_img"
                        />
                      </a>
                    </li>
                    <li class="poster-list">
                      <a class="poster-link" href="detailPage.html">
                        <img
                          class="poster-img"
                          src="../assets/img/movie_poster.jpg"
                          alt="poster_img"
                        />
                      </a>
                    </li>
                    <li class="poster-list">
                      <a class="poster-link" href="detailPage.html">
                        <img
                          class="poster-img"
                          src="../assets/img/movie_poster.jpg"
                          alt="poster_img"
                        />
                      </a>
                    </li>
                    <li class="poster-list">
                      <a class="poster-link" href="detailPage.html">
                        <img
                          class="poster-img"
                          src="../assets/img/movie_poster.jpg"
                          alt="poster_img"
                        />
                      </a>
                    </li>
                  </ul>
                  <button class="next-btn"></button>
                </div>
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

export default {
  components: {
    DefaultLayout,
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
