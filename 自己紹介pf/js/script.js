$(function() {

  // drawer,js
  $('.drawer').drawer();
  })
  
  // wow 
  new WOW().init();

// スムーススクロール
// #から始まるURLがクリックされた時
jQuery('a[href^="#"]').click(function() {
  // 移動速度を指定（ミリ秒）
  let speed = 300;
  // hrefで指定されたidを取得
  let id = jQuery(this).attr("href");
  // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
  let target = jQuery("#" == id ? "html" : id);
  // ページのトップを基準にターゲットの位置を取得
  let position = jQuery(target).offset().top;
  // ターゲットの位置までspeedの速度で移動
  jQuery("html, body").animate(
    {
      scrollTop: position
    },
    speed
  );
  return false;
});

//トップへ戻るボタンを100px以下の高さのうちは表示させない
jQuery(window).on("scroll", function() {
  // トップから700px以上スクロールしたら
  if (700 < jQuery(this).scrollTop()) {
    jQuery('.totop').addClass( 'is-show' );
  } else {
    jQuery('.totop').removeClass( 'is-show' );
  }
});

//headerを700px以下の高さのうちは表示させない
jQuery(window).on("scroll", function() {
  // トップから700px以上スクロールしたら
  if (700 < jQuery(this).scrollTop()) {
    // is-showクラスをつける
    jQuery('.header').addClass( 'is-show' );
  } else {
    // 700pxを下回ったらis-showクラスを削除
    jQuery('.header').removeClass( 'is-show' );
  }
});