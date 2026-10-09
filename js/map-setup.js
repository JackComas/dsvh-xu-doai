import {
  LeafletMap,
  TileLayer,
  Marker,
  Circle,
  Polygon,
  Popup,
  Icon,
} from "leaflet";
const map = new LeafletMap("map").setView([21.006888, 105.634511], 12);

new TileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

function createMarker(coords, iconPath, onClick) {
  const markerIcon = new Icon({
    iconUrl: iconPath,
    iconSize: [128, 100],
    iconAnchor: [64, 50],
    popupAnchor: [0, 100],
  });
  const marker = new Marker(coords, {
    icon: markerIcon,
  }).addTo(map);

  marker.on("click", onClick);
}

function infoPopUp(
  e,
  name = "",
  text = "",
  url = "#experience",
  urlText = "Trải nghiệm",
) {
  const popup = new Popup();
  const content = `
  <h5 class="text" style="font-weight: 700;">${name}</h5>
  <p class="popup-text">${text}
  </p>
  
  <p class="popup-text" style="font-weight: 700; font-size: 120%;">
    <a href="${url}">
        <i>${urlText}</i>
    </a></p>
    `;

  popup.setLatLng(e.latlng).setContent(content).openOn(map);
}

const chuaThay = createMarker(
  [21.022936, 105.645427],
  "./img/chuaThayIcon.png",
  (e) => {
    infoPopUp(
      e,
      "Chùa Thầy",
      "Ngôi chùa cổ gắn liền với Thiền sư Từ Đạo Hạnh, nổi bật với kiến trúc truyền thống, hồ Long Trì thơ mộng và nghệ thuật múa rối nước dân gian.",
    );
  },
);
const chuaTayPhuong = createMarker(
  [21.0444887, 105.5696847],
  "./img/chuaTayPhuongIcon.png",
  (e) => {
    infoPopUp(
      e,
      "Chùa Tây Phương",
      "Di tích nổi tiếng với kiến trúc chùa cổ độc đáo và hệ thống tượng La Hán bằng gỗ mang giá trị nghệ thuật điêu khắc đặc sắc.",
    );
  },
);
const dinhSo = createMarker(
  [20.9753255, 105.676935],
  "./img/dinhSoIcon.png",
  (e) => {
    infoPopUp(
      e,
      "Đình So",
      "Ngôi đình cổ tiêu biểu của xứ Đoài, gây ấn tượng bởi kiến trúc gỗ tinh xảo, những chạm khắc dân gian công phu và không gian văn hóa làng quê Bắc Bộ.",
    );
  },
);
const hatDo = createMarker(
  [20.978733068130268, 105.59882654187525],
  "./img/hatDoIcon.png",
  (e) => {
    infoPopUp(
      e,
      "Hát Dô",
      "Loại hình diễn xướng dân gian độc đáo gắn với vùng Liệp Tuyết, Quốc Oai, kết hợp lời ca, nhạc cụ và nghi lễ truyền thống, góp phần lưu giữ bản sắc văn hóa địa phương.",
    );
  },
);
