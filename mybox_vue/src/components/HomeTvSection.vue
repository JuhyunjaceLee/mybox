<template>
  <div>
    <section>
      <h2 class="section-title">TV TOP 20</h2>
      <div class="home-list-wrap">
        <button @click="prev1" class="prev-btn prev1"></button>
        <swiper :options="swiperOption" ref="sw1" class="home-list-container">
          <swiper-slide
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
          </swiper-slide>
        </swiper>
        <button @click="next1" class="next-btn next1"></button>
      </div>
    </section>
    <section>
      <h2 class="section-title">ON AIR</h2>
      <div class="home-list-wrap">
        <button @click="prev2" class="prev-btn"></button>
        <swiper :options="swiperOption" ref="sw2" class="home-list-container">
          <swiper-slide
            v-for="item in onAirList"
            :key="item.id"
            class="poster-list"
          >
            <router-link :to="`/tv/${item.id}?type=tv`" class="poster-link">
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
      <h2 class="section-title">화제 방영작</h2>
      <div class="home-list-wrap">
        <button @click="prev3" class="prev-btn"></button>
        <swiper :options="swiperOption" ref="sw3" class="home-list-container">
          <swiper-slide
            v-for="item in popularList"
            :key="item.id"
            class="poster-list"
          >
            <router-link :to="`/tv/${item.id}?type=tv`" class="poster-link">
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
      tvTopList: [],
      onAirList: [],
      popularList: [],
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
  mounted() {
    this.$refs.sw1.$swiper.slideTo(9);
    console.log(this.$refs.sw1.$swiper);
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
