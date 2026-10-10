const galleryImages = [
  "ChuaThay/2.jpg",
  "ChuaThay/8.jpg",
  "ChuaTayPhuong/3.jpg",
  "ChuaTayPhuong/9.jpg",
  "DinhSo/2.jpg",
  "DinhSo/6.jpg",
  "HatDo/1.jpg",
  "HatDo/3.jpg",
  "LeHoi/5.jpg",
  "LeHoi/8.jpg",
];

const inner = document.getElementById("galleryInner");
const indicators = document.getElementById("galleryIndicators");

galleryImages.forEach((file, i) => {
  const active = i === 0 ? "active" : "";

  inner.insertAdjacentHTML(
    "beforeend",
    `<div class="carousel-item ${active}" data-bs-interval="10000">
         <div class="w-100 h-100">
         <img src="/gallery/img/${file}" class="d-block w-100" alt="Ảnh ${i + 1}"
              style="max-height: 500px; object-fit: cover; position: relative;" />
          </div>
       </div>`,
  );

  indicators.insertAdjacentHTML(
    "beforeend",
    `<button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="${i}"
         class="${active}" ${i === 0 ? 'aria-current="true"' : ""} aria-label="Slide ${i + 1}"></button>`,
  );
});
