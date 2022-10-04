import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerRef = document.querySelector(".gallery");
const markupGallery = createMarkupGallery(galleryItems);
galleryContainerRef.insertAdjacentHTML("beforeend", markupGallery);

function createMarkupGallery(galleryItems) {
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
    </div>`;
    })
    .join("");
}

galleryContainerRef.addEventListener("click", onGalleryImgClick);

function onGalleryImgClick(evt) {
  evt.preventDefault();
  //  так не работает, почему интересно
  //   if (!evt.target.classList.contains(".gallery__image")) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
  <img width="800" height="600" src="${evt.target.dataset.source}">
`
  );
  instance.show();
  console.log(evt.target);
  console.log(evt.target.dataset.source);

  galleryContainerRef.addEventListener("keydown", (evt) => {
    console.log("Press ESC");
    console.log(evt);
    if (evt.code === "Escape") {
      console.log("Press ESC");

      instance.close();
      console.log("instance.close()");
    }
  });
}
