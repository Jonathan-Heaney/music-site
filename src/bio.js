'use strict';

export const createBio = createBioPage();

function createBioPage() {
  const content = document.getElementById('content');
  const main = document.createElement('main');
  content.appendChild(main);
  const header = document.createElement('h1');
  header.textContent = 'Biography';
  main.appendChild(header);
  const paragraph = document.createElement('p');
  paragraph.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nostrum, iure fugiat a expedita dolorem illum quaerat ut at dolore repudiandae similique, illo consectetur esse perferendis animi natus voluptate. Animi aliquid, reprehenderit aliquam repudiandae saepe soluta eum delectus voluptas, porro excepturi odio explicabo iusto? Vitae ut fugit repellendus, aperiam magnam voluptatum quia voluptate impedit commodi iusto aspernatur asperiores odit.';
  main.appendChild(paragraph);
}
