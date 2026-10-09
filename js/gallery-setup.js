const galleryImages = ["image1.jpg", "image2.jpg", "image3.jpg"];

const inner = document.getElementById("galleryInner");
const indicators = document.getElementById("galleryIndicators");

galleryImages.forEach((file, i) => {
  const active = i === 0 ? "active" : "";

  inner.insertAdjacentHTML(
    "beforeend",
    `<div class="carousel-item ${active}" data-bs-interval="4000">
         <img src="/gallery/img/${file}" class="d-block w-100" alt="Ảnh ${i + 1}"
              style="max-height: 500px; object-fit: cover;" />
       </div>`,
  );

  indicators.insertAdjacentHTML(
    "beforeend",
    `<button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="${i}"
         class="${active}" ${i === 0 ? 'aria-current="true"' : ""} aria-label="Slide ${i + 1}"></button>`,
  );
});
