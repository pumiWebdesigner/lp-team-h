{
  //ｽﾑｰｽﾞｽｸﾛｰﾙ(aﾀｸﾞ_ｸﾘｯｸ)
  jQuery('a[href^="#"]').on("click", function () {
    if (jQuery(this) === jQuery(".js-open-button")) {
      return;
    }
    var header = jQuery(".header").innerHeight();
    var id = jQuery(this).attr("href");
    // #は初期値0,#以外はoffset().top
    var position = 0;
    if (id != "#") {
      position = jQuery(id).offset().top - header;
    }
    jQuery("html,body").animate(
      {
        scrollTop: position,
      },
      300
    );
  });

  //drawer
  jQuery("#js-drawer").on("click", function (e) {
    e.preventDefault();
    jQuery("body").toggleClass("drawer-open");
  });
  jQuery(".drawer__nav")
    .find("a")
    .on("click", function (e) {
      e.preventDefault();
      jQuery(".js-drawer").toggleClass("is-open");
      jQuery(".drawer__nav").toggleClass("is-open");
      var href = jQuery(this).attr("href"); // aタグのhref属性を取得
      window.location.href = href; // href属性のURLへ遷移
    });

  //スクロール後処理__画面最上部から500pxを超えたら着火（headerのopacityを上げ、to-topを表示）
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
