document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn  = document.getElementById('chat-toggle');
  const chatWindow = document.getElementById('chat-window');
  const closeBtn   = document.getElementById('chat-close');
  const form       = document.getElementById('chat-form');
  const input      = document.getElementById('chat-input');
  const body       = document.getElementById('chat-body');

  toggleBtn.addEventListener('click', () => {
    chatWindow.classList.toggle('hidden');
  });
  closeBtn.addEventListener('click', () => {
    chatWindow.classList.add('hidden');
  });

  const responses = [
    { keys:['hola'],       reply:'¡Hola! ¿En qué puedo ayudarte?' },
    { keys:['registro'],   reply:'Para registrarte ve a Agendar Cita.' },
    { keys:['cita','hora'],reply:'Escoge fecha y hora en el formulario de Reserva.' },
    { keys:['admin'],      reply:'El admin usa Login Admin con admin1/123.' },
    { keys:['gracias'],    reply:'¡Con gusto! Aquí estoy para lo que necesites.' },
  ];

  form.addEventListener('submit', e => {
    e.preventDefault();
    const txt = input.value.trim();
    if (!txt) return;
    addMessage(txt, 'user');
    input.value = '';
    setTimeout(() => {
      const m = txt.toLowerCase();
      const found = responses.find(r => r.keys.some(k => m.includes(k)));
      addMessage(found ? found.reply : 'Lo siento, no entendí. ¿Puedes reformular?', 'bot');
      body.scrollTop = body.scrollHeight;
    }, 300);
  });

  function addMessage(msg, who) {
    const div = document.createElement('div');
    div.className = `chat-msg ${who}`;
    const b = document.createElement('div');
    b.className = 'bubble';
    b.textContent = msg;
    div.appendChild(b);
    body.appendChild(div);
  }
});
