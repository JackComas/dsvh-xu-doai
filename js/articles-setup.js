// ENTIRELY VIBECODED

// Add every article link here

const articles = [
  {
    link: "https://nguoihanoi.vn/hat-do-giai-dieu-doc-dao-cua-nguoi-ha-noi-68752.html",
    name: "Hát Dô - giai điệu độc đáo của người Hà Nội",
  },
  {
    link: "https://thegioidisan.vn/vi/chua-tay-phuong-di-tich-quoc-gia-dac-biet-cua-thu-do-ha-noi.html",
    name: "Chùa Tây Phương - Di tích quốc gia đặc biệt của Thủ đô Hà Nội",
  },
  {
    link: "https://mia.vn/cam-nang-du-lich/kham-pha-chua-thay-di-tich-kien-truc-nghe-thuat-doc-dao-giua-long-thu-do-2725",
    name: "Khám phá Chùa Thầy - Di tích kiến trúc nghệ thuật độc đáo giữa lòng Thủ đô",
  },
  {
    link: "https://tienphong.vn/kien-truc-doc-dao-ngoi-chua-co-gan-1000-nam-tuoi-post1628274.tpo",
    name: "Kiến trúc độc đáo ngôi chùa cổ gần 1.000 năm tuổi",
  },
  {
    link: "https://showtinhhoabacbo.com/tham-quan-chua-thay",
    name: "Tham quan Chùa Thầy",
  },
  {
    link: "https://greenfuture.tech/tin-tuc/chua-thay-ha-noi",
    name: "Chùa Thầy Hà Nội",
  },
  {
    link: "https://www.facebook.com/chuaquansu.73quansu/posts/l%E1%BB%85-h%E1%BB%99i-ch%C3%B9a-th%E1%BA%A7y-2026-di%E1%BB%85n-ra-trong-3-ng%C3%A0y-v%E1%BB%9Bi-nhi%E1%BB%81u-ho%E1%BA%A1t-%C4%91%E1%BB%99ng-v%C4%83n-h%C3%B3a-%C4%91%E1%BA%B7c-s%E1%BA%AFc/916025117848620/",
    name: "Lễ hội Chùa Thầy 2026 diễn ra trong 3 ngày với nhiều hoạt động văn hóa đặc sắc",
  },
  {
    link: "https://mia.vn/cam-nang-du-lich/kham-pha-le-hoi-chua-thay-net-dep-van-hoa-tin-nguong-viet-nam-2717",
    name: "Khám phá lễ hội Chùa Thầy - Nét đẹp văn hóa tín ngưỡng Việt Nam",
  },
  {
    link: "https://hanoimoi.vn/quoc-oai-doi-moi-le-hoi-chua-thay-dua-di-san-den-gan-du-khach-743611.html",
    name: "Quốc Oai đổi mới lễ hội Chùa Thầy, đưa di sản đến gần du khách",
  },
  {
    link: "https://www.studocu.vn/vn/document/truong-dai-hoc-van-hoa-ha-noi/van-hoa-du-lich/le-hoi-chua-thay-fahhf/88621758",
    name: "Lễ hội Chùa Thầy",
  },
  {
    link: "https://thegioidisan.vn/vi/chua-tay-phuong-di-tich-quoc-gia-dac-biet-cua-thu-do-ha-noi.html",
    name: "Chùa Tây Phương - Di tích quốc gia đặc biệt của Thủ đô Hà Nội",
  },
  {
    link: "https://vi.wikipedia.org/wiki/Ch%C3%B9a_T%C3%A2y_Ph%C6%B0%C6%A1ng",
    name: "Chùa Tây Phương - Wikipedia",
  },
];

const articleList = document.getElementById("articleList");

articles.forEach(async (el) => {
  url = el.link;
  displayName = el.name;
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener";
  link.className = "list-group-item list-group-item-action";
  link.textContent = displayName;
  articleList.appendChild(link);

  link.textContent = getTitle(url);
});

// Source - https://stackoverflow.com/a/7901854
// Posted by uncreative, modified by community. See post 'Timeline' for change history
// Retrieved 2026-10-10, License - CC BY-SA 3.0

function getTitle(externalUrl) {
  var proxyurl = "http://localhost/get_external_content.php?url=" + externalUrl;
  $.ajax({
    url: proxyurl,
    async: true,
    success: function (response) {
      alert(response);
    },
    error: function (e) {
      alert("error! " + e);
    },
  });
}
