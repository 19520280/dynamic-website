const imgMonarchButterflys11 =
  require("../assets/images/products/monarch-butterfly-t-shirt-white/white01.jpg").default;
const imgBasicTee21 =
  require("../assets/images/products/basic-tee/blue01.png").default;

function createData(ten, image, mauSac, kichThuoc, giaCu, gia, soLuong) {
  return { ten, image, mauSac, kichThuoc, giaCu, gia, soLuong };
}

export const cartProducts = [
  createData(
    "Monarch Butterflys",
    imgMonarchButterflys11,
    "white",
    "S",
    300000,
    150000,
    1
  ),
  createData("Basic Tee", imgBasicTee21, "#4581f6", "M", 300000, 200000, 2),
];
