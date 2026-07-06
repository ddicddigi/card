const card = document.getElementById('card');
const emailLink = document.getElementById('emailLink');
const toast = document.getElementById('toast');

let toastTimer = null;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

emailLink.addEventListener('click', (e) => {
  e.preventDefault();
  const email = 'th@sideonai.com';

  navigator.clipboard.writeText(email).then(() => {
    showToast('이메일이 복사되었습니다 ✉️');
  }).catch(() => {
    window.location.href = `mailto:${email}`;
  });
});

card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;

  card.style.transform = `
    perspective(800px)
    rotateY(${x * 8}deg)
    rotateX(${-y * 8}deg)
    translateY(-4px)
  `;
});

card.addEventListener('mouseleave', () => {
  card.style.transform = '';
});

document.querySelectorAll('.skill').forEach((skill, index) => {
  skill.style.animationDelay = `${index * 0.1}s`;
});
