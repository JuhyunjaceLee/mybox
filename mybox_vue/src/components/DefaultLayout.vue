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
        <slot name="header"></slot>
      </header>
    </div>
    <div class="contents">
      <main>
        <slot name="main"></slot>
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
        </ul>
        <div class="icon-container">
          <a href="#">
            <img src="../assets/img/facebook.svg" alt="facebook" />
          </a>
          <a href="#">
            <img src="../assets/img/twitter.svg" alt="twitter" />
          </a>
          <a href="#">
            <img src="../assets/img/instagram.svg" alt="instagram" />
          </a>
          <router-link to="/">
            <img src="../assets/img/footer_home.svg" alt="home" />
          </router-link>
        </div>
        <div class="footer-copyright">
          <router-link to="/">
            <img class="logo-small" src="../assets/img/mybox_logo.png" alt="" />
          </router-link>
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
export default {};
</script>

<style lang="scss" scoped></style>
