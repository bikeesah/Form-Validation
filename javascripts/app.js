// Check Name
function checkName() {
  const name = document.getElementById('name').value.trim();
  const err = document.getElementById('nameErr');
  const input = document.getElementById('name');
  if (name.length < 5) {
    err.textContent = "Name must be 5+ characters";
    input.classList.add('invalid'); input.classList.remove('valid');
    return false;
  } else {
    err.textContent = "";
    input.classList.add('valid'); input.classList.remove('invalid');
    return true;
  }
}

// Check Email
function checkEmail() {
  const email = document.getElementById('email').value.trim();
  const err = document.getElementById('emailErr');
  const input = document.getElementById('email');
  if (!email.includes('@')) {
    err.textContent = "Enter valid email";
    input.classList.add('invalid'); input.classList.remove('valid');
    return false;
  } else {
    err.textContent = "";
    input.classList.add('valid'); input.classList.remove('invalid');
    return true;
  }
}

// Check Phone
function checkPhone() {
  const phone = document.getElementById('phone').value.trim();
  const err = document.getElementById('phoneErr');
  const input = document.getElementById('phone');
  const regex = /^[0-9]{10}$/;
  if (!regex.test(phone) || phone === "123456789") {
    err.textContent = "Enter 10-digit valid number";
    input.classList.add('invalid'); input.classList.remove('valid');
    return false;
  } else {
    err.textContent = "";
    input.classList.add('valid'); input.classList.remove('invalid');
    return true;
  }
}

// Check Password
function checkPass() {
  const pass = document.getElementById('pass').value.trim();
  const name = document.getElementById('name').value.trim().toLowerCase();
  const err = document.getElementById('passErr');
  const input = document.getElementById('pass');
  if (pass.length < 8 || pass.toLowerCase() === "password" || pass.toLowerCase() === name) {
    err.textContent = "Weak password";
    input.classList.add('invalid'); input.classList.remove('valid');
    return false;
  } else {
    err.textContent = "";
    input.classList.add('valid'); input.classList.remove('invalid');
    return true;
  }
}

// Password Strength
function checkStrength() {
  const pass = document.getElementById('pass').value.trim();
  const strength = document.getElementById('strength');
  if(pass.length >= 12) strength.textContent = "Strong";
  else if(pass.length >= 8) strength.textContent = "Medium";
  else strength.textContent = "Weak";
}

// Confirm Password
function checkCpass() {
  const pass = document.getElementById('pass').value.trim();
  const cpass = document.getElementById('cpass').value.trim();
  const err = document.getElementById('cpassErr');
  const input = document.getElementById('cpass');
  if(pass !== cpass) {
    err.textContent = "Passwords do not match";
    input.classList.add('invalid'); input.classList.remove('valid');
    return false;
  } else {
    err.textContent = "";
    input.classList.add('valid'); input.classList.remove('invalid');
    return true;
  }
}

// Terms Checkbox
function checkTerms() {
  const terms = document.getElementById('terms');
  const err = document.getElementById('termsErr');
  if(!terms.checked) {
    err.textContent = "You must agree to terms";
    return false;
  } else {
    err.textContent = "";
    return true;
  }
}

// Toggle Password
function togglePass(id) {
  const input = document.getElementById(id);
  const btn = input.nextElementSibling;
  if(input.type === "password") {
    input.type = "text"; btn.textContent = "Hide";
  } else {
    input.type = "password"; btn.textContent = "Show";
  }
}

// Reset Styles
function resetStyles() {
  document.querySelectorAll('.input-field').forEach(el => el.classList.remove('valid','invalid'));
  document.getElementById('strength').textContent = '';
  document.getElementById('successMsg').textContent = '';
  document.querySelectorAll('.error').forEach(el => el.textContent = '');
}

// Check Form
function checkForm() {
  const validName = checkName();
  const validEmail = checkEmail();
  const validPhone = checkPhone();
  const validPass = checkPass();
  const validCpass = checkCpass();
  const validTerms = checkTerms();

  if(validName && validEmail && validPhone && validPass && validCpass && validTerms) {
    document.getElementById('successMsg').textContent = "Form submitted successfully!";
    return false; // prevent actual submission for demo
  } else {
    document.getElementById('successMsg').textContent = "";
    return false;
  }
}
