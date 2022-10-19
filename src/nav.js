'use strict';

export const createNav = createNavBar();

function createNavBar() {
  const content = document.getElementById('content');
  const nav = document.createElement('nav');
  content.appendChild(nav);
  const jonathan = document.createElement('div');
  jonathan.textContent = 'JONATHAN HEANEY';
  const bio = document.createElement('div');
  bio.textContent = 'Biography';
  const media = document.createElement('div');
  media.textContent = 'Media';
  const calendar = document.createElement('div');
  calendar.textContent = 'Calendar';
  const contact = document.createElement('div');
  contact.textContent = 'Contact';
  nav.appendChild(jonathan);
  nav.appendChild(bio);
  nav.appendChild(media);
  nav.appendChild(calendar);
  nav.appendChild(contact);
}
