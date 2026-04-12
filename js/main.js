/* =============================================
   SYED MAHAMMAD — PORTFOLIO SCRIPTS
   jQuery + Vanilla JS
   ============================================= */

$(function () {

  /* ── THEME TOGGLE ─────────────────────────── */
  var isDark = true;
  $('#themeToggle').on('click', function () {
    isDark = !isDark;
    $('html').attr('data-theme', isDark ? '' : 'light');
    $(this).text(isDark ? '🌙' : '☀️');
  });

  /* ── HAMBURGER ────────────────────────────── */
  $('#hamburger').on('click', function () {
    $('#navLinks').toggleClass('open');
    $(this).text($('#navLinks').hasClass('open') ? '✕' : '☰');
  });
  $('#navLinks a').on('click', function () {
    $('#navLinks').removeClass('open');
    $('#hamburger').text('☰');
  });

  /* ── SMOOTH SCROLL (nav & CTA links) ─────── */
  $('a[href^="#"]').on('click', function (e) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: target.offset().top - 64 }, 550, 'swing');
    }
  });

  /* ── ACTIVE NAV ON SCROLL ─────────────────── */
  function setActiveNav() {
    var scrollY = $(window).scrollTop();
    $('section[id]').each(function () {
      var top    = $(this).offset().top - 100;
      var bottom = top + $(this).outerHeight();
      var id     = $(this).attr('id');
      if (scrollY >= top && scrollY < bottom) {
        $('#navLinks a').removeClass('active');
        $('#navLinks a[href="#' + id + '"]').addClass('active');
      }
    });
  }

  /* ── BACK TO TOP ──────────────────────────── */
  function toggleBackTop() {
    if ($(window).scrollTop() > 400) {
      $('#backTop').addClass('show');
    } else {
      $('#backTop').removeClass('show');
    }
  }
  $('#backTop').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

  /* ── SCROLL REVEAL ────────────────────────── */
  function revealOnScroll() {
    var scrollBottom = $(window).scrollTop() + $(window).height();
    $('.reveal').each(function () {
      if (!$(this).hasClass('visible') && $(this).offset().top < scrollBottom - 60) {
        var $el = $(this);
        var delay = $el.data('delay') || 0;
        setTimeout(function () { $el.addClass('visible'); }, delay);
      }
    });
  }

  /* ── SCROLL EVENT ─────────────────────────── */
  $(window).on('scroll', function () {
    setActiveNav();
    toggleBackTop();
    revealOnScroll();
  });

  // Run once on load
  revealOnScroll();
  setActiveNav();

  /* ── TYPED EFFECT (hero role) ─────────────── */
  var roles   = ['Full Stack .NET Developer', 'ASP.NET Core Engineer', 'Blazor Specialist', 'Backend Architect'];
  var roleIdx = 0;
  var charIdx = 0;
  var deleting = false;
  var $typed   = $('#typedRole');

  if ($typed.length) {
    function typeLoop() {
      var current = roles[roleIdx];
      if (!deleting && charIdx <= current.length) {
        $typed.text(current.substring(0, charIdx));
        charIdx++;
        setTimeout(typeLoop, charIdx === current.length + 1 ? 1800 : 70);
      } else if (deleting && charIdx >= 0) {
        $typed.text(current.substring(0, charIdx));
        charIdx--;
        setTimeout(typeLoop, 40);
      } else {
        deleting = !deleting;
        if (!deleting) { roleIdx = (roleIdx + 1) % roles.length; charIdx = 0; }
        setTimeout(typeLoop, 200);
      }
    }
    typeLoop();
  }

  /* ── CONTACT FORM ─────────────────────────── */
  $('#contactForm').on('submit', function (e) {
    e.preventDefault();

    var name    = $.trim($('#fName').val());
    var email   = $.trim($('#fEmail').val());
    var message = $.trim($('#fMessage').val());

    if (!name || !email || !message) {
      alert('Please fill in your name, email, and message.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    var $btn = $('#submitBtn');
    $btn.prop('disabled', true).text('Sending…');

    // Simulate send — replace with Formspree/EmailJS endpoint
    setTimeout(function () {
      $btn.text('✓ Sent!');
      $('#formSuccess').fadeIn(300);
      $('#contactForm')[0].reset();
      setTimeout(function () {
        $btn.prop('disabled', false).text('Send Message →');
        $('#formSuccess').fadeOut(300);
      }, 4000);
    }, 1200);
  });

  /* ── NAVBAR SCROLL SHADOW ─────────────────── */
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 20) {
      $('#navbar').css('box-shadow', '0 4px 30px rgba(0,0,0,0.25)');
    } else {
      $('#navbar').css('box-shadow', 'none');
    }
  });

  /* ── SKILL TAG HOVER RIPPLE ───────────────── */
  $(document).on('mouseenter', '.sk-tag, .tech-pill', function () {
    $(this).stop(true).animate({}, 100);
  });

  /* ── PROJECT CARD COLOR-BAR ON HOVER ─────── */
  $('.proj-card').on('mouseenter', function () {
    $(this).find('.proj-top-bar').css('opacity', '1');
  }).on('mouseleave', function () {
    $(this).find('.proj-top-bar').css('opacity', '0.7');
  });

});
