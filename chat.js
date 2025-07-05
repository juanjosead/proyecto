// chat.js
document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.createElement('button');
  openBtn.id           = 'chat-open';
  openBtn.textContent  = 'Chat';
  Object.assign(openBtn.style, {
    position:'fixed', bottom:'20px', right:'20px',
    background:'#3498db', color:'white', border:'none',
    padding:'0.75rem', borderRadius:'50%', cursor:'pointer',
    fontSize:'1rem', zIndex:1001
  });
  document.body.appendChild(openBtn);

  const widget   = document.getElementById('chat-widget');
  const closeBtn = document.getElementById('chat-close');
  const sendBtn  = document.getElementById('chat-send');
  const input    = document.getElementById('chat-input');
  const body     = document.getElementById('chat-body');

  openBtn.addEventListener('click', () => {
    widget.classList.add('open');
    openBtn.style.display = 'none';
    input.focus();
  });
  closeBtn.addEventListener('click', () => {
    widget.classList.remove('open');
    openBtn.style.display = 'block';
  });

  function addMsg(text,sender){
    const m = document.createElement('div');
    m.className = 'chat-message ' + sender;
    m.textContent = text;
    body.appendChild(m);
    body.scrollTop = body.scrollHeight;
  }

  function botResp(msg){
    const m = msg.toLowerCase();
    if (m.includes('hola'))   return '¡Hola! ¿En qué puedo ayudarte?';
    if (m.includes('cita'))   return 'Para agendar, ve a "Agendar Cita".';
    if (m.includes('admin'))  return 'Sólo administradores pueden acceder al panel.';
    if (m.includes('gracias'))return '¡De nada! 😊';
    return 'Lo siento, no entendí.';
  }

  function send(){
    const txt = input.value.trim();
    if (!txt) return;
    addMsg(txt,'user');
    input.value = '';
    setTimeout(()=> addMsg(botResp(txt),'bot'), 500);
  }

  sendBtn.addEventListener('click', send);
  input.addEventListener('keydown', e => { if(e.key==='Enter') send(); });
});
