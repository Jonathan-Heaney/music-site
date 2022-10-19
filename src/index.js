'use strict';

import './main.css';
import { createNav } from './nav';
import { createHome } from './home';
import { createBio } from './bio';

createNav;
createHome;

const content = document.getElementById('content');
const home = document.getElementById('home');
const bio = document.getElementById('bio');
const media = document.getElementById('media');
const calendar = document.getElementById('calendar');
const contact = document.getElementById('contact');
const mainBio = document.getElementById('mainBio');

home.addEventListener('click', () => {
  mainHome.classList.remove('hidden');
  mainBio.classList.add('hidden');
});

bio.addEventListener('click', () => {
  mainHome.classList.add('hidden');
  mainBio.classList.remove('hidden');
});
