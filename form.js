var buat_login = () => {
  login = document.getElementById("X");
  login.parentElement.removeChild(login);

  p = document.createElement("P");
  p.className = "tulisan_login";
  p.innerHTML = "Silahkan Mendaftar";

  element = document.getElementsByTagName("div")[0];
  element.appendChild(p);

  form = document.createElement("FORM");
  element.appendChild(form);

  label = document.createElement("label");
  label.innerHTML = "Nama User";
  form.appendChild(label);
  inputUser = document.createElement("input");
  inputUser.type = "text";
  inputUser.name = "username";
  inputUser.className = "form_login";
  inputUser.placeholder = "Nama User";
  form.appendChild(inputUser);

  label2 = document.createElement("label");
  label2.innerHTML = "Nomor Handphone";
  form.appendChild(label2);
  inputTel = document.createElement("input");
  inputTel.type = "number";
  inputTel.className = "form_login";
  inputTel.placeholder = "Nomor Handphone";
  form.appendChild(inputTel);

  label3 = document.createElement("label");
  label3.innerHTML = "Username";
  form.appendChild(label3);
  inputEmail = document.createElement("input");
  inputEmail.type = "text";
  inputEmail.className = "form_login";
  inputEmail.placeholder = "Username atau email";
  form.appendChild(inputEmail);

  label4 = document.createElement("label");
  label4.innerHTML = "Password";
  form.appendChild(label4);
  password = document.createElement("input");
  password.type = "password";
  password.className = "form_login";
  password.placeholder = "Password";
  form.appendChild(password);

  tombol = document.createElement("input");
  tombol.type = "submit";
  tombol.className = "tombol_login";
  tombol.value = "daftar sekarang";
  tombol.style.textTransform = "uppercase";
  form.appendChild(tombol);
}