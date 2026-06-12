/**
 * FWG Motion System — GSAP-powered scroll reveals, hero choreography,
 * counter animations, and interactive microinteractions.
 *
 * Respects prefers-reduced-motion — all animations gate on matchMedia.
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function initNav() {
  const nav = document.getElementById("site-nav");
  if (!nav) return;
  const update = () => {
    const scrolled = window.scrollY > 24;
    nav.dataset.scrolled = scrolled ? "true" : "false";
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

function initHero() {
  const hero = document.querySelector("[data-hero]") as HTMLElement | null;
  if (!hero) return;

  const chips      = hero.querySelector("[data-hero-chips]");
  const lines      = hero.querySelectorAll("[data-hero-line]");
  const sub        = hero.querySelector("[data-hero-sub]");
  const ctas       = hero.querySelector("[data-hero-ctas]");
  const note       = hero.querySelector("[data-hero-note]");
  const proofBar   = hero.querySelector("[data-hero-proof]");
  const speedLines = hero.querySelectorAll("[data-speed-line]");

  if (reduced) {
    [chips, ...lines, sub, ctas, note, proofBar].forEach(el => {
      if (el) gsap.set(el, { autoAlpha: 1, y: 0, clipPath: "none" });
    });
    return;
  }

  gsap.set([chips, sub, ctas, note, proofBar], { autoAlpha: 0, y: 20 });
  gsap.set(lines, { clipPath: "inset(0 100% 0 0)" });
  gsap.set(speedLines, { autoAlpha: 0, scaleX: 0.4, transformOrigin: "right center" });

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  tl.to(speedLines, { autoAlpha: 0.06, scaleX: 1, duration: 0.5, stagger: 0.08 }, 0);
  tl.to(chips, { autoAlpha: 1, y: 0, duration: 0.4 }, 0.1);
  tl.to(lines, { clipPath: "inset(0 0% 0 0)", duration: 0.55, stagger: 0.14, ease: "power3.out" }, 0.25);
  tl.to(sub,      { autoAlpha: 1, y: 0, duration: 0.45 }, 0.65);
  tl.to(ctas,     { autoAlpha: 1, y: 0, duration: 0.4 },  0.82);
  tl.to(note,     { autoAlpha: 1, y: 0, duration: 0.35 }, 0.95);
  tl.to(proofBar, { autoAlpha: 1, y: 0, duration: 0.4 },  1.05);
  tl.add(() => {
    gsap.to(speedLines, {
      autoAlpha: 0.1, duration: 2.8, ease: "sine.inOut",
      yoyo: true, repeat: -1, stagger: { each: 0.4, from: "end" },
    });
  }, 1.3);
}

function initScrollReveals() {
  if (reduced) {
    document.querySelectorAll("[data-reveal], [data-reveal-group] > *").forEach(el => {
      gsap.set(el, { autoAlpha: 1, y: 0, clipPath: "none" });
    });
    return;
  }

  const revealEls = Array.from(document.querySelectorAll("[data-reveal='fade']")).filter(
    el => !el.closest("[data-reveal-group]")
  );
  revealEls.forEach(el => {
    gsap.set(el, { autoAlpha: 0, y: 28 });
    ScrollTrigger.create({
      trigger: el, start: "top 88%",
      onEnter: () => gsap.to(el, { autoAlpha: 1, y: 0, duration: 0.55, ease: "power3.out" }),
      once: true,
    });
  });

  const clipEls = Array.from(document.querySelectorAll("[data-reveal='clip']")).filter(
    el => !el.closest("[data-reveal-group]")
  );
  clipEls.forEach(el => {
    gsap.set(el, { clipPath: "inset(0 100% 0 0)", autoAlpha: 1 });
    ScrollTrigger.create({
      trigger: el, start: "top 88%",
      onEnter: () => gsap.to(el, { clipPath: "inset(0 0% 0 0)", duration: 0.6, ease: "power3.out" }),
      once: true,
    });
  });

  document.querySelectorAll("[data-reveal-group]").forEach(group => {
    const children = group.querySelectorAll(":scope > *");
    gsap.set(children, { autoAlpha: 0, y: 32 });
    const staggerVal = Number((group as HTMLElement).dataset.revealGroup) || 0.08;
    ScrollTrigger.create({
      trigger: group, start: "top 82%",
      onEnter: () => gsap.to(children, { autoAlpha: 1, y: 0, duration: 0.5, stagger: staggerVal, ease: "power3.out" }),
      once: true,
    });
  });
}

function initUnderlines() {
  if (reduced) return;
  document.querySelectorAll("[data-underline]").forEach(el => {
    const underline = el.querySelector(".underline-accent-bar");
    if (!underline) return;
    gsap.set(underline, { scaleX: 0, transformOrigin: "left center" });
    ScrollTrigger.create({
      trigger: el, start: "top 85%",
      onEnter: () => gsap.to(underline, { scaleX: 1, duration: 0.6, delay: 0.15, ease: "power3.out" }),
      once: true,
    });
  });
}

function initCounters() {
  if (reduced) return;
  document.querySelectorAll("[data-countup]").forEach(el => {
    const target = Number((el as HTMLElement).dataset.countup) || 0;
    const suffix = (el as HTMLElement).dataset.countupSuffix || "";
    const prefix = (el as HTMLElement).dataset.countupPrefix || "";
    let triggered = false;
    ScrollTrigger.create({
      trigger: el, start: "top 85%",
      onEnter: () => {
        if (triggered) return;
        triggered = true;
        gsap.fromTo({ val: 0 }, { val: target }, {
          duration: 1.4, ease: "power2.out",
          onUpdate: function () {
            el.textContent = prefix + Math.round(this.targets()[0].val).toLocaleString() + suffix;
          },
        });
      },
      once: true,
    });
  });
}

function initHowItWorksProgress() {
  if (reduced) return;
  const section = document.querySelector("[data-hiw-section]") as HTMLElement | null;
  const bar     = document.querySelector("[data-hiw-bar]")     as HTMLElement | null;
  if (!section || !bar) return;
  gsap.to(bar, {
    scaleY: 1, ease: "none",
    scrollTrigger: { trigger: section, start: "top 70%", end: "bottom 50%", scrub: 0.4 },
  });
  section.querySelectorAll("[data-hiw-step]").forEach(step => {
    const num = step.querySelector("[data-hiw-num]");
    ScrollTrigger.create({
      trigger: step, start: "top 65%",
      onEnter:     () => num?.classList.add("hiw-num--active"),
      onLeaveBack: () => num?.classList.remove("hiw-num--active"),
    });
  });
}

function initCardHovers() {
  if (reduced) return;
  document.querySelectorAll("[data-feature-card]").forEach(card => {
    card.addEventListener("mouseenter", () => gsap.to(card, { y: -6, duration: 0.25, ease: "power2.out" }));
    card.addEventListener("mouseleave", () => gsap.to(card, { y: 0,  duration: 0.3,  ease: "power2.inOut" }));
  });
}

function initPlanCardShimmer() {
  if (reduced) return;
  const shimmer = document.querySelector("[data-plan-shimmer]") as HTMLElement | null;
  if (!shimmer) return;
  ScrollTrigger.create({
    trigger: shimmer, start: "top 90%",
    onEnter: () => shimmer.classList.add("shimmer-active"),
    once: true,
  });
}

function initStickyCTA() {
  const cta     = document.querySelector("[data-sticky-cta]") as HTMLElement | null;
  const heroCta = document.querySelector("[data-hero-ctas] a") as HTMLElement | null;
  if (!cta) return;
  let visible = false;
  if (heroCta) {
    ScrollTrigger.create({
      trigger: heroCta, start: "bottom top", end: "bottom top",
      onEnter:     () => show(),
      onLeaveBack: () => hide(),
    });
  } else {
    ScrollTrigger.create({ start: "300px", onEnter: () => show(), onLeaveBack: () => hide() });
  }
  function show() {
    if (visible) return;
    visible = true;
    cta!.classList.add("sticky-cta--visible");
    if (!reduced) gsap.fromTo(cta, { y: 80, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.4, ease: "back.out(1.4)" });
  }
  function hide() {
    if (!visible) return;
    visible = false;
    cta!.classList.remove("sticky-cta--visible");
    if (!reduced) gsap.to(cta, { y: 80, autoAlpha: 0, duration: 0.3, ease: "power2.in" });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initHero();
  initScrollReveals();
  initUnderlines();
  initCounters();
  initHowItWorksProgress();
  initCardHovers();
  initPlanCardShimmer();
  initStickyCTA();
});
