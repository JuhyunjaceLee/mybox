<template>
  <main class="main">
    <div class="main-wrap">
      <div class="main-content">
        <h2 class="main-title">TRENDING!</h2>
        <section>
          <div class="list-wrap">
            <ul class="list-container">
              <li
                v-for="item in trendingList.slice(0, 14)"
                :key="item.id"
                class="poster-list"
              >
                <router-link
                  :to="`/${item.media_type}/${item.id}?type=${item.media_type}`"
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
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      trendingList: [],
    };
  },
  async created() {
    const trend = await axios({
      method: "get",
      url: "https://api.themoviedb.org/3/trending/all/week?api_key=075ec9542e8f0d1c7b9364e54d4351d8",
    });
    this.trendingList = trend.data.results;
    // console.log(this.trendingList);
  },
};
</script>

<style lang="scss" scoped></style>
