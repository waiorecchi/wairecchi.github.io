// GSAPの初期化
gsap.registerPlugin(ScrollTrigger);

// ヘッダーアニメーション
gsap.from(".header-container", {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "power3.out",
});

// ナビゲーションアニメーション
gsap.from(".topnav", {
  duration: 1,
  y: -30,
  opacity: 0,
  delay: 0.3,
  ease: "power3.out",
});

// プロフィールセクションのアニメーション
gsap.utils.toArray(".profile-section").forEach((section, i) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    delay: i * 0.2,
  });
});

// スキルタグのアニメーション
gsap.utils.toArray(".skill-tag").forEach((tag, i) => {
  gsap.from(tag, {
    scrollTrigger: {
      trigger: tag,
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
    duration: 0.5,
    scale: 0,
    opacity: 0,
    ease: "back.out(1.7)",
    delay: i * 0.1,
  });
});

// リストアイテムのアニメーション
gsap.utils.toArray("ul li").forEach((item, i) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
    duration: 0.5,
    x: -30,
    opacity: 0,
    ease: "power2.out",
    delay: i * 0.1,
  });
});

// フッターアニメーション
gsap.from(".center:last-child", {
  scrollTrigger: {
    trigger: ".center:last-child",
    start: "top 90%",
    toggleActions: "play none none reverse",
  },
  duration: 1,
  y: 30,
  opacity: 0,
  ease: "power3.out",
});
