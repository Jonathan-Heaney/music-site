'use strict';

export const createBio = createBioPage();

function createBioPage() {
  const content = document.getElementById('content');
  const mainBio = document.createElement('main');
  mainBio.setAttribute('id', 'mainBio');
  content.appendChild(mainBio);
  const bioHeader = document.createElement('h1');
  bioHeader.textContent = 'Biography';
  mainBio.appendChild(bioHeader);
  const paragraph = document.createElement('p');
  paragraph.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nostrum, iure fugiat a expedita dolorem illum quaerat ut at dolore repudiandae similique, illo consectetur esse perferendis animi natus voluptate. Animi aliquid, reprehenderit aliquam repudiandae saepe soluta eum delectus voluptas, porro excepturi odio explicabo iusto? Vitae ut fugit repellendus, aperiam magnam voluptatum quia voluptate impedit commodi iusto aspernatur asperiores odit.';
  mainBio.appendChild(paragraph);
  mainBio.classList.add('hidden');
}
