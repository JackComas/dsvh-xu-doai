function addImage(url, containerId) {
  const inner = document.getElementById(containerId);
  const image = document.createElement("a");
  image.innerHTML = `<img
              src="${url}"
              alt=""
              class="gallery-image"
            />`;
  image.href = `${url}`;
  image.target = "_blank";
  image.rel = "noopener";
  inner.appendChild(image);
}

for (let i = 1; i <= 25; i++) {
  addImage(`img/ChuaThay/${i}.jpg`, "galleryChuaThay");
}

for (let i = 1; i <= 10; i++) {
  addImage(`img/ChuaTayPhuong/${i}.jpg`, "galleryChuaTayPhuong");
}

for (let i = 1; i <= 16; i++) {
  addImage(`img/DinhSo/${i}.jpg`, "galleryDinhSo");
}

for (let i = 1; i <= 8; i++) {
  addImage(`img/HatDo/${i}.jpg`, "galleryHatDo");
}

for (let i = 1; i <= 9; i++) {
  addImage(`img/LeHoi/${i}.jpg`, "galleryLeHoi");
}
