const imagePreview = document.createElement('dialog');
imagePreview.className = 'image-preview';
imagePreview.setAttribute('closedby', 'none');
imagePreview.setAttribute('aria-label', '截图预览');
imagePreview.setAttribute('aria-describedby', 'preview-description');
imagePreview.innerHTML = `
  <div class="preview-stage">
    <img alt="">
    <button type="button" aria-label="上一张截图">‹</button>
    <button type="button" aria-label="下一张截图">›</button>
  </div>
  <footer><p id="preview-description" aria-live="polite"></p></footer>`;
document.body.append(imagePreview);

let currentContainer;
let previewRevision = 0;

async function renderPreview(step = 0) {
  const revision = ++previewRevision;
  const image = new Image();
  image.alt = currentContainer.querySelector('img').alt;
  image.src = currentContainer.querySelector('.gallery-image, .original').href;
  const description = currentContainer.querySelector('.gallery-caption p, figcaption span').textContent;

  if (step) {
    try {
      await image.decode();
    } catch {
      if (revision !== previewRevision) return;
      image.src = currentContainer.querySelector('img').src;
    }
    if (revision !== previewRevision || !imagePreview.open) return;
  }

  imagePreview.querySelector('img').replaceWith(image);
  imagePreview.querySelector('p').textContent = description;
  if (step && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    image.animate([
      { opacity: 0.45, transform: 'translateX(' + step * 24 + 'px)' },
      { opacity: 1, transform: 'translateX(0)' }
    ], { duration: 240, easing: 'ease-out' });
  }
}

function turnPreview(step) {
  if (currentContainer.matches('.game-gallery')) {
    currentContainer.dispatchEvent(new CustomEvent('preview-step', { detail: step }));
  } else {
    const figures = Array.from(document.querySelectorAll('figure:has(.original)'));
    const next = (figures.indexOf(currentContainer) + step + figures.length) % figures.length;
    currentContainer = figures[next];
  }
  renderPreview(step);
}

const [previousPreview, nextPreview] = imagePreview.querySelectorAll('button');
previousPreview.addEventListener('click', () => turnPreview(-1));
nextPreview.addEventListener('click', () => turnPreview(1));

document.addEventListener('click', event => {
  if (event.defaultPrevented || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  const link = event.target.closest('.gallery-image, figure .original, figure figcaption a');
  if (!link) return;
  currentContainer = link.closest('.game-gallery, figure');
  event.preventDefault();
  renderPreview();
  imagePreview.showModal();
});

imagePreview.addEventListener('cancel', event => event.preventDefault());
imagePreview.addEventListener('click', event => {
  if (event.target !== imagePreview) return;
  const bounds = imagePreview.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) imagePreview.close();
});
