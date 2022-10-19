'use strict';

export const createHome = createHomePage();

function createHomePage() {
  const content = document.getElementById('content');
  const mainHome = document.createElement('main');
  mainHome.setAttribute('id', 'mainHome');
  content.appendChild(mainHome);
  const header = document.createElement('h1');
  header.textContent = 'JONATHAN HEANEY';
  mainHome.appendChild(header);
  const subheader = document.createElement('div');
  mainHome.appendChild(subheader);
  const pianist = document.createElement('h2');
  pianist.textContent = 'Pianist';
  const coach = document.createElement('h2');
  coach.textContent = 'Coach';
  subheader.appendChild(pianist);
  subheader.appendChild(coach);
}
