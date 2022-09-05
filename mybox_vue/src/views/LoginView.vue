<template>
  <div>
    <LoginLayout>
      <template v-slot:login_header>
        <header>
          <div class="header-wrap">
            <router-link to="/" class="logo-link">
              <img
                class="logo-img"
                src="../assets/img/mybox_logo.png"
                alt="logo"
              />
            </router-link>
            <button class="sign-btn">
              <router-link to="/signup">
                <p>회원가입</p>
              </router-link>
            </button>
          </div>
        </header>
      </template>
      <template v-slot:main>
        <main class="login-main">
          <div class="login-main-wrap">
            <div class="loginmain-title-wrap">
              <h2 class="loginmain-title">로그인</h2>
              <a href="#">
                <p>비밀번호를 잊어버리셨나요?</p>
              </a>
            </div>
            <form class="login-main-form" @submit.prevent>
              <div>
                <input
                  v-model="email"
                  class="input input-email"
                  type="text"
                  placeholder="이메일 (example@gmail.com)"
                  autofocus
                />
              </div>
              <div>
                <input
                  v-model="password"
                  class="input input-pw"
                  type="password"
                  placeholder="비밀번호"
                />
              </div>
              <div class="btn-wrap">
                <button v-on:click="login" class="login-btn">로그인</button>
              </div>
            </form>
            <div class="loginicon-wrap">
              <p class="loginicon-text">다른 방법으로 로그인하기</p>
              <div class="btn-container">
                <button class="btn-login">
                  <img src="../assets/img/kakao_logo.svg" alt="" />
                </button>
                <button class="btn-login">
                  <img src="../assets/img/google_logo.svg" alt="" />
                </button>
                <button class="btn-login">
                  <img src="../assets/img/facebook_logo.svg" alt="" />
                </button>
                <button class="btn-login">
                  <img src="../assets/img/twitter_logo.svg" alt="" />
                </button>
                <button class="btn-login">
                  <img src="../assets/img/apple_logo.svg" alt="" />
                </button>
                <button class="btn-login">
                  <img src="../assets/img/line_logo.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </template>
    </LoginLayout>
  </div>
</template>

<script>
import LoginLayout from "@/components/LoginLayout.vue";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export default {
  components: {
    LoginLayout,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // console.log("reonse ::", userCredential);
          alert(userCredential.user.email.split("@")[0] + "님," + "Welcome!");
          // console.log(userCredential);
          this.$router.push("/");
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
          alert("Oops." + errorMessage);
        });
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          console.log(uid);
        }
      });
    },
  },
};
</script>

<style scoped>
@import url("../assets/style/layout.css");
@import url("../assets/style/loginPage.css");
</style>
