<template>
  <div class="list-wrap">
    <ul class="list-container">
      <li v-for="item in similarMovieList" :key="item.id" class="poster-list">
        <router-link
          :to="`/${$route.query.type}/${item.id}?type=${$route.query.type}`"
        >
          <img
            class="poster-img"
            :src="`https://image.tmdb.org/t/p/w300/${item.poster_path}`"
            alt="poster_img"
          />
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
      similarMovieList: [],
    };
  },
  async created() {
    const similar = await axios({
      method: "get",
      url: `https://api.themoviedb.org/3/${this.$route.query.type}/${this.$route.params.id}/similar?api_key=075ec9542e8f0d1c7b9364e54d4351d8`,
    });
    this.similarMovieList = similar.data.results;
    console.log(this.$route.query);
  },
};
</script>

<style lang="scss" scoped></style>
