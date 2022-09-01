# Movie Site Portfolio (MyBox🎁)

## 프로젝트 URL

<a href="https://stellular-granita-afbdbd.netlify.app/">
<img src="https://user-images.githubusercontent.com/94448281/187569222-561e2865-e562-4331-9fc1-fb6841e37282.png" width="100">
</a>

## 프로젝트 제작기간

2022년 8월 16일 ~ 8월 31일

## 프로젝트 목표

HTML, CSS, JAVASCRIPT, Vue.js 의 학습한 내용과 TMDB API를 활용한 영화 및 TV프로그램 소개 사이트 제작

## SKILLS

<div>
	<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
	<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" />
  <img src="https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=flat&logo=JAVASCRIPT&logoColor=black" />
  <img src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=Vue.js&logoColor=white" />
</div>

## 프로젝트 상세 소개

### 메인페이지
▶영화 컴포넌트 & TV 프로그램 컴포넌트<br/>
- TMDB API를 통해 DATA를 활용하였습니다.
- Swiper라이브러리를 이용하여 carousel 기능을 구현했습니다.

### 디테일페이지
▶작품 정보 컴포넌트<br/>
- 메인 홈 화면에서 클릭한 영화 및 TV프로그램에 대한 상세 정보를 보여줍니다.
- 작품의 제목, 개봉일자/방영일자, 런타임/에피소드, 평점, 줄거리
- 감독은 1명, 출연한 배우는 7명 불러오도록 data를 가공하여 불러왔습니다.

▶관련 작품 컴포넌트<br/>
- 비슷한 작품을 TMDB API를 이용하여 불러왔습니다.
- 작품 클릭 시 작품 정보를 볼 수 있도록 연결했습니다.

### 검색페이지
▶TRENDING 컴포넌트<br/>
- 검색 전 화면은 trend API를 불러와 화면에 보여집니다.

▶SEARCH 컴포넌트<br/>
- 검색한 단어와 검색된 data의 갯수가 보여지고, 영화, tv프로그램, 인물이 검색됩니다.

### 평점페이지
▶MOVIE & TV 컴포넌트<br/>
- 평점 페이지는 movie컴포넌트와 tv프로그램 컴포넌트로 나눴으며, 평점 높은 순으로 보여집니다.

### 로그인페이지 & 회원가입페이지
- Firebase를 연동하여 회원가입과 로그인이 가능하게 구현하였습니다
