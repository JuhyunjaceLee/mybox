<template>
  <div>
    <section>
      <h2 class="section-title">MOVIE TOP 20</h2>
      <div class="home-list-wrap">
        <button class="prev-btn prev1"></button>
        <ul class="home-list-container">
          <li
            v-for="(item, index) in movieTopList"
            :key="item.id"
            class="poster-list"
          >
            <span class="ranking">{{ index + 1 }}</span>
            <router-link
              :to="`/movie/${item.id}?type=movie`"
              class="poster-link"
            >
              <img
                class="poster-img"
                :src="`https://image.tmdb.org/t/p/w300/${item.poster_path}`"
                alt="poster_img"
              />
            </router-link>
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
          <li v-for="item in nowPlaying" :key="item.id" class="poster-list">
            <router-link
              :to="`/movie/${item.id}?type=movie`"
              class="poster-link"
            >
              <img
                class="poster-img"
                :src="`https://image.tmdb.org/t/p/w300/${item.poster_path}`"
                alt="poster_img"
              />
            </router-link>
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
          <li v-for="item in upComing" :key="item.id" class="poster-list">
            <router-link
              :to="`/movie/${item.id}?type=movie`"
              class="poster-link"
            >
              <img
                class="poster-img"
                :src="`https://image.tmdb.org/t/p/w300/${item.poster_path}`"
                alt="poster_img"
              />
            </router-link>
          </li>
        </ul>
        <button class="next-btn"></button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      movieTopList: [],
      nowPlaying: [],
      upComing: [],
    };
  },
  async created() {
    const top = await axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/top_rated?api_key=075ec9542e8f0d1c7b9364e54d4351d8",
    });
    this.movieTopList = top.data.results;
    console.log(this.movieTopList);

    const now = await axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/now_playing?api_key=075ec9542e8f0d1c7b9364e54d4351d8",
    });
    this.nowPlaying = now.data.results;
    console.log(this.nowPlaying);

    const coming = await axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/upcoming?api_key=075ec9542e8f0d1c7b9364e54d4351d8",
    });
    this.upComing = coming.data.results;
    console.log(this.nowPlaying);
  },
};
</script>

<style lang="scss" scoped></style>
