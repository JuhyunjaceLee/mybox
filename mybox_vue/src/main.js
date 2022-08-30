import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyBxVPvhaVyqu3c2G1AQDFwbx0515KFsvKM",
  authDomain: "mybox-75818.firebaseapp.com",
  projectId: "mybox-75818",
  storageBucket: "mybox-75818.appspot.com",
  messagingSenderId: "1024813781684",
  appId: "1:1024813781684:web:018cc5090d4a6e1da27de1",
  measurementId: "G-Q4LB9JHPWZ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

console.log(analytics);
console.log(auth);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
