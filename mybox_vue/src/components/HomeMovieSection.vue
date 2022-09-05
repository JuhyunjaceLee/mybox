<template>
  <div>
    <section>
      <h2 class="section-title">MOVIE TOP 20</h2>
      <div class="home-list-wrap">
        <button @click="prev1" class="prev-btn"></button>
        <swiper :options="swiperOption" ref="sw1" class="home-list-container">
          <swiper-slide
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
          </swiper-slide>
        </swiper>
        <button @click="next1" class="next-btn"></button>
      </div>
    </section>
    <section>
      <h2 class="section-title">NOW PLAYING</h2>
      <div class="home-list-wrap">
        <button @click="prev2" class="prev-btn"></button>
        <swiper :options="swiperOption" ref="sw2" class="home-list-container">
          <swiper-slide
            v-for="item in nowPlaying"
            :key="item.id"
            class="poster-list"
          >
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
          </swiper-slide>
        </swiper>
        <button @click="next2" class="next-btn"></button>
      </div>
    </section>
    <section>
      <h2 class="section-title">개봉 예정작</h2>
      <div class="home-list-wrap">
        <button @click="prev3" class="prev-btn"></button>
        <swiper :options="swiperOption" ref="sw3" class="home-list-container">
          <swiper-slide
            v-for="item in upComing"
            :key="item.id"
            class="poster-list"
          >
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
          </swiper-slide>
        </swiper>
        <button @click="next3" class="next-btn"></button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      movieTopList: [],
      nowPlaying: [],
      upComing: [],
      index: 0,
      swiperOption: {
        slidesPerView: 8,
        loop: true,
      },
    };
  },
  async created() {
    const top = await axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/top_rated?api_key=075ec9542e8f0d1c7b9364e54d4351d8",
    });
    this.movieTopList = top.data.results;
    // console.log(this.movieTopList);

    const now = await axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/now_playing?api_key=075ec9542e8f0d1c7b9364e54d4351d8",
    });
    this.nowPlaying = now.data.results;
    // console.log(this.nowPlaying);

    const coming = await axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/upcoming?api_key=075ec9542e8f0d1c7b9364e54d4351d8",
    });
    this.upComing = coming.data.results;
    // console.log(this.nowPlaying);
  },
  mounted() {
    this.$refs.sw1.$swiper.slideTo(9);
    // console.log(this.$refs.sw1.$swiper);
  },
  methods: {
    prev1() {
      this.$refs.sw1.$swiper.slidePrev();
    },
    next1() {
      this.$refs.sw1.$swiper.slideNext();
    },
    prev2() {
      this.$refs.sw2.$swiper.slidePrev();
    },
    next2() {
      this.$refs.sw2.$swiper.slideNext();
    },
    prev3() {
      this.$refs.sw3.$swiper.slidePrev();
    },
    next3() {
      this.$refs.sw3.$swiper.slideNext();
    },
  },
};
</script>

<style lang="scss" scoped></style>
