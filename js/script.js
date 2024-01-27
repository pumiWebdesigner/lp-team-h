// ページ外からの遷移
// ページがロードされた後にhash有無をチェックして処理
$(document).ready(function () {
  if (window.location.hash) {
    // URLのhashが遷移する先（例：#access）
    var hash = window.location.hash; // #～を取得
    // 遷移する先とheaderの高さからスクロールする距離を計算
    scrollDistance = calcDistance(hash);
    // スムーズスクロール
    smoothScroll(scrollDistance, 0);
  }
});

{
  // ページ内の遷移
  // aタグのクリック（ドロワー関連は専用処理あり）
  jQuery('a[href^="#"]').on("click", function (e) {
    e.preventDefault(); // aタグの通常の処理を止める
    // aタグのhrefが遷移する先
    var id = jQuery(this).attr("href"); // スクロール先のhrefを取得
    // 遷移する先とheaderの高さからスクロールする距離を計算
    scrollDistance = calcDistance(id);
    // スムーズスクロール
    smoothScroll(scrollDistance, 300);
    // ドロワーを閉じる
    if (jQuery(this).hasClass("js-drawer__nav--link")) {
      jQuery("body").removeClass("drawer-open");
    }
  });
  function calcDistance(id) {
    var scrollDistance = 0; // #は初期値0
    if (id != "#") {
      // id == "#"の場合、elementDistanceの取得でエラーになるので場合分けする
      var elementDistance = $(id).offset().top; //画面最上部から要素の上端の距離
      var headerHeight = $(".header").outerHeight(); // ヘッダーの高さ（マージン含む）
      scrollDistance = elementDistance - headerHeight; // ヘッダーの高さを考慮した位置にスクロール
    }
    return scrollDistance;
  }
  function smoothScroll(scrollDistance, speed) {
    jQuery("html,body").animate(
      {
        scrollTop: scrollDistance,
      },
      speed
    );
  }
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
