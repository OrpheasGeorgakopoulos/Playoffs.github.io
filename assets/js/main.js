// Falling confetti emojis
(function() {
  const emojis = ['🏆','🥇','🎉','⭐','🏀','✨','🎊','👑','🔥'];
  const container = document.getElementById('confetti');
  for (let i = 0; i < 20; i++) {
    const span = document.createElement('span');
    span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    span.style.left = Math.random() * 100 + '%';
    span.style.animationDuration = (4 + Math.random() * 6) + 's';
    span.style.animationDelay = (Math.random() * 6) + 's';
    span.style.fontSize = (0.7 + Math.random() * 0.9) + 'rem';
    container.appendChild(span);
  }
})();

function openLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').classList.add('open');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.getElementById('lightbox-img').src = '';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeLightbox();
});
