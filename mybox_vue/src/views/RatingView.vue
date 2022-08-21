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
                  <button class="rating-btn">
                    <span>평점 높은 순</span>
                    <img
                      class="rating-btn-img"
                      src="../assets/img/arrow_bottom.svg"
                      alt=""
                    />
                  </button>
                  <ul class="rating-dropdown">
                    <li>
                      <button class="rating-dropdown-btn">
                        <span>평점 높은 순</span>
                      </button>
                    </li>
                    <li>
                      <button class="rating-dropdown-btn">
                        <span>평점 낮은 순</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <section>
                <div class="list-wrap">
                  <ul class="list-container">
                    <div>
                      <li class="poster-list">
                        <a class="poster-link" href="">
                          <img
                            class="poster-img"
                            src="../assets/img/movie_poster.jpg"
                            alt="poster_img"
                          />
                        </a>
                      </li>
                      <p class="rating-number">평점 4.8</p>
                    </div>
                    <div>
                      <li class="poster-list">
                        <a class="poster-link" href="">
                          <img
                            class="poster-img"
                            src="../assets/img/movie_poster.jpg"
                            alt="poster_img"
                          />
                        </a>
                      </li>
                      <p class="rating-number">평점 4.8</p>
                    </div>
                    <div>
                      <li class="poster-list">
                        <a class="poster-link" href="">
                          <img
                            class="poster-img"
                            src="../assets/img/movie_poster.jpg"
                            alt="poster_img"
                          />
                        </a>
                      </li>
                      <p class="rating-number">평점 4.8</p>
                    </div>
                    <div>
                      <li class="poster-list">
                        <a class="poster-link" href="">
                          <img
                            class="poster-img"
                            src="../assets/img/movie_poster.jpg"
                            alt="poster_img"
                          />
                        </a>
                      </li>
                      <p class="rating-number">평점 4.8</p>
                    </div>
                    <div>
                      <li class="poster-list">
                        <a class="poster-link" href="">
                          <img
                            class="poster-img"
                            src="../assets/img/movie_poster.jpg"
                            alt="poster_img"
                          />
                        </a>
                      </li>
                      <p class="rating-number">평점 4.8</p>
                    </div>
                    <div>
                      <li class="poster-list">
                        <a class="poster-link" href="">
                          <img
                            class="poster-img"
                            src="../assets/img/movie_poster.jpg"
                            alt="poster_img"
                          />
                        </a>
                      </li>
                      <p class="rating-number">평점 4.8</p>
                    </div>
                    <div>
                      <li class="poster-list">
                        <a class="poster-link" href="">
                          <img
                            class="poster-img"
                            src="../assets/img/movie_poster.jpg"
                            alt="poster_img"
                          />
                        </a>
                      </li>
                      <p class="rating-number">평점 4.8</p>
                    </div>
                    <div>
                      <li class="poster-list">
                        <a class="poster-link" href="">
                          <img
                            class="poster-img"
                            src="../assets/img/movie_poster.jpg"
                            alt="poster_img"
                          />
                        </a>
                      </li>
                      <p class="rating-number">평점 4.8</p>
                    </div>
                    <div>
                      <li class="poster-list">
                        <a class="poster-link" href="">
                          <img
                            class="poster-img"
                            src="../assets/img/movie_poster.jpg"
                            alt="poster_img"
                          />
                        </a>
                      </li>
                      <p class="rating-number">평점 4.8</p>
                    </div>
                    <div>
                      <li class="poster-list">
                        <a class="poster-link" href="">
                          <img
                            class="poster-img"
                            src="../assets/img/movie_poster.jpg"
                            alt="poster_img"
                          />
                        </a>
                      </li>
                      <p class="rating-number">평점 4.8</p>
                    </div>
                    <div>
                      <li class="poster-list">
                        <a class="poster-link" href="">
                          <img
                            class="poster-img"
                            src="../assets/img/movie_poster.jpg"
                            alt="poster_img"
                          />
                        </a>
                      </li>
                      <p class="rating-number">평점 4.8</p>
                    </div>
                    <div>
                      <li class="poster-list">
                        <a class="poster-link" href="">
                          <img
                            class="poster-img"
                            src="../assets/img/movie_poster.jpg"
                            alt="poster_img"
                          />
                        </a>
                      </li>
                      <p class="rating-number">평점 4.8</p>
                    </div>
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
@import url("../assets/style/homeMain.css");
@import url("../assets/style/ratingMain.css");
@import url("../assets/style/footer.css");
</style>
