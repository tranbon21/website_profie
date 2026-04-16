const translations = {
  en: {
    navOverview: "Overview",
    navContact: "Contact",
    eyebrow: "Web Developer / Flutter Builder / Figma to Code",
    heroTitle: "Crafting the <em>digital spirit</em> of modern interfaces.",
    heroSummary:
      "Tran Bon builds responsive web experiences and mobile UI flows with a clean, maintainable approach across React, HTML/CSS/SCSS, Flutter, and Firebase.",
    ctaPrimary: "Say Hello",
    ctaSecondary: "View Project",
    chipEmailLabel: "Email",
    chipPhoneLabel: "Phone",
    pillOne: "Pixel Perfect UI",
    pillTwo: "React & SCSS",
    pillThree: "Flutter + Firebase",
    pillFour: "Responsive Systems",
    quoteLabel: "Profile Vision",
    quoteText:
      "I turn <span>design systems</span> and <span class=\"serif-accent\">interface ideas</span> into responsive products that feel polished on every screen.",
    resumeButton: "Resume Contact",
    snapshotLabel: "Profile Snapshot",
    snapshotTitle: "Frontend developer with mobile flexibility",
    snapshotBody:
      "Strongest in responsive UI implementation, clean styling systems, and converting Figma designs into production-ready interfaces.",
    snapshotItemOneLabel: "Primary Stack",
    snapshotItemOneValue: "ReactJS / HTML / CSS / SCSS",
    snapshotItemTwoLabel: "Mobile Stack",
    snapshotItemTwoValue: "Flutter / Dart / Firebase",
    availabilityLabel: "Available for internship",
    availabilityTitle: "Open to web and mobile intern roles",
    availabilityBody:
      "Ready to contribute to UI implementation, component building, and collaborative frontend delivery.",
    featureOneLabel: "Processing",
    featureOneTitle: "Figma to Frontend",
    featureOneBody:
      "Responsive HTML, CSS, SCSS, and React interfaces with motion and clean structure.",
    featureTwoLabel: "Growth Archive",
    featureTwoTitle: "Flutter Builds",
    featureTwoBody:
      "Mobile UI + logic with Flutter, Firebase authentication, and realtime data workflows.",
    statOneLabel: "Education",
    statOneValue: "Bachelor of Information Technology",
    statTwoLabel: "Databases",
    statTwoValue: "MongoDB / MySQL / SQL Server",
    statThreeLabel: "Workflow",
    statThreeValue: "Responsive UI / Animation / Clean Code",
    projectLabel: "Highlighted project",
    projectTitle: "Mebisoft Website UI",
    projectBody:
      "Production-style website UI implementation with responsive layouts, SCSS structure, and interactive motion details."
  },
  vi: {
    navOverview: "Tổng quan",
    navContact: "Liên hệ",
    eyebrow: "Lập trình Web / Flutter / Chuyển Figma thành giao diện",
    heroTitle: "Xây dựng <em>tinh thần số</em> cho giao diện hiện đại.",
    heroSummary:
      "Trần Bôn phát triển giao diện web responsive và luồng giao diện mobile với cách làm sạch sẽ, dễ bảo trì trên React, HTML/CSS/SCSS, Flutter và Firebase.",
    ctaPrimary: "Liên hệ với tôi",
    ctaSecondary: "Xem dự án",
    chipEmailLabel: "Email",
    chipPhoneLabel: "Điện thoại",
    pillOne: "UI sát thiết kế",
    pillTwo: "React & SCSS",
    pillThree: "Flutter + Firebase",
    pillFour: "Hệ thống responsive",
    quoteLabel: "Định hướng cá nhân",
    quoteText:
      "Tôi biến <span>design system</span> và <span class=\"serif-accent\">ý tưởng giao diện</span> thành sản phẩm responsive chỉn chu, mượt mà trên mọi màn hình.",
    resumeButton: "Liên hệ CV",
    snapshotLabel: "Tóm tắt hồ sơ",
    snapshotTitle: "Frontend developer linh hoạt với mobile",
    snapshotBody:
      "Thế mạnh của tôi là hiện thực UI responsive, tổ chức style sạch, và chuyển thiết kế Figma thành giao diện sẵn sàng cho sản phẩm.",
    snapshotItemOneLabel: "Stack chính",
    snapshotItemOneValue: "ReactJS / HTML / CSS / SCSS",
    snapshotItemTwoLabel: "Stack mobile",
    snapshotItemTwoValue: "Flutter / Dart / Firebase",
    availabilityLabel: "Sẵn sàng intern",
    availabilityTitle: "Mở cho vị trí intern web và mobile",
    availabilityBody:
      "Sẵn sàng đóng góp vào việc làm UI, xây dựng component và phối hợp cùng team frontend.",
    featureOneLabel: "Thế mạnh",
    featureOneTitle: "Figma sang Frontend",
    featureOneBody:
      "Xây dựng giao diện responsive bằng HTML, CSS, SCSS và React với cấu trúc gọn gàng và có motion.",
    featureTwoLabel: "Mở rộng",
    featureTwoTitle: "Sản phẩm Flutter",
    featureTwoBody:
      "Phát triển giao diện và logic mobile với Flutter, xác thực Firebase và dữ liệu realtime.",
    statOneLabel: "Học vấn",
    statOneValue: "Cử nhân Công nghệ Thông tin",
    statTwoLabel: "Cơ sở dữ liệu",
    statTwoValue: "MongoDB / MySQL / SQL Server",
    statThreeLabel: "Quy trình",
    statThreeValue: "Responsive UI / Animation / Clean Code",
    projectLabel: "Dự án nổi bật",
    projectTitle: "Mebisoft Website UI",
    projectBody:
      "Hiện thực giao diện website theo hướng sản phẩm với bố cục responsive, cấu trúc SCSS và chi tiết tương tác."
  }
};

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) {
      node.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    const key = node.dataset.i18nHtml;
    if (dict[key]) {
      node.innerHTML = dict[key];
    }
  });

  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  localStorage.setItem("portfolio-language", lang);
}

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

