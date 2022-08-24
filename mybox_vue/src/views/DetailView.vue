<template>
  <div>
    <div class="container">
      <nav class="nav">
        <router-link to="/" class="nav-link">
          <img
            class="nav-logo-img"
            src="../assets/img/mybox_logo.png"
            alt="logo_image"
          />
        </router-link>
        <section class="side-container">
          <ul class="side-list-wrap">
            <li class="side-list active">
              <router-link to="/" class="side-link">
                <img class="side-img" src="../assets/img/home.svg" alt="home" />
                <p class="side-txt">홈</p>
              </router-link>
            </li>
            <li class="side-list">
              <router-link to="/search" class="side-link">
                <img
                  class="side-img"
                  src="../assets/img/search.svg"
                  alt="search"
                />
                <p class="side-txt">찾기</p>
              </router-link>
            </li>
            <li class="side-list">
              <router-link to="/rating" class="side-link">
                <img
                  class="side-img"
                  src="../assets/img/star.svg"
                  alt="rating"
                />
                <p class="side-txt">평점보기</p>
              </router-link>
            </li>
            <li class="side-list">
              <a class="side-link" href="#" onclick="alert('준비중입니다.')">
                <img
                  class="side-img"
                  src="../assets/img/storage.svg"
                  alt="storage"
                />
                <p class="side-txt">보관함</p>
              </a>
            </li>
            <li class="side-list">
              <a class="side-link" href="#" onclick="alert('준비중입니다.')">
                <img
                  class="side-img"
                  src="../assets/img/checkbox.svg"
                  alt="contents"
                />
                <p class="side-txt">다 본 콘텐츠</p>
              </a>
            </li>
          </ul>
        </section>
      </nav>
      <header class="header">
        <div class="account-wrap">
          <div></div>
          <div class="acoount-content">
            <a class="account" href="#">
              <img
                class="account-img"
                src="../assets/img/account.svg"
                alt="account"
              />
            </a>
          </div>
        </div>
      </header>
    </div>
    <div class="contents">
      <main>
        <section class="detail-movie-contain">
          <div class="detail-movie-wrap">
            <img
              class="detail-img"
              :src="`https://image.tmdb.org/t/p/w300/${detailData.poster_path}`"
              alt=""
            />
            <div class="detail-section">
              <h1 class="movie-title">{{ detailData.original_title }}</h1>
              <div class="detail-explain-wrap">
                <p class="detail-explain">
                  <span>{{ detailData.release_date }}</span>
                  ·
                  <span>{{ detailData.runtime }} 분</span>
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
                <button class="active">
                  <a href="./detailPage.html">작품 정보</a>
                </button>
              </li>
              <li>
                <button>
                  <a href="./detailSimilar.html">관련 작품</a>
                </button>
              </li>
            </ul>
          </div>
          <div class="movie-info-credit">
            <div>
              <h2>감독/출연</h2>
            </div>
            <div class="credit-wrap">
              <div>
                <div class="credit-intro-wrap">
                  <img src="./../assets/img/actor.jpg" alt="" />
                  <div class="credit-intro">
                    <p class="credit-name">라이언 고슬링</p>
                    <p class="credit-role">라이언 고슬링</p>
                  </div>
                </div>
              </div>
              <div>
                <div class="credit-intro-wrap">
                  <img src="./../assets/img/actor.jpg" alt="" />
                  <div class="credit-intro">
                    <p class="credit-name">NAME</p>
                    <p class="credit-role">ROLE</p>
                  </div>
                </div>
              </div>
              <div>
                <div class="credit-intro-wrap">
                  <img src="./../assets/img/actor.jpg" alt="" />
                  <div class="credit-intro">
                    <p class="credit-name">NAME</p>
                    <p class="credit-role">ROLE</p>
                  </div>
                </div>
              </div>
              <div>
                <div class="credit-intro-wrap">
                  <img src="./../assets/img/actor.jpg" alt="" />
                  <div class="credit-intro">
                    <p class="credit-name">NAME</p>
                    <p class="credit-role">ROLE</p>
                  </div>
                </div>
              </div>
              <div>
                <div class="credit-intro-wrap">
                  <img src="./../assets/img/actor.jpg" alt="" />
                  <div class="credit-intro">
                    <p class="credit-name">NAME</p>
                    <p class="credit-role">ROLE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer class="footer">
        <ul class="footer-service">
          <li>마이박스 서비스 이용약관</li>
          <li>개인정보 처리 방침</li>
          <li>마이박스 서비스 이용약관</li>
          <li>고객센터</li>
          <li>채용정보</li>
        </ul>
        <ul class="footer-cs">
          <li>
            <span>고객센터(이용 및 결제 문의)</span>
            <span>heyjace777@gmail.com</span>
          </li>
          <li>
            <span>제휴 및 대외 협력</span>
            <span>heyjace777@gmail.com</span>
          </li>
          <li>
            <span>B2B 이용권 구매 문의</span>
            <span>heyjace777@gmail.com</span>
          </li>
        </ul>
        <ul class="footer-intro">
          <li>마이박스-MyBox</li>
          <li>사업자등록번호 1234-123-123</li>
          <li>통신판매업 신고번호</li>
        </ul>
        <div class="icon-container">
          <a href="https://www.facebook.com/watchaKR/">
            <img src="../assets/img/facebook.svg" alt="" />
          </a>
          <a href="https://twitter.com/watcha_kr">
            <img src="../assets/img/twitter.svg" alt="" />
          </a>
          <a href="https://www.instagram.com/watcha_kr/">
            <img src="../assets/img/instagram.svg" alt="" />
          </a>
          <a href="./home.html">
            <img src="../assets/img/footer_home.svg" alt="home" />
          </a>
        </div>
        <div class="footer-copyright">
          <a href="./home.html">
            <img class="logo-small" src="../assets/img/mybox_logo.png" alt="" />
          </a>
          <span>Copyright ©</span>
          <span>2022</span>
          <span>by</span>
          <span><b>MYBOX, Inc.</b></span>
          <span>All rights reserved.</span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      detailData: [],
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
