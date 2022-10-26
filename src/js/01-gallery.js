// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);
console.log(SimpleLightbox);
const gallery = document.querySelector('.gallery');
const imgGallery = CreateAndRenderMarkupGallery(galleryItems);

gallery.insertAdjacentHTML('beforeend', imgGallery);

function CreateAndRenderMarkupGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div >
`;
    })
    .join('');
}

// gallery.addEventListener('click', onImageClick);

// function onImageClick(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }

//   const instance = basicLightbox.create(`
//     <img src = "${event.target.dataset.source}"> width = "800" height = "600"
//     `);
//   instance.show();
//   console.log(event);
// }
