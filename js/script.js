// ページがロードされた後、URLに#～がある場合はhash有り
$(document).ready(function () {
  if (window.location.hash) {
    var hash = window.location.hash; // #～を取得（例：#access）
    var elementDistance = $(hash).offset().top; //画面最上部から要素の上端の距離
    var headerHeight = $(".header").outerHeight(); // ヘッダーの高さ（マージン含む）

    // ヘッダーの高さを考慮した位置にスクロール
    var scrollToPosition = elementDistance - headerHeight;
    if (hash == "#") {
      scrollToPosition = 0; // #は初期値0
    }
    // スムーズスクロール
    $("html, body").animate(
      {
        scrollTop: scrollToPosition,
      },
      300
    );
  }
});
{
  // aタグ制御⇒ドロワー関連は専用処理
  jQuery('a[href^="#"]').on("click", function (e) {
    // aタグの通常の処理を止める
    e.preventDefault();

    var id = jQuery(this).attr("href"); // スクロール先のhrefを取得
    var elementDistance = $(id).offset().top; //画面最上部から要素の上端の距離
    var headerHeight = $(".header").outerHeight(); // ヘッダーの高さ（マージン含む）

    // ヘッダーの高さを考慮した位置にスクロール
    var scrollToPosition = elementDistance - headerHeight;
    if (id == "#") {
      scrollToPosition = 0; // #は初期値0
    }

    // スムーズスクロール
    jQuery("html,body").animate(
      {
        scrollTop: scrollToPosition,
      },
      300
    );
    // ドロワーを閉じる
    if (jQuery(this).hasClass("js-drawer__nav--link")) {
      jQuery("body").removeClass("drawer-open");
    }
  });

  //ドロワーボタン（ハンバーガーボタン）
  jQuery("#js-drawer__btn").on("click", function (e) {
    e.preventDefault();
    jQuery("body").toggleClass("drawer-open");
  });
  // ドロワー背景（背景の背後をクリックさせない）
  jQuery(".js-drawer__background").on("click", function () {
    jQuery("body").removeClass("drawer-open");
  });

  //スクロール後処理__画面最上部からtargetの場所を超えたら着火（headerのopacityを上げ、to-topを表示）
  jQuery(window).on("scroll", function () {
    // let target = jQuery(".js-drawer-appear").offset().top;
    let target = 500;

    if (jQuery(this).scrollTop() > target) {
      jQuery(".header").addClass("is-rotate");
    } else {
      jQuery(".header").removeClass("is-rotate");
    }
  });
}
const splide = new Splide(".splide", {
  autoplay: true, // 自動再生
  type: "loop", // ループ
  pauseOnHover: false, // カーソルが乗ってもスクロールを停止させない
  pauseOnFocus: false, // 矢印をクリックしてもスクロールを停止させない
  interval: 4000, // 自動再生の間隔
  speed: 2000, // スライダーの移動時間

  breakpoints: {
    767: {
      padding: "0%", // スライダーの左右の余白
      gap: 0, // スライド間の余白
    },
    12000: {
      padding: "10%", // スライダーの左右の余白
      gap: 40, // スライド間の余白
    },
  },
}).mount();

Swiper;
var swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 0,
  },
  loop: true,
  speed: 8000,
  centeredSlides: true,
  preventInteractionOnTransition: true,
  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});
