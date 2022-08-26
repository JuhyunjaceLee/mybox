<template>
  <main class="main">
    <div class="main-wrap">
      <div class="main-content">
        <h2 class="main-title">
          {{ searchKeyword }}에 대한 검색결과 : 총 {{ total }}편
        </h2>
        <section>
          <div class="list-wrap">
            <ul class="list-container">
              <li v-for="item in searchList" :key="item.id" class="poster-list">
                <router-link
                  :to="`/${item.media_type}/${item.id}?type=${item.media_type}`"
                >
                  <img
                    v-if="item.poster_path && item.poster_path !== null"
                    :src="`https://image.tmdb.org/t/p/w300/${item.poster_path}`"
                    class="poster-img"
                  />
                  <img
                    v-else
                    src="../assets/img/no_poster_image.svg"
                    alt="profile_img"
                    class="poster-img"
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
  props: {
    searchKeyword: {
      type: String,
      default() {
        return "";
      },
    },
  },
  data() {
    return {
      searchList: [],
      total: 0,
    };
  },
  async created() {
    const searchResult = await axios({
      method: "get",
      url: `https://api.themoviedb.org/3/search/multi?api_key=075ec9542e8f0d1c7b9364e54d4351d8&query=${this.searchKeyword}`,
    });
    this.searchList = searchResult.data.results;
    console.log(this.searchList);
    this.total = searchResult.data.total_results;
  },
};
</script>

<style lang="scss" scoped></style>
