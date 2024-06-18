function validateForm() {
    var username = document.getElementById('username').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value;

    var usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

    var valid = true;

    // Validar nome de usuário
    if (!usernameRegex.test(username)) {
      document.getElementById('usernameError').textContent = 'Nome de usuário inválido (3-16 caracteres alfanuméricos, traço e sublinhado permitidos).';
      valid = false;
    } else {
      document.getElementById('usernameError').textContent = '';
    }

    // Validar email
    if (!emailRegex.test(email)) {
      document.getElementById('emailError').textContent = 'Por favor, insira um e-mail válido.';
      valid = false;
    } else {
      document.getElementById('emailError').textContent = '';
    }

    // Validar senha
    if (!passwordRegex.test(password)) {
      document.getElementById('passwordError').textContent = 'A senha deve conter pelo menos 8 caracteres, incluindo pelo menos uma letra minúscula, uma letra maiúscula, um número e um caractere especial.';
      valid = false;
    } else {
      document.getElementById('passwordError').textContent = '';
    }

    return valid;
  }