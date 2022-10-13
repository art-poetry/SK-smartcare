/*global moment, GA*/
const LANDING = {
  BTN_CLOSE_ID: 'btnClose',
  BTN_TODAY_CLOSE_ID: 'btnTodayClose',
  POP_WRAPPER_ID: 'popupWrapper',
  onClickBtnClose: function (event) {
    event.preventDefault();
    LANDING.hidePop();
  },
  onClickBtnTodayClose: function (event) {
    event.preventDefault();
    LANDING.hidePop();
    localStorage.offDay = moment().format("YYYY-MM-DD");
  },
  onClickCoupon: function (event) {
    event.preventDefault();
    alert("상세 이벤트는 앱 설치 후, 이벤트 배너를 통해확인해주세요.");
  },
  showPop: function () {
    document.getElementById(LANDING.POP_WRAPPER_ID).style.display = '';
    document.body.style.overflow = 'hidden';
  },
  hidePop: function () {
    document.getElementById(LANDING.POP_WRAPPER_ID).style.display = 'none';
    document.body.style.overflow = '';
  },
  init: function () {
    document.getElementById(LANDING.BTN_CLOSE_ID).onclick = LANDING.onClickBtnClose;
    document.getElementById(LANDING.BTN_TODAY_CLOSE_ID).onclick = LANDING.onClickBtnTodayClose;
    for(let i = 1; i < 5; i++) {
      document.getElementById("coupon" + i).onclick = LANDING.onClickCoupon;
    }
  }
}
window.onload = function () {
  LANDING.init();
  if(!localStorage.offDay || (localStorage.offDay && moment(moment().format("YYYY-MM-DD")).isAfter(moment(localStorage.offDay))) ) {
    LANDING.showPop();
  }
  GA.init("SK렌터카 스마트케어", "/landing.html");
}
