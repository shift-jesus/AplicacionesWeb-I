const horasEl = document.getElementById('horas');
const minutosEl = document.getElementById('minutos');
const segundosEl = document.getElementById('segundos');

const actualizarReloj = () => {
  const tiempo = new Date();
  
  horasEl.textContent = String(tiempo.getHours()).padStart(2, '0');
  minutosEl.textContent = String(tiempo.getMinutes()).padStart(2, '0');
  segundosEl.textContent = String(tiempo.getSeconds()).padStart(2, '0');
};

setInterval(actualizarReloj, 1000);
actualizarReloj(); 