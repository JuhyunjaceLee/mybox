<template>
  <div class="list-wrap">
    <ul class="list-container">
      <li
        v-for="item in tvRatingList"
        :key="item.id"
        class="poster-list rating-poster-list"
      >
        <router-link :to="`/tv/${item.id}?type=tv`">
          <img
            class="poster-img"
            :src="`https://image.tmdb.org/t/p/w185/${item.poster_path}`"
            alt="poster_img"
          />
          <p class="rating-number">
            <span>평점:</span>
            <span>{{ item.vote_average }}</span>
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tvRatingList: [],
    };
  },
  async created() {
    const rates = await axios({
      method: "get",
      url: "https://api.themoviedb.org/3/tv/top_rated?api_key=075ec9542e8f0d1c7b9364e54d4351d8",
    });
    // console.log(rates.data);
    this.tvRatingList = rates.data.results;
  },
};
</script>

<style lang="scss" scoped></style>
