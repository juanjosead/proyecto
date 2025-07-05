// social.js
document.addEventListener('DOMContentLoaded', () => {
  const socials = [
    { href:'https://x.com',           icon:'fab fa-x',           label:'X'         },
    { href:'https://facebook.com',    icon:'fab fa-facebook-f',  label:'Facebook'  },
    { href:'https://instagram.com',   icon:'fab fa-instagram',   label:'Instagram' },
    { href:'https://flickr.com',      icon:'fab fa-flickr',      label:'Flickr'    },
    { href:'https://youtube.com',     icon:'fab fa-youtube',     label:'YouTube'   },
    { href:'https://spotify.com',     icon:'fab fa-spotify',     label:'Spotify'   },
    { href:'https://soundcloud.com',  icon:'fab fa-soundcloud',  label:'SoundCloud'},
    { href:'https://tiktok.com',      icon:'fab fa-tiktok',      label:'TikTok'    },
  ];
  const container = document.querySelector('.social-icons');
  socials.forEach(s => {
    const a = document.createElement('a');
    a.href = s.href;
    a.target = '_blank';
    a.setAttribute('aria-label', s.label);
    const i = document.createElement('i');
    i.className = s.icon;
    a.appendChild(i);
    container.appendChild(a);
  });
});
