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
              <router-link to="/login">
                <p>로그인</p>
              </router-link>
            </button>
          </div>
        </header>
      </template>
      <template v-slot:main>
        <main class="login-main">
          <div class="login-main-wrap">
            <div class="loginmain-title-wrap">
              <h2 class="loginmain-title">회원가입</h2>
            </div>
            <form class="login-main-form" @submit.prevent>
              <div>
                <input
                  class="input input-name"
                  type="name"
                  placeholder="이름 (2자 이상)"
                />
              </div>
              <div>
                <input
                  v-model="email"
                  class="input input-email"
                  type="test"
                  placeholder="이메일 (example@gmail.com)"
                />
              </div>
              <div>
                <input
                  v-model="password"
                  class="input input-pw"
                  type="password"
                  placeholder="영문, 숫자, 특문 중 2개 조합 10자 이상"
                />
              </div>
              <div>
                <ul>
                  <li class="checkbox-list">
                    <label for="checkbox" class="checkbox-wrap">
                      <span class="check active"></span>
                      <input type="checkbox" id="checkbox1" />
                      <p class="checkbox-text">전체 약관에 동의합니다</p>
                    </label>
                  </li>
                  <li class="checkbox-list">
                    <label for="checkbox" class="checkbox-wrap">
                      <span class="check"></span>
                      <input type="checkbox" id="checkbox2" />
                      <p class="checkbox-text">만 14세 이상입니다</p>
                    </label>
                  </li>
                  <li class="checkbox-list">
                    <label for="checkbox" class="checkbox-wrap">
                      <span class="check"></span>
                      <input type="checkbox" id="checkbox3" />
                      <p class="checkbox-text">
                        <a>왓챠피디아 서비스 이용약관</a>에 동의합니다 (필수)
                      </p>
                    </label>
                  </li>
                  <li class="checkbox-list">
                    <label for="checkbox" class="checkbox-wrap">
                      <span class="check"></span>
                      <input type="checkbox" id="checkbox4" />
                      <p class="checkbox-text">
                        <a>왓챠 서비스 이용약관</a>에 동의합니다 (필수)
                      </p>
                    </label>
                  </li>
                  <li class="checkbox-list">
                    <label for="checkbox" class="checkbox-wrap">
                      <span class="check"></span>
                      <input type="checkbox" id="checkbox5" />
                      <p class="checkbox-text">
                        <a>개인정보 수집 및 이용에 대한 안내</a>에 동의합니다
                        (필수)
                      </p>
                    </label>
                  </li>
                  <li class="checkbox-list">
                    <label for="checkbox" class="checkbox-wrap">
                      <span class="check"></span>
                      <input type="checkbox" id="checkbox6" />
                      <p class="checkbox-text">
                        <a>신작 알림 이벤트 정보 수신</a>에 동의합니다 (선택)
                      </p>
                    </label>
                  </li>
                </ul>
              </div>
              <div class="btn-wrap">
                <button @click="signUp" class="login-btn">계정 생성하기</button>
              </div>
            </form>
            <div class="loginicon-wrap">
              <p class="loginicon-text">
                결제 정보요? 충분히 둘러보시고 입력해도 늦지 않아요
              </p>
            </div>
          </div>
        </main>
      </template>
    </LoginLayout>
  </div>
</template>

<script>
import LoginLayout from "@/components/LoginLayout.vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
    signUp() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          alert(userCredential.user.email.split("@")[0] + "님," + "Welcome!");
          console.log(userCredential);
          this.$router.push("/");
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert("Oops." + errorMessage);
        });
    },
  },
};
</script>

<style scoped>
@import url("../assets/style/layout.css");
@import url("../assets/style/loginPage.css");
@import url("../assets/style/signupPage.css");
</style>
