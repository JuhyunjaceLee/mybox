<template>
  <div>
    <DefaultLayout>
      <template v-slot:header>
        <header class="header">
          <div class="account-wrap">
            <div class="input-wrap">
              <input
                class="search-input"
                type="text"
                placeholder="제목, 감독으로 검색"
                autofocus
              />
              <button class="search-btn">
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
        <main class="main">
          <div class="main-wrap">
            <div class="main-content">
              <h2 class="main-title">검색결과</h2>
              <section>
                <div class="list-wrap">
                  <ul class="list-container">
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
@import url("../assets/style/search_header.css");
@import url("../assets/style/homeMain.css");
@import url("../assets/style/footer.css");
</style>
