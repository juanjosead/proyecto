// registro.js
document.addEventListener('DOMContentLoaded', () => {
  const tabReg = document.getElementById('tab-reg');
  const tabLog = document.getElementById('tab-log');
  const formReg = document.getElementById('form-reg');
  const formLog = document.getElementById('form-log');

  tabReg.addEventListener('click', () => {
    tabReg.classList.add('active');
    tabLog.classList.remove('active');
    formReg.classList.remove('hidden');
    formLog.classList.add('hidden');
  });

  tabLog.addEventListener('click', () => {
    tabLog.classList.add('active');
    tabReg.classList.remove('active');
    formLog.classList.remove('hidden');
    formReg.classList.add('hidden');
  });
});

function registrarse() {
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const clave  = document.getElementById('clave').value.trim();
  if (!nombre || !correo || !clave) {
    return alert('Completa todos los campos para registrarte.');
  }
  alert('¡Registro exitoso! Ahora puedes reservar.');
  window.location.href = 'reserva.html';
}

function loginAdmin() {
  const u = document.getElementById('admin-user').value.trim();
  const p = document.getElementById('admin-pass').value.trim();
  if (u === 'admin1' && p === '123') {
    window.location.href = 'admin.html';
  } else {
    alert('Credenciales de administrador incorrectas.');
  }
}
