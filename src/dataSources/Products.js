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

/* #region  SignatureShort */
const imgSignatureShort11 =
  require("../assets/images/products/signature-short/black01.png").default;
const imgSignatureShort12 =
  require("../assets/images/products/signature-short/black02.jpg").default;
const imgSignatureShort21 =
  require("../assets/images/products/signature-short/white01.jpg").default;
const imgSignatureShort22 =
  require("../assets/images/products/signature-short/white02.jpg").default;
/* #endregion */

const imgOrt11 =
  require("../assets/images/products/outerity/white01.jpg").default;
const imgOrt12 =
  require("../assets/images/products/outerity/white02.jpg").default;

export const product = {
  id: "",
  ten: "",
  imgs: [[]],
  newTag: false,
  giaCu: Number,
  gia: Number,
  tonKho: Number,
  ngayKetThucSale: "26/12/2021",
  setCountDown: false,
  mauSacs: ["white", "black"], //M?? m??u #... ho???c c??c m??u c?? s???n c???a h??? th???ng
  kichThuocs: ["S", "M", "L", "XL", "FS"],
  chatLieus: ["Cotton"],
  phongCachs: ["???????ng ph???"],
  kieuDang: "C?? tay",
  hoatTiet: "H???a ti???t in",
  chiTiet: "Kh??ng",
  muas: ["Xu??n", "H???", "Thu", "????ng"],
  description: "?????p",
};

export const products = [
  {
    id: "A01",
    path: "/Ao/Ao-thun/basic-tee",
    ten: "Basic Tee",
    phanLoai: "Ao",
    imgs: [
      [imgBasicTee11, imgBasicTee12],
      [imgBasicTee21, imgBasicTee22],
      [imgBasicTee31, imgBasicTee32],
    ],
    newTag: true,
    giaCu: 300000,
    gia: 200000,
    tonKho: 5,
    ngayKetThucSale: "26/12/2021",
    setCountDown: false,
    mauSacs: ["black", "#4581f6", "#01a08e"],
    kichThuocs: ["S", "M", "L"],
    chatLieus: ["Cotton"],
    phongCachs: ["????n gi???n", "Tho???i m??i"],
    kieuDang: "C?? tay",
    hoatTiet: "Ch??? in",
    chiTiet: "Outerity",
    muas: ["Xu??n", "H???", "Thu", "????ng"],
    description: "?????p",
  },
  {
    id: "A02",
    path: "/Ao/Ao-thun/monarch-butterflys",
    ten: "Monarch Butterflys",
    phanLoai: "Ao",
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
    phongCachs: ["???????ng ph???", "Tho???i m??i"],
    kieuDang: "C?? tay",
    hoatTiet: "H???a ti???t in",
    chiTiet: "Kh??ng",
    muas: ["Xu??n", "H???", "Thu", "????ng"],
    description: "?????p",
  },
  {
    id: "Q01",
    path: "/Quan/Quan-ngan/signature-short",
    ten: "Signature Short",
    phanLoai: "Quan",
    imgs: [
      [imgSignatureShort11, imgSignatureShort12],
      [imgSignatureShort21, imgSignatureShort22],
    ],
    newTag: false,
    giaCu: null,
    gia: 200000,
    tonKho: 0,
    ngayKetThucSale: null,
    setCountDown: null,
    mauSacs: ["black", "white"],
    kichThuocs: ["FS"],
    chatLieus: ["Cotton"],
    phongCachs: ["???????ng ph???", "Tho???i m??i"],
    kieuDang: "Qu???n ng???n",
    hoatTiet: "Ch??? in",
    chiTiet: "Kh??ng",
    muas: ["Xu??n", "H???"],
    description: "?????p",
  },
  {
    id: "A03",
    path: "/Ao/Ao-thun/Outerity",
    ten: "Outerity",
    phanLoai: "Ao",
    imgs: [[imgOrt11, imgOrt12]],
    newTag: true,
    giaCu: null,
    gia: 170000,
    tonKho: 15,
    ngayKetThucSale: null,
    setCountDown: null,
    mauSacs: ["white"],
    kichThuocs: ["S"],
    chatLieus: ["Cotton"],
    phongCachs: ["???????ng ph???", "Tho???i m??i"],
    kieuDang: "Qu???n ng???n",
    hoatTiet: "Ch??? in",
    chiTiet: "Kh??ng",
    muas: ["Xu??n", "H???"],
    description: "?????p",
  },
  
];
