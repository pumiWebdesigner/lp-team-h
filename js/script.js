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

  //スクロール後処理__heroを超えたら着火（headerのopacityを上げ、to-topを表示）
  jQuery(window).on("scroll", function () {
    // let target = jQuery(".js-drawer-appear").outerHeight();
    let target = jQuery(".js-drawer-appear").offset().top;
    console.log(target);

    if (jQuery(this).scrollTop() > target) {
      jQuery(".header").addClass("is-rotate");
    } else {
      jQuery(".header").removeClass("is-rotate");
    }
  });
}
