/* #region  Monarch Butterflys */
const imgMonarchButterflys11 =
  require("../assets/images/products/monarch-butterfly-t-shirt-white/0b512800e4f589d9bb7e2c8001365977.jpg").default;
const imgMonarchButterflys12 =
  require("../assets/images/products/monarch-butterfly-t-shirt-white/a22b713b26867294015df4a094326574.jpg").default;
const imgMonarchButterflys13 =
  require("../assets/images/products/monarch-butterfly-t-shirt-white/32ce4a7de31032ca84dcc9a148ce01d2.jpg").default;
const imgMonarchButterflys14 =
  require("../assets/images/products/monarch-butterfly-t-shirt-white/ee6bc2f9bdace98730ae3e35121451b7.jpg").default;
const imgMonarchButterflys21 =
  require("../assets/images/products/monarch-butterfly-t-shirt-white/monarch-butterflys-bla-3-w.jpg").default;
/* #endregion */

export const product = {
  ten: "",
  imgs: [[]],
  newTag: false,
  gia: Number,
  giaGiam: Number,
  ngayKetThucSale: "26/12/2021",
  setCountDown: false,
  mauSacs: ["white", "black"], //Mã màu #... hoặc các màu có sẵn của hệ thống
  kichThuocs: ["S", "M", "L", "XL", "FS"],
  chatLieus: ["Cotton"],
  phongCachs: ["Đường phố"],
  kieuDang: "Có tay",
  hoatTiet: "Họa tiết in",
  chiTiet: "Không",
  muas: ["Xuân", "Hạ", "Thu", "Đông"],
  description: "Đẹp",
};

export const products = [
  {
    ten: "Monarch Butterflys",
    imgs: [
      [
        imgMonarchButterflys11,
        imgMonarchButterflys12,
        imgMonarchButterflys13,
        imgMonarchButterflys14,
      ],
      [imgMonarchButterflys21],
    ],
    newTag: true,
    giaCu: 300000,
    gia: 150000,
    ngayKetThucSale: "26/12/2021",
    setCountDown: true,
    mauSacs: ["white", "black"],
    kichThuocs: ["S", "M", "L"],
    chatLieus: ["Cotton"],
    phongCachs: ["Đường phố", "Thoải mái"],
    kieuDang: "Có tay",
    hoatTiet: "Họa tiết in",
    chiTiet: "Không",
    muas: ["Xuân", "Hạ", "Thu", "Đông"],
    description: "Đẹp",
  },
];
