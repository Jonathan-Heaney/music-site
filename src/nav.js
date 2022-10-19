'use strict';

export const createNav = createNavBar();

function createNavBar() {
  const content = document.getElementById('content');
  const nav = document.createElement('nav');
  content.appendChild(nav);
  const jonathan = document.createElement('div');
  jonathan.textContent = 'JONATHAN HEANEY';
  jonathan.setAttribute('id', 'home');
  const bio = document.createElement('div');
  bio.textContent = 'Biography';
  bio.setAttribute('id', 'bio');
  const media = document.createElement('div');
  media.textContent = 'Media';
  media.setAttribute('id', 'media');
  const calendar = document.createElement('div');
  calendar.textContent = 'Calendar';
  calendar.setAttribute('id', 'calendar');
  const contact = document.createElement('div');
  contact.textContent = 'Contact';
  contact.setAttribute('id', 'contact');
  nav.appendChild(jonathan);
  nav.appendChild(bio);
  nav.appendChild(media);
  nav.appendChild(calendar);
  nav.appendChild(contact);
}
