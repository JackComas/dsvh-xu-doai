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

const popup = new Popup();

function onChuaThay(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("Di tích Quốc gia đặc biệt Chùa Thầy.")
    .openOn(map);
}

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

const chuaThay = createMarker(
  [21.022936, 105.645427],
  "./img/chuaThayIcon.png",
  onChuaThay,
);
const chuaTayPhuong = createMarker(
  [21.0444887, 105.5696847],
  "./img/chuaTayPhuongIcon.png",
);
const dinhSo = createMarker([20.9753255, 105.676935], "./img/dinhSoIcon.png");
const hatDo = createMarker(
  [20.978733068130268, 105.59882654187525],
  "./img/hatDoIcon.png",
);
