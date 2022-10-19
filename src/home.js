'use strict';

export const createHome = createHomePage();

function createHomePage() {
  const content = document.getElementById('content');
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
