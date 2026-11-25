const coverImages = [...document.querySelectorAll('img[data-project-cover]')];
const leadVideo = document.querySelector('.project-video[poster]');
if (leadVideo) {
  const poster = new Image();
  poster.src = leadVideo.poster;
  coverImages.push(poster);
}
const projectCoversReady = Promise.allSettled(coverImages.map(image => image.decode()));
const visibleProjectVideos = new Set();
const projectVideoObserver = new IntersectionObserver(entries => {
  for (const {target: video, isIntersecting} of entries) {
    if (!isIntersecting || video.hidden) {
      visibleProjectVideos.delete(video);
      video.pause();
      continue;
    }
    visibleProjectVideos.add(video);
    projectCoversReady.then(() => {
      if (!visibleProjectVideos.has(video) || video.hidden) return;
      if (video.dataset.poster) video.poster = video.dataset.poster;
      video.play().catch(() => {});
    });
  }
});
document.querySelectorAll('.project-video, #games-2d video').forEach(video => projectVideoObserver.observe(video));
