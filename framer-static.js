// Preserve Framer's muted, looping case-study video behavior without its router.
const observer = new IntersectionObserver(entries => {
  for (const {target, isIntersecting} of entries) {
    if (isIntersecting) target.play().catch(() => {});
    else target.pause();
  }
}, {threshold: 0.1});
document.querySelectorAll('video[autoplay]').forEach(video => observer.observe(video));
