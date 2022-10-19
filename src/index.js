'use strict';

import './main.css';
import { createNav } from './nav';
import { createHome } from './home';
// import { createBio } from './bio';

createNav;
createHome;

const home = document.getElementById('home');
const bio = document.getElementById('bio');
const media = document.getElementById('media');
const calendar = document.getElementById('calendar');
const contact = document.getElementById('contact');

home.addEventListener('click', createHome);
// bio.addEventListener('click', createBio);