const savedLanguage = localStorage.getItem("portfolio-language") || "en";
applyLanguage(savedLanguage);

if (window.lucide) {
  window.lucide.createIcons();
}

const parallaxTargets = Array.from(document.querySelectorAll("[data-parallax]"));
const pointerState = {
  x: window.innerWidth * 0.5,
  y: window.innerHeight * 0.5,
  targetX: window.innerWidth * 0.5,
  targetY: window.innerHeight * 0.5,
  active: false
};

window.addEventListener("pointermove", (event) => {
  pointerState.targetX = event.clientX;
  pointerState.targetY = event.clientY;
  pointerState.active = true;
});

window.addEventListener("pointerleave", () => {
  pointerState.active = false;
  pointerState.targetX = window.innerWidth * 0.5;
  pointerState.targetY = window.innerHeight * 0.5;
});

function animateParallax() {
  pointerState.x += (pointerState.targetX - pointerState.x) * 0.08;
  pointerState.y += (pointerState.targetY - pointerState.y) * 0.08;

  const nx = pointerState.x / window.innerWidth - 0.5;
  const ny = pointerState.y / window.innerHeight - 0.5;

  parallaxTargets.forEach((node) => {
    const depth = Number(node.dataset.parallax || 16);
    const moveX = nx * depth;
    const moveY = ny * depth;
    node.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
  });

  requestAnimationFrame(animateParallax);
}

animateParallax();

const particleCanvas = document.querySelector(".cursor-particles");

