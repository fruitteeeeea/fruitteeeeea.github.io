const projectVideoObserver = new IntersectionObserver(entries => {
  for (const { target: video, isIntersecting } of entries) {
    if (!isIntersecting || video.hidden) {
      video.pause();
      continue;
    }
    if (video.dataset.poster) {
      video.poster = video.dataset.poster;
      delete video.dataset.poster;
    }
    video.play().catch(() => {});
  }
});

document.querySelectorAll('.project-video, #games-2d video').forEach(video => {
  projectVideoObserver.observe(video);
});
