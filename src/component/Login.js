// eslint-disable-next-line import/no-cycle
// import { onNavigate } from '../main.js';
import { formulariologin } from '../lib/index.js';

// export const Login = () => {
export const Login = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  HomeDiv.className = 'divPadre2';
  const divBienvenida2 = document.createElement('div');
  HomeDiv.appendChild(divBienvenida2);
  const mensajeBienvenida2 = document.createElement('h2');
  mensajeBienvenida2.textContent = 'Welcome to lymusic';
  divBienvenida2.appendChild(mensajeBienvenida2);
  divBienvenida2.className = 'mensajeBienvenida2';
  const form = document.createElement('form');
  const divForm = document.createElement('div');
  HomeDiv.appendChild(form);
  form.appendChild(divForm);
  const tituloForm = document.createElement('h1');
  tituloForm.textContent = 'Sign In';
  divForm.appendChild(tituloForm);
  divForm.className = 'formulariologin';
  const grupo1 = document.createElement('div');
  const grupo2 = document.createElement('div');
  const email = document.createElement('input');
  email.type = 'email';
  email.placeholder = 'Email';
  const labelEmail = document.createElement('label');
  labelEmail.textContent = 'Email';
  const pass = document.createElement('input');
  pass.type = 'password';
  pass.placeholder = 'Password';
  const labelPass = document.createElement('label');
  labelPass.textContent = 'Password';
  const buttonSubmit = document.createElement('button');
  buttonSubmit.textContent = 'Login';
  grupo1.appendChild(labelEmail);
  grupo2.appendChild(labelPass);
  grupo1.appendChild(email);
  grupo2.appendChild(pass);
  divForm.appendChild(grupo1);
  divForm.appendChild(grupo2);
  divForm.appendChild(buttonSubmit);
  grupo2.className = 'grupos2';
  grupo1.className = 'grupos2';
  buttonSubmit.type = 'submit';
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formulariologin(email.value, pass.value);
  });
  const divBoton = document.createElement('div');
  divBoton.className = 'botonRegreso2';
  HomeDiv.appendChild(divBoton);
  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Back to home';
  divBoton.appendChild(buttonHome);
  buttonHome.addEventListener('click', () => onNavigate('/'));
  return HomeDiv;
};
