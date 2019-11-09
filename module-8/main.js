import gallery from './gallery-items.js';

// reference on html elements
const refs = {
  listElem: document.querySelector('.js-gallery'),
  closeModal: document.querySelector('button[data-action="close-lightbox"]'),
  lightbox: document.querySelector('div.lightbox'),
  lightboxImage: document.querySelector('.lightbox__image'),
  lightboxContent: document.querySelector('.lightbox__content'),
};

// add item to root elements via one step
function addItemToList(parent, galleryItem) {
  parent.insertAdjacentHTML(
    'afterbegin',
    galleryItem
      .map(elem => {
        return render(elem);
      })
      .join(''),
  );
}

addItemToList(refs.listElem, gallery);

// function template for future elements
function render({ preview, original, description }) {
  const item = `
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
  <span class="gallery__icon">
  <i class="material-icons">zoom_out_map</i>
  </span>
  </a>
  </li>`;

  return item;
}

// get url of image which is selected
function getUrlBiggestImg(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }

  // get url of image which is select
  const getUrl = e.target.dataset.source;
  const getAltText = e.target.getAttribute('alt');
  refs.lightbox.classList.add('is-open');
  refs.lightboxImage.setAttribute('src', getUrl);
  refs.lightboxImage.setAttribute('alt', getAltText);
}

// close modal window
function closeModal() {
  refs.lightbox.classList.remove('is-open');
  refs.lightboxImage.setAttribute('src', '');
}

// check if you click outside of your modal window
function isModalZone(e) {
  if (e.target !== e.currentTarget) {
    return;
  }
  closeModal();
}


// close modal via key escape
function closeViaKeyEsc(e) {
  if (e.keyCode !== 27) {
    return;
  }
  closeModal();
}

// get list of all urls 
const modalImageUrls = gallery.map(el => el.original);
const lastElemIdx = modalImageUrls.length - 1;
const firstGalleryElemIndex = 0;

// increase image index
const nextImage = idx => {
  if (idx === lastElemIdx) {
    idx = firstGalleryElemIndex;
  }

  return (idx += 1);
};

// reduce image index
const prevImage = idx => {
  if (idx === firstGalleryElemIndex) {
    idx = lastElemIdx;
  }

  return (idx -= 1);
};


// change image url via click on key right or left
function ModalImage(e) {
  const index = modalImageUrls.indexOf(refs.lightboxImage.src);
  if (e.keyCode === 39) {
    refs.lightboxImage.src = modalImageUrls[nextImage(index)];
  }
  if (e.keyCode === 37) {
    refs.lightboxImage.src = modalImageUrls[prevImage(index)];
  }
}


// events functions
refs.listElem.addEventListener('click', getUrlBiggestImg);
refs.closeModal.addEventListener('click', closeModal);
refs.lightboxContent.addEventListener('click', isModalZone);
window.addEventListener('keyup', closeViaKeyEsc);
window.addEventListener('keyup', ModalImage);
