<template>
  <div>
    <div>
      <h2>감독/출연</h2>
    </div>
    <div class="credit-wrap">
      <div
        v-for="item in directingsList.slice(0, 1)"
        :key="`crews_${item.credit_id}`"
      >
        <router-link :to="`/person/${item.id}`">
          <div class="credit-intro-wrap">
            <img
              v-if="item.profile_path !== null"
              :src="`https://image.tmdb.org/t/p/w185/${item.profile_path}`"
              alt="profile_img"
            />
            <img v-else src="../assets/img/no_img.svg" alt="profile_img" />
            <div class="credit-intro">
              <p class="credit-name">{{ item.name }}</p>
              <p class="credit-depart">{{ item.department }}</p>
            </div>
          </div>
        </router-link>
      </div>
      <div
        v-for="item in creditsList.slice(0, 7)"
        :key="`credits_${item.credit_id}`"
      >
        <router-link :to="`/person/${item.id}`">
          <div class="credit-intro-wrap">
            <img
              v-if="item.profile_path !== null"
              :src="`https://image.tmdb.org/t/p/w185/${item.profile_path}`"
              alt="profile_img"
            />
            <img v-else src="../assets/img/no_img.svg" alt="profile_img" />
            <div class="credit-intro">
              <p class="credit-name">{{ item.name }}</p>
              <p class="credit-character">{{ item.character }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      creditsList: [],
      directingsList: [],
    };
  },
  async created() {
    const type = this.$route.query.type;
    const credits = await axios({
      method: "get",
      url: `https://api.themoviedb.org/3/${type}/${this.$route.params.id}/credits?api_key=075ec9542e8f0d1c7b9364e54d4351d8`,
    });
    this.creditsList = credits.data.cast;
    // console.log(credits.data);

    const directings = credits.data.crew.filter(
      (v) => v.department === "Directing"
    );
    this.directingsList = directings;
    console.log(directings);
  },
};
</script>

<style lang="scss" scoped></style>
