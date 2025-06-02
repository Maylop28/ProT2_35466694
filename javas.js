const formBox = document.getElementById('form-box');
const formTitle = document.getElementById('form-title');
const submitBtn = document.getElementById('submit-btn');
const toggleForm = document.getElementById('toggle-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

let isLogin = true;

toggleForm.addEventListener('click', () => {
  isLogin = !isLogin;
  formTitle.textContent = isLogin ? 'Iniciar Sesión' : 'Crear Cuenta';
  submitBtn.textContent = isLogin ? 'Entrar' : 'Registrarse';
  toggleForm.innerHTML = isLogin
    ? '¿No tienes cuenta? <span>Crea una</span>'
    : '¿Ya tienes cuenta? <span>Inicia sesión</span>';
});

submitBtn.addEventListener('click', () => {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!username || !password) {
    alert('Por favor, completa todos los campos');
    return;
  }

  if (isLogin) {
    alert(`Bienvenido, ${username}! (Simulando login)`);
  } else {
    alert(`Cuenta creada para: ${username} (Simulando registro)`);
  }

  usernameInput.value = '';
  passwordInput.value = '';
});
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');
  
    if (!fullname || !email || !username || !password || !confirmPassword) {
      message.textContent = 'Todos los campos son obligatorios.';
      return;
    }
  
    if (password !== confirmPassword) {
      message.textContent = 'Las contraseñas no coinciden.';
      return;
    }
  
    if (password.length < 6) {
      message.textContent = 'La contraseña debe tener al menos 6 caracteres.';
      return;
    }
  
    message.style.color = 'green';
    message.textContent = '¡Registro exitoso!';
  
    
    setTimeout(() => {
        document.getElementById('registerForm').reset();
        message.textContent = '';
      }, 3000);
    });