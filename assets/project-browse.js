// Reveal each cover shortly before it enters the page or its horizontal track.
const coverObserver = new IntersectionObserver(entries => {
  for (const { target: image, isIntersecting } of entries) {
    if (isIntersecting) {
      image.parentElement.querySelector('source').remove();
      coverObserver.unobserve(image);
    }
  }
}, { rootMargin: '128px 0px' });

document.querySelectorAll('picture[data-deferred-cover] img').forEach(image => coverObserver.observe(image));

for (const row of document.querySelectorAll('.browse-row')) {
  const track = row.querySelector('.browse-track');
  const [previous, next] = row.querySelectorAll('button');

  function updateEdges() {
    const remaining = track.scrollWidth - track.clientWidth - track.scrollLeft;
    previous.disabled = track.scrollLeft <= 1;
    next.disabled = remaining <= 1;
    track.classList.toggle('more-left', !previous.disabled);
    track.classList.toggle('more-right', !next.disabled);
  }

  function turnPage(direction) {
    const cards = track.children;
    const stride = cards[1].offsetLeft - cards[0].offsetLeft;
    const pageSize = Math.max(1, Math.floor((track.clientWidth + parseFloat(getComputedStyle(track).columnGap) + 1) / stride));
    const left = (Math.round(track.scrollLeft / stride) + direction * pageSize) * stride;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.scrollTo({ left, behavior: reducedMotion ? 'instant' : 'smooth' });
  }

  previous.addEventListener('click', () => turnPage(-1));
  next.addEventListener('click', () => turnPage(1));
  track.addEventListener('scroll', updateEdges, { passive: true });
  new ResizeObserver(updateEdges).observe(track);
  updateEdges();
}
