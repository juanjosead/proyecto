document.addEventListener('DOMContentLoaded', () => {
  const socials = [
    { url:'https://x.com',         icon:'fab fa-x' },
    { url:'https://facebook.com',   icon:'fab fa-facebook-f' },
    { url:'https://instagram.com',  icon:'fab fa-instagram' },
    { url:'https://youtube.com',    icon:'fab fa-youtube' },
    { url:'https://spotify.com',    icon:'fab fa-spotify' },
    { url:'https://soundcloud.com', icon:'fab fa-soundcloud' },
    { url:'https://tiktok.com',     icon:'fab fa-tiktok' }
  ];

  const container = document.querySelector('.social-icons');
  socials.forEach(s => {
    const a = document.createElement('a');
    a.href = s.url;
    a.target = '_blank';
    a.innerHTML = `<i class="${s.icon}"></i>`;
    container.appendChild(a);
  });
});
