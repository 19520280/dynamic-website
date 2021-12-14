/* #region  Monarch Butterflys */
const imgMonarchButterflys11 =
  require("../assets/images/products/monarch-butterfly-t-shirt-white/white01.jpg").default;
const imgMonarchButterflys12 =
  require("../assets/images/products/monarch-butterfly-t-shirt-white/white02.jpg").default;
const imgMonarchButterflys13 =
  require("../assets/images/products/monarch-butterfly-t-shirt-white/white03.jpg").default;
const imgMonarchButterflys14 =
  require("../assets/images/products/monarch-butterfly-t-shirt-white/ee6bc2f9bdace98730ae3e35121451b7.jpg").default;
const imgMonarchButterflys21 =
  require("../assets/images/products/monarch-butterfly-t-shirt-white/black01.jpg").default;
const imgMonarchButterflys22 =
  require("../assets/images/products/monarch-butterfly-t-shirt-white/black02.jpg").default;
/* #endregion */

/* #region  Monarch Butterflys */
const imgBasicTee11 =
  require("../assets/images/products/basic-tee/black01.jpg").default;
const imgBasicTee12 =
  require("../assets/images/products/basic-tee/black02.jpg").default;
  const imgBasicTee21 =
  require("../assets/images/products/basic-tee/blue01.png").default;
const imgBasicTee22 =
  require("../assets/images/products/basic-tee/blue02.png").default;
  const imgBasicTee31 =
  require("../assets/images/products/basic-tee/green01.jpg").default;
const imgBasicTee32 =
  require("../assets/images/products/basic-tee/green02.jpg").default;

  /* #endregion */

export const product = {
  ten: "",
  imgs: [[]],
  newTag: false,
  giaCu: Number,
  gia: Number,
  tonKho: Number,
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
    ten: "Basic Tee",
    imgs: [
      [
        imgBasicTee11,
        imgBasicTee12,
      ],
      [
        imgBasicTee21,
        imgBasicTee22,
      ],   [
        imgBasicTee31,
        imgBasicTee32,
      ],
    ],
    newTag: true,
    giaCu: 300000,
    gia: 200000,
    tonKho: 5,
    ngayKetThucSale: "26/12/2021",
    setCountDown: false,
    mauSacs: ["black","#4581f6","#01a08e"],
    kichThuocs: ["S", "M", "L"],
    chatLieus: ["Cotton"],
    phongCachs: ["Đơn giản", "Thoải mái"],
    kieuDang: "Có tay",
    hoatTiet: "Chữ in",
    chiTiet: "Outerity",
    muas: ["Xuân", "Hạ", "Thu", "Đông"],
    description: "Đẹp",
  },
  {
    ten: "Monarch Butterflys",
    imgs: [
      [
        imgMonarchButterflys11,
        imgMonarchButterflys12,
        imgMonarchButterflys13,
        imgMonarchButterflys14,
      ],
      [imgMonarchButterflys21, imgMonarchButterflys22],
    ],
    newTag: true,
    giaCu: 300000,
    gia: 150000,
    tonKho: 5,
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
