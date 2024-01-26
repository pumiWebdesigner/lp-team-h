{
  // aタグ制御
  // ⇒ドロワー関連は専用処理
  jQuery('a[href^="#"]').on("click", function (e) {
    // ドロワーナビをクリックしたときは、リンク移動後にドロワーを閉じる
    if (jQuery(this).hasClass("js-drawer__nav--link")) {
      // リンクへの移動後もドロワーを閉じる処理をしたいので、通常の処理を止める
      e.preventDefault();
    }

    // headerの高さを取得（スクロール先は要素の場所よりheader分下の位置）
    var header = jQuery(".header").innerHeight();
    // スクロール先のhrefを取得
    var id = jQuery(this).attr("href");

    // スクロールする距離
    // #は初期値0,#以外は要素の高さ（headerの高さも考慮）
    var position = 0;
    if (id != "#") {
      position = jQuery(id).offset().top - header;
    }
    // href設定のリンクへスクロールする
    jQuery("html,body").animate(
      {
        scrollTop: position,
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
  interval: 3000, // 自動再生の間隔
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

// Swiper
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
