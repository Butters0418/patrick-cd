$(function () {
  var $scroll = $('.scroll');
  // banner Animation
  function bannerAni() {
    var $desert = $('.section1__desert');
    var $patrickImg = $('.section1__patrickimg');
    var $title = $('.section1__title');
    var $describe = $('.section1__describe');
    var $moon = $('.moon');
    var tl = gsap.timeline();
    var $patrickText = $('.section1__name img');

    tl.to($desert, { duration: 0.4, opacity: 1, y: 0 })
      .to($patrickImg, { duration: 1.5, opacity: 1, x: 0, ease: "power4.out" }, 0.4)
      .to($title, { duration: 1, opacity: 1, y: 0, ease: "power3.out" }, 0.8)
      .to($describe, { duration: 1, opacity: 1, y: 0, ease: "power3.out" }, 1)
      .to($moon, { duration: 1, opacity: 1, x: 0, ease: "power3.out" }, 1.1)
      .to($('.cloud'), { duration: 3, x: 0, ease: "power4.out" }, 1.4)
      .from($patrickText, {
        duration: "random(1.5,3)",
        opacity: 0,
        x: "random(-300, 300)",
        y: "random(-100, 500)",
        z: "random(-500, 500)",
        scale: "random(1,5)",
        rotationY: "random(-540,540)",
        ease: "power3.out"
      }, 1.1)
      .from($scroll, { duration: 0.5, opacity: 0 }, 2.1)
  }
  setTimeout(function () {
    $('.mask').fadeOut();
    bannerAni();
  }, 200);



  // scroll event
  $(window).on('scroll', function () {
    var $windowTop = $(window).scrollTop();
    if ($windowTop >= 1) {
      $scroll.fadeOut(300);
    } else {
      $scroll.fadeIn(300);
    }
  })

  // allstar
  for (var i = 1; i < 9; i++) {
    $('.allstar').append($('<div class="star' + i + '"></div>'));
  }

  // circle1
  var svg1 = document.getElementById("circle1");
  var s1 = Snap(svg1);
  var s1state1 = Snap.select('#s1state1');
  var s1state2 = Snap.select('#s1state2');
  var s1state1Points = s1state1.node.getAttribute('d');
  var s1state2Points = s1state2.node.getAttribute('d');
  var s1toState2 = function () {
    s1state1.animate({ d: s1state2Points }, 3000, s1toState1);
  }
  var s1toState1 = function () {
    s1state1.animate({ d: s1state1Points }, 3000, s1toState2);
  }
  s1toState2();
  gsap.to(svg1, { duration: 6, y: 50, repeat: -1, yoyo: true, ease: "none" })
  gsap.to(svg1, { duration: 30, rotate: 360, repeat: -1, ease: "none" })

  // circle2
  var svg2 = document.getElementById("circle2");
  var s2 = Snap(svg2);
  var s2state1 = Snap.select('#s2state1');
  var s2state2 = Snap.select('#s2state2');
  var s2state1Points = s2state1.node.getAttribute('d');
  var s2state2Points = s2state2.node.getAttribute('d');
  var s2toState2 = function () {
    s2state1.animate({ d: s2state2Points }, 3000, s2toState1);
  }
  var s2toState1 = function () {
    s2state1.animate({ d: s2state1Points }, 3000, s2toState2);
  }
  s2toState2();
  gsap.to(svg2, { duration: 6, y: -30, x: 30, repeat: -1, yoyo: true, ease: "none" })
  gsap.to(svg2, { duration: 20, rotate: 360, repeat: -1, ease: "none" })

  // scroll reveal
  var rate = 1;
  if ($(window).width() > 721) {
    rate = 1;
  } else {
    rate = 0.6
  }
  window.sr = ScrollReveal({ viewOffset: { bottom: 150 * rate }, duration: 1000, delay: 100 });
  // 自定義一個動畫集合
  sr.reveal('.fade_up', { origin: 'bottom', distance: '40px', });
  sr.reveal('.fade_left', { origin: 'left', distance: '40px', });
  sr.reveal('.fade_right', { origin: 'right', distance: '40px', });

})