if (particleCanvas) {
  const ctx = particleCanvas.getContext("2d");
  const particles = [];
  const particleCount = 96;
  let width = 0;
  let height = 0;
  let deviceScale = 1;

  function resizeCanvas() {
    deviceScale = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    particleCanvas.width = Math.floor(width * deviceScale);
    particleCanvas.height = Math.floor(height * deviceScale);
    particleCanvas.style.width = `${width}px`;
    particleCanvas.style.height = `${height}px`;
    ctx.setTransform(deviceScale, 0, 0, deviceScale, 0, 0);
  }

  function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
  }

  function createParticle() {
    return {
      x: randomBetween(0, width),
      y: randomBetween(0, height),
      baseX: randomBetween(0, width),
      baseY: randomBetween(0, height),
      vx: randomBetween(-0.07, 0.07),
      vy: randomBetween(-0.07, 0.07),
      size: randomBetween(0.8, 2.8),
      alpha: randomBetween(0.35, 0.9),
      twinkleOffset: randomBetween(0, Math.PI * 2),
      twinkleSpeed: randomBetween(0.035, 0.09),
      orbit: randomBetween(8, 26),
      depth: randomBetween(0.18, 1),
      pull: randomBetween(0.45, 1.15)
    };
  }

  function seedParticles() {
    particles.length = 0;
    for (let i = 0; i < particleCount; i += 1) {
      particles.push(createParticle());
    }
  }

  function drawParticles() {
    ctx.clearRect(0, 0, width, height);

    const cursorRadius = 220;
    const time = performance.now() * 0.0012;
    const mouseShiftX = (pointerState.x / width - 0.5) * 72;
    const mouseShiftY = (pointerState.y / height - 0.5) * 72;

    function drawStar(x, y, radius, alpha) {
      const spike = radius * 2.8;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(time * 0.5);
      ctx.beginPath();
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      ctx.moveTo(0, -spike);
      ctx.lineTo(radius * 0.48, -radius * 0.48);
      ctx.lineTo(spike, 0);
      ctx.lineTo(radius * 0.48, radius * 0.48);
      ctx.lineTo(0, spike);
      ctx.lineTo(-radius * 0.48, radius * 0.48);
      ctx.lineTo(-spike, 0);
      ctx.lineTo(-radius * 0.48, -radius * 0.48);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    particles.forEach((particle) => {
      const dx = pointerState.x - particle.x;
      const dy = pointerState.y - particle.y;
      const distance = Math.hypot(dx, dy) || 1;

      if (distance < cursorRadius) {
        const force = (cursorRadius - distance) / cursorRadius;
        const angle = Math.atan2(dy, dx);
        particle.vx += Math.cos(angle) * force * 0.035 * particle.pull;
        particle.vy += Math.sin(angle) * force * 0.035 * particle.pull;
      }

      particle.vx += (particle.baseX - particle.x) * 0.00022;
      particle.vy += (particle.baseY - particle.y) * 0.00022;
      particle.vx *= 0.992;
      particle.vy *= 0.992;
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < -20 || particle.x > width + 20 || particle.y < -20 || particle.y > height + 20) {
        particle.x = randomBetween(0, width);
        particle.y = randomBetween(0, height);
        particle.baseX = particle.x;
        particle.baseY = particle.y;
      }

      const twinkle = 0.58 + 0.42 * Math.sin(time * (8 * particle.twinkleSpeed * 10) + particle.twinkleOffset);
      const shimmerX = Math.cos(time + particle.twinkleOffset) * particle.orbit * 0.015;
      const shimmerY = Math.sin(time * 1.2 + particle.twinkleOffset) * particle.orbit * 0.015;
      const drawX = particle.x + shimmerX + mouseShiftX * particle.depth;
      const drawY = particle.y + shimmerY + mouseShiftY * particle.depth;
      const nearCursor = Math.max(0, 1 - distance / cursorRadius);
      const radius = particle.size * (0.95 + twinkle * 0.9 + nearCursor * 0.8);
      const glow = particle.size * 5.4;

      const glowGradient = ctx.createRadialGradient(drawX, drawY, 0, drawX, drawY, glow);
      glowGradient.addColorStop(0, `rgba(255,255,255,${particle.alpha * twinkle * (0.85 + nearCursor * 0.5)})`);
      glowGradient.addColorStop(0.45, `rgba(255,255,255,${particle.alpha * twinkle * (0.18 + nearCursor * 0.18)})`);
      glowGradient.addColorStop(1, "rgba(255,255,255,0)");
      ctx.beginPath();
      ctx.fillStyle = glowGradient;
      ctx.arc(drawX, drawY, glow, 0, Math.PI * 2);
      ctx.fill();

      drawStar(drawX, drawY, radius, Math.min(1, particle.alpha * twinkle * (1.05 + nearCursor * 0.35)));

      ctx.beginPath();
      ctx.strokeStyle = `rgba(255,255,255,${particle.alpha * twinkle * 0.9})`;
      ctx.lineWidth = 1;
      ctx.moveTo(drawX - radius * 2.2, drawY);
      ctx.lineTo(drawX + radius * 2.2, drawY);
      ctx.moveTo(drawX, drawY - radius * 2.2);
      ctx.lineTo(drawX, drawY + radius * 2.2);
      ctx.stroke();
    });

    for (let i = 0; i < particles.length; i += 1) {
      for (let j = i + 1; j < particles.length; j += 1) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distance = Math.hypot(dx, dy);

        if (distance < 78) {
          const alpha = (1 - distance / 78) * 0.05;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
          ctx.lineWidth = 1;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    if (pointerState.active) {
      const gradient = ctx.createRadialGradient(
        pointerState.x,
        pointerState.y,
        0,
        pointerState.x,
        pointerState.y,
        240
      );
      gradient.addColorStop(0, "rgba(255,255,255,0.14)");
      gradient.addColorStop(0.3, "rgba(255,255,255,0.05)");
      gradient.addColorStop(1, "rgba(255,255,255,0)");
      ctx.beginPath();
      ctx.fillStyle = gradient;
      ctx.arc(pointerState.x, pointerState.y, 240, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(drawParticles);
  }

  resizeCanvas();
  seedParticles();
  drawParticles();
  window.addEventListener("resize", () => {
    resizeCanvas();
    seedParticles();
  });
}
