<template>
  <div>
    <section>
      <h2 class="section-title">TV TOP 20</h2>
      <div class="home-list-wrap">
        <button class="prev-btn prev1"></button>
        <ul class="home-list-container">
          <li
            v-for="(item, index) in tvTopList"
            :key="item.id"
            class="poster-list"
          >
            <span class="ranking">{{ index + 1 }}</span>
            <router-link :to="`/tv/${item.id}?type=tv`" class="poster-link">
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
      <h2 class="section-title">ON AIR</h2>
      <div class="home-list-wrap">
        <button class="prev-btn"></button>
        <ul class="home-list-container">
          <li v-for="item in onAirList" :key="item.id" class="poster-list">
            <router-link :to="`/tv/${item.id}?type=tv`" class="poster-link">
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
      <h2 class="section-title">화제 방영작</h2>
      <div class="home-list-wrap">
        <button class="prev-btn"></button>
        <ul class="home-list-container">
          <li v-for="item in popularList" :key="item.id" class="poster-list">
            <router-link :to="`/tv/${item.id}?type=tv`" class="poster-link">
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
      tvTopList: [],
      onAirList: [],
      popularList: [],
    };
  },
  async created() {
    const top = await axios({
      method: "get",
      url: "https://api.themoviedb.org/3/tv/top_rated?api_key=075ec9542e8f0d1c7b9364e54d4351d8",
    });
    this.tvTopList = top.data.results;
    console.log(this.tvTopList);

    const onAir = await axios({
      method: "get",
      url: "https://api.themoviedb.org/3/tv/on_the_air?api_key=075ec9542e8f0d1c7b9364e54d4351d8",
    });
    this.onAirList = onAir.data.results;
    console.log(this.onAirList);

    const popular = await axios({
      method: "get",
      url: "https://api.themoviedb.org/3/tv/popular?api_key=075ec9542e8f0d1c7b9364e54d4351d8",
    });
    this.popularList = popular.data.results;
    console.log(this.popularList);
  },
};
</script>

<style lang="scss" scoped></style>
