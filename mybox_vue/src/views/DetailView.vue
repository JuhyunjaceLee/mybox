<template>
  <div>
    <DefaultLayout>
      <template v-slot:header>
        <header class="header">
          <div class="account-wrap">
            <div></div>
            <div class="acoount-content">
              <router-link to="/login" class="account">
                <img
                  class="account-img"
                  src="../assets/img/account.svg"
                  alt="account"
                />
              </router-link>
            </div>
          </div>
        </header>
      </template>
      <template v-slot:main>
        <section class="detail-movie-contain">
          <div class="detail-movie-wrap">
            <img
              class="detail-img"
              :src="`https://image.tmdb.org/t/p/w300/${detailData.poster_path}`"
              alt=""
            />
            <div class="detail-section">
              <h1 v-if="detailData.original_title" class="movie-title">
                {{ detailData.original_title }}
              </h1>
              <h1 v-else class="movie-title">{{ detailData.original_name }}</h1>
              <div class="detail-explain-wrap">
                <p class="detail-explain">
                  <span>{{ detailData.release_date }}</span>
                  <span>{{ detailData.first_air_date }}</span>

                  ·
                  <span v-if="detailData.runtime"
                    >{{ detailData.runtime }}분</span
                  >
                  <span v-else>총 {{ detailData.number_of_episodes }}화</span>
                  ·
                  <span
                    >평점
                    {{ parseFloat(detailData.vote_average).toFixed(1) }}</span
                  >
                  <span></span>
                  <span class="age">12</span>
                </p>
                <p class="story">
                  {{ detailData.overview }}
                </p>
                <div class="play-wrap">
                  <div class="play-bar">
                    <div class="play"></div>
                  </div>
                  <span>2시간 4분 남음</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="button-contain">
          <div class="button-wrap first">
            <button>
              <img src="./../assets/img/play.svg" alt="재생" />
              <span>재생하기</span>
            </button>
            <button>
              <img src="./../assets/img/talk.svg" alt="다른사람과 같이보기" />
              <span>같이보기</span>
            </button>
          </div>
          <div class="button-wrap second">
            <button>
              <img src="./../assets/img/heart.svg" alt="찜하기" />
              <span>보고싶어요</span>
            </button>
            <button class="btn-etc">
              <img src="./../assets/img/threedot.svg" alt="" />
            </button>
          </div>
        </section>
        <section class="movie-info-content">
          <div class="movie-info-header">
            <ul>
              <li>
                <button
                  @click="btn = 'info'"
                  :class="{ active: btn === 'info' }"
                >
                  <p>작품 정보</p>
                </button>
              </li>
              <li>
                <button
                  @click="btn = 'similar'"
                  :class="{ active: btn === 'similar' }"
                >
                  <p>관련 작품</p>
                </button>
              </li>
            </ul>
          </div>
          <div class="movie-info-credit">
            <DetailInfo v-if="btn === 'info'"></DetailInfo>
            <DetailSimilar v-if="btn === 'similar'"></DetailSimilar>
          </div>
        </section>
      </template>
    </DefaultLayout>
  </div>
</template>

<script>
import axios from "axios";
import DefaultLayout from "@/components/DefaultLayout.vue";
import DetailInfo from "@/components/DetailInfo.vue";
import DetailSimilar from "@/components/DetailSimilar.vue";
export default {
  components: { DefaultLayout, DetailInfo, DetailSimilar },
  data() {
    return {
      detailData: [],
      btn: "info",
    };
  },
  async created() {
    const type = this.$route.query.type;
    console.log(this.$route);

    const result = await axios({
      method: "get",
      url: `https://api.themoviedb.org/3/${type}/${this.$route.params.id}?api_key=3d6c850fedd64a507e51cfb2335f305c`,
    });
    this.detailData = result.data;
    console.log(this.detailData);
  },
};
</script>

<style scoped>
@import url("../assets/style/layout.css");
@import url("../assets/style/nav.css");
@import url("../assets/style/detail_header.css");
@import url("../assets/style/detailMain.css");
@import url("../assets/style/footer.css");
</style>
