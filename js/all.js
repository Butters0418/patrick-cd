$(function () {

  var imgs = document.images,
    len = imgs.length,
    counter = 0;
  [].forEach.call(imgs, function (img) {
    if (img.complete)
      incrementCounter();
    else
      img.addEventListener('load', incrementCounter, false);
  });
  function incrementCounter() {
    counter++;
    if (counter === len) {
      console.log('All img load')
    }
  }
  var loadingtime = 3000;
  function countDown() {
    console.log(loadingtime)
    loadingtime -= 500
    if (loadingtime < 0 || counter === len) {
      clearInterval(timer);
      $('.mask').fadeOut(300);
      setTimeout(function () {
        bannerAni();
      }, 800);
    }
  }
  var timer = setInterval(countDown, 500);



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
    gsap.set($patrickText, { opacity: 1 })
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
      .from($scroll, { duration: 0.5, opacity: 0 }, 2.1);
  }



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



  // line draw
  function drawline1() {
    var line1 = Snap('#line1');
    var path = line1.paper.path({ d: 'M.92,132.69s349-137,409-102c25,20-32,43-4,68s125,17,315-96', stroke: '#fff100', fill: 'rgba(0,0,0,0)' });
    var length = Snap.path.getTotalLength(path);
    path.attr({
      'stroke-dashoffset': length,
      'stroke-dasharray': length
    });
    Snap.animate(length, 0, function (val) {
      path.attr({
        'stroke-dashoffset': val
      });
    }, 600, mina.easeout(), function () {
      console.log('animation end');
    });
  }
  function drawline2() {
    var line2 = Snap('#line2');
    var path = line2.paper.path({ d: 'M-.5,26.5s97-21,172-22,122,0,163,26,53,30,63,24-12-28-59-15-43,36,1,22,56-31,106-31,80,26,163,30,112-21,112-21', stroke: '#fff100', fill: 'rgba(0,0,0,0)' });
    var length = Snap.path.getTotalLength(path);
    path.attr({
      'stroke-dashoffset': length,
      'stroke-dasharray': length
    });
    Snap.animate(length, 0, function (val) {
      path.attr({
        'stroke-dashoffset': val
      });
    }, 900, mina.easeout(), function () {
      console.log('animation end');
    });
  }

  // scroll reveal
  var rate = 1;
  if ($(window).width() > 721) {
    rate = 1;
  } else {
    rate = 0.6
  }
  window.sr = ScrollReveal({ viewOffset: { bottom: 150 * rate }, duration: 1000, delay: 100 });
  sr.reveal('.fade_up', { origin: 'bottom', distance: '40px', });
  sr.reveal('.fade_left', { origin: 'left', distance: '40px', });
  sr.reveal('.fade_right', { origin: 'right', distance: '40px', });
  sr.reveal('.section3__line1', { origin: 'bottom', distance: '40px', duration: 500, delay: 0, afterReveal: drawline1 });
  sr.reveal('.section4__line2', { origin: 'bottom', distance: '40px', duration: 500, dealy: 0, afterReveal: drawline2 });

  //moon jump 
  // form submit
  $('#submit').on('click', function () {
    var name = $('#yourname').val().trim();
    var phone = $('#yourphone').val().trim();
    var mail = $('#yourmail').val().trim();
    // css class
    $('input').each(function () {
      if ($(this).val().trim() == "") {
        $(this).val("");
        $(this).addClass('error').next().fadeIn(300);
      }
    })
    if (name !== "" && phone !== "" && mail !== "") {
      var data = {
        'entry.858747686': name,
        'entry.1623726128': phone,
        'entry.2009452488': mail,
      };
      $.ajax({
        type: 'POST',
        url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdD6znoLqn4eIRQoHW_mclaOuntNqRXd9PttntvF7CMo1PJmA/formResponse',
        data: data,
        contentType: 'application/json',
        dataType: 'jsonp',
        complete: function () {
          $('#submit').addClass('pointernone')
          $('#formsubmit').modal('show');
        }
      })
    }
    // post
  });
  //if keydown
  $('input').on('keydown', function () {
    $(this).removeClass('error').next().fadeOut(500);
  })

})