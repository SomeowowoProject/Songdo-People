/* SONGDO & PEOPLE — 최소한의 동작만 (Rams: as little design as possible) */
(function () {
  "use strict";

  /* ① 오늘 날짜 자동 표기 */
  var dateEl = document.getElementById("js-date");
  if (dateEl) {
    var days = ["일", "월", "화", "수", "목", "금", "토"];
    var now = new Date();
    dateEl.textContent =
      now.getFullYear() + "년 " + (now.getMonth() + 1) + "월 " +
      now.getDate() + "일 " + days[now.getDay()] + "요일";
  }

  /* ② 모바일 내비게이션 토글 */
  var toggle = document.getElementById("js-nav-toggle");
  var nav = document.getElementById("js-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
    });
  }
})();
