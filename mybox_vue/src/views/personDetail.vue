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
        <section class="person-detail-contents">
          <div class="person-detail-wrap">
            <img
              v-if="personData.profile_path !== null"
              class="person-img"
              :src="`https://image.tmdb.org/t/p/w300/${personData.profile_path}`"
              alt="person-img"
            />
            <img
              class="person-no-img"
              v-else
              src="../assets/img/no_img.svg"
              alt="profile_img"
            />

            <div class="person-info-contents">
              <div class="person-info-wrap">
                <span class="person-info-a">이름</span>
                <span class="person-info-b">{{ personData.name }}</span>
              </div>
              <div class="person-info-wrap">
                <span class="person-info-a">생일</span>
                <span class="person-info-b">{{ personData.birthday }}</span>
              </div>
              <div class="person-info-wrap">
                <span class="person-info-a">출생지</span>
                <span class="person-info-b">{{
                  personData.place_of_birth
                }}</span>
              </div>
              <div class="person-info-wrap">
                <span class="person-info-a">유명분야</span>
                <span class="person-info-b">{{
                  personData.known_for_department
                }}</span>
              </div>
            </div>
          </div>
        </section>
      </template>
    </DefaultLayout>
  </div>
</template>

<script>
import axios from "axios";
import DefaultLayout from "@/components/DefaultLayout.vue";

export default {
  components: {
    DefaultLayout,
  },
  data() {
    return {
      personData: [],
    };
  },
  async created() {
    const person = await axios({
      method: "get",
      url: `https://api.themoviedb.org/3/person/${this.$route.params.id}?api_key=3d6c850fedd64a507e51cfb2335f305c`,
    });
    this.personData = person.data;
    console.log(this.personData);
  },
};
</script>

<style scoped>
@import url("../assets/style/layout.css");
@import url("../assets/style/nav.css");
@import url("../assets/style/detail_header.css");
@import url("../assets/style/personDetail.css");
@import url("../assets/style/footer.css");
</style>
