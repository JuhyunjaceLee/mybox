<template>
  <div class="login-contents">
    <header class="login_header">
      <slot name="login_header"></slot>
    </header>
    <main>
      <slot name="main"></slot>
    </main>
    <footer class="login-footer">
      <ul class="login-footer-cs">
        <li>
          고객센터(이용 및 결제 문의) heyjace777@gmail.com •
          01-234-5678(유료)&nbsp;&nbsp;&nbsp;
        </li>
        <li>&nbsp;&nbsp;&nbsp;제휴 및 대외 협력 http://mybox.com</li>
      </ul>
      <ul class="login-footer-intro">
        <li>주식회사 왓챠&nbsp;</li>
        <li>&nbsp;서울 특별시 서초구 강남대로&nbsp;</li>
        <li>&nbsp;사업자등록번호 1234-123-123&nbsp;</li>
        <li>&nbsp;대표번호 01-234-5678&nbsp;</li>
        <li>&nbsp;개인정보 처리 방침&nbsp;</li>
        <li>&nbsp;청소년 보호정책</li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
