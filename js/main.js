/* =============================================
   SYED MAHAMMAD — PORTFOLIO SCRIPTS
   jQuery + Vanilla JS
   Particles · Counter · Typed · Scroll Reveal · Flip
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

  /* ── SMOOTH SCROLL ────────────────────────── */
  $('a[href^="#"]').on('click', function (e) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: target.offset().top - 64 }, 580, 'swing');
    }
  });

  /* ── ACTIVE NAV ───────────────────────────── */
  function setActiveNav() {
    var scrollY = $(window).scrollTop();
    $('section[id]').each(function () {
      var top    = $(this).offset().top - 110;
      var bottom = top + $(this).outerHeight();
      var id     = $(this).attr('id');
      if (scrollY >= top && scrollY < bottom) {
        $('#navLinks a').removeClass('active');
        $('#navLinks a[href="#' + id + '"]').addClass('active');
      }
    });
  }

  /* ── BACK TO TOP ──────────────────────────── */
  $('#backTop').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

  /* ── SCROLL REVEAL (all directions) ──────── */
  var allReveal = '.reveal, .reveal-left, .reveal-right, .reveal-scale';

  function revealOnScroll() {
    var scrollBottom = $(window).scrollTop() + $(window).height();
    $(allReveal).each(function () {
      if (!$(this).hasClass('visible') && $(this).offset().top < scrollBottom - 60) {
        var $el    = $(this);
        var delay  = parseInt($el.data('delay')) || 0;
        setTimeout(function () { $el.addClass('visible'); }, delay);
      }
    });
  }

  /* ── ANIMATED NUMBER COUNTERS ─────────────── */
  var countersDone = false;
  function runCounters() {
    if (countersDone) return;
    var heroTop    = $('#home').offset().top;
    var heroBottom = heroTop + $('#home').outerHeight();
    var scrollMid  = $(window).scrollTop() + $(window).height() / 2;
    if (scrollMid < heroTop || scrollMid > heroBottom + 200) return;

    countersDone = true;
    $('.stat-val[data-count]').each(function () {
      var $el      = $(this);
      var target   = parseFloat($el.data('count'));
      var suffix   = $el.data('suffix') || '';
      var decimal  = $el.data('decimal') || '';
      var duration = 1600;
      var start    = 0;
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var ease = 1 - Math.pow(1 - progress, 3);
        var current = Math.floor(ease * target);
        $el.text(current + decimal + suffix);
        if (progress < 1) requestAnimationFrame(step);
        else $el.text(target + decimal + suffix);
      }
      requestAnimationFrame(step);
    });
  }

  /* ── TYPED ROLE EFFECT ────────────────────── */
  var roles   = ['Full Stack .NET Developer', 'ASP.NET Core Engineer', 'Blazor Specialist', 'Backend Architect', 'C# Developer'];
  var roleIdx = 0, charIdx = 0, deleting = false;
  var $typed  = $('#typedRole');

  function typeLoop() {
    var current = roles[roleIdx];
    if (!deleting && charIdx <= current.length) {
      $typed.text(current.substring(0, charIdx));
      charIdx++;
      setTimeout(typeLoop, charIdx === current.length + 1 ? 2000 : 65);
    } else if (deleting && charIdx >= 0) {
      $typed.text(current.substring(0, charIdx));
      charIdx--;
      setTimeout(typeLoop, 38);
    } else {
      deleting = !deleting;
      if (!deleting) { roleIdx = (roleIdx + 1) % roles.length; charIdx = 0; }
      setTimeout(typeLoop, 200);
    }
  }
  if ($typed.length) setTimeout(typeLoop, 800);

  /* ── NAVBAR SHADOW ON SCROLL ──────────────── */
  function navShadow() {
    if ($(window).scrollTop() > 20) {
      $('#navbar').css('box-shadow', '0 4px 30px rgba(0,0,0,0.3)');
    } else {
      $('#navbar').css('box-shadow', 'none');
    }
  }

  /* ── MAIN SCROLL HANDLER ──────────────────── */
  $(window).on('scroll', function () {
    setActiveNav();
    navShadow();
    revealOnScroll();
    runCounters();
    if ($(this).scrollTop() > 400) {
      $('#backTop').addClass('show');
    } else {
      $('#backTop').removeClass('show');
    }
  });

  // Initial calls
  revealOnScroll();
  setActiveNav();
  runCounters();

  /* ── TOUCH FLIP FOR MOBILE ────────────────── */
  // $(document).on('click', '.flip-wrapper', function () {
  //   if (window.matchMedia('(hover: none)').matches) {
  //     $(this).toggleClass('tapped');
  //     // Untap other cards
  //     $('.flip-wrapper').not(this).removeClass('tapped');
  //   }
  // });

  /* TO: */
$(document).on('click', '.flip-wrapper', function (e) {
  if (window.matchMedia('(hover: none)').matches) {
    e.stopPropagation();
    var isTapped = $(this).hasClass('tapped');
    $('.flip-wrapper').removeClass('tapped');
    if (!isTapped) $(this).addClass('tapped');
  }
});

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

  /* ── PARTICLE CANVAS ──────────────────────── */
  (function () {
    var canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    var ctx    = canvas.getContext('2d');
    var W, H, particles = [];

    function resize() {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    var PARTICLE_COUNT = window.innerWidth < 768 ? 35 : 70;
    var colors = ['rgba(79,142,247,', 'rgba(0,212,170,', 'rgba(168,85,247,'];

    function rand(min, max) { return Math.random() * (max - min) + min; }

    for (var i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x:  rand(0, W),
        y:  rand(0, H),
        r:  rand(1, 2.5),
        dx: rand(-0.3, 0.3),
        dy: rand(-0.3, 0.3),
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: rand(0.2, 0.6)
      });
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(function (p) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.alpha + ')';
        ctx.fill();

        // Connect nearby particles
        particles.forEach(function (q) {
          var dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = p.color + (0.05 * (1 - dist / 100)) + ')';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });

        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > W) p.dx *= -1;
        if (p.y < 0 || p.y > H) p.dy *= -1;
      });
      requestAnimationFrame(draw);
    }
    draw();
  })();

});



/* ================= SKILL MODAL (MOBILE ONLY) ================= */

document.addEventListener("DOMContentLoaded", function () {

  const modal = document.getElementById("skillModal");
  const modalBody = document.getElementById("skillModalBody");
  const closeBtn = document.querySelector(".skill-close");

  // ✅ Prevent error if modal not found
  if (!modal || !modalBody) return;

  document.querySelectorAll(".flip-wrapper").forEach(card => {
    card.addEventListener("click", function () {

      // ✅ Only for mobile
      if (window.innerWidth > 768) return;

      const back = this.querySelector(".flip-back");

      if (!back) return;

      modalBody.innerHTML = back.innerHTML;

      //UPDATED (smooth open)
      modal.style.display = "flex";
      setTimeout(() => modal.classList.add("active"), 10);

      document.documentElement.style.overflow = "hidden";
    });
  });

  // Close button
if (closeBtn) {
  closeBtn.onclick = () => {

        //UPDATED (smooth close)
    modal.classList.remove("active");

    setTimeout(() => {
      modal.style.display = "none";
    }, 200);

    document.documentElement.style.overflow = "";

    // RESET ALL FLIPPED CARDS
    document.querySelectorAll(".flip-wrapper").forEach(c => {
      c.classList.remove("tapped");
    });
  };
}

// Click outside
window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "";

    // RESET ALL FLIPPED CARDS
    document.querySelectorAll(".flip-wrapper").forEach(c => {
      c.classList.remove("tapped");
    });
  }
});

});