const imgMonarchButterflys11 =
  require("../assets/images/products/monarch-butterfly-t-shirt-white/white01.jpg").default;
const imgBasicTee21 =
  require("../assets/images/products/basic-tee/blue01.png").default;

function createData(
  ten,
  image,
  ngay,
  trangThai,
  diem,
  soLuong,
  mauSac,
  kichThuoc,
  giaCu,
  gia
) {
  return {
    ten,
    image,
    ngay,
    trangThai,
    diem,
    soLuong,
    mauSac,
    kichThuoc,
    giaCu,
    gia,
  };
}

export const Orders = [
  createData(
    "Monarch Butterflys",
    imgMonarchButterflys11,
    "18/12/2021",
    "ĐÃ NHẬN",
    6,
    2,
    "white",
    "S",
    300000,
    150000,
  ),
  createData(
    "Basic Tee",
    imgBasicTee21,
    "21/12/2021",
    "ĐÃ DÙNG",
    -3,
    1,
    "white",
    "S",
    300000,
    150000,
  ),
];
