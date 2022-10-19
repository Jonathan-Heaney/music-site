'use strict';

export const createHome = createHomePage();

function createHomePage() {
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
  const main = document.createElement('main');
  content.appendChild(main);
  const header = document.createElement('h1');
  header.textContent = 'JONATHAN HEANEY';
  main.appendChild(header);
  const subheader = document.createElement('div');
  main.appendChild(subheader);
  const pianist = document.createElement('h2');
  pianist.textContent = 'Pianist';
  const coach = document.createElement('h2');
  coach.textContent = 'Coach';
  subheader.appendChild(pianist);
  subheader.appendChild(coach);
}
