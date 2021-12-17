const imgMonarchButterflys11 =
  require("../assets/images/products/monarch-butterfly-t-shirt-white/white01.jpg").default;
const imgBasicTee21 =
  require("../assets/images/products/basic-tee/blue01.png").default;

export const Orders = [
  {
    id: "OD0001",
    date: "17/12/2021",
    receivePointStatus: "ĐÃ NHẬN",
    usePointStatus: "KHÔNG DÙNG",
    shipStatus: "ĐÃ GIAO HÀNG",
    receivePoint: 3,
    usePoint: 0,
    totalQuantity: 2,
    quantity: [1, 1],
    total: 350000,
    listProduct: ["Basic Tee", "Monarch Butterflys"],
  },
  {
    id: "OD0002",
    date: "17/12/2021",
    receivePointStatus: "ĐÃ NHẬN",
    usePointStatus: "ĐÃ DÙNG",
    shipStatus: "ĐÃ GIAO HÀNG",
    receivePoint: 5,
    usePoint: -1,
    totalQuantity: 3,
    quantity: [1, 2],
    total: 499000,
    listProduct: ["Basic Tee", "Monarch Butterflys"],
  },
  {
    id: "OD0003",
    date: "17/12/2021",
    receivePointStatus: "CHƯA NHẬN",
    usePointStatus: "KHÔNG DÙNG",
    shipStatus: "CHƯA GIAO HÀNG",
    receivePoint: 4,
    usePoint: 0,
    totalQuantity: 3,
    quantity: [2, 1],
    total: 550000,
    listProduct: ["Basic Tee", "Monarch Butterflys"],
  },
  {
    id: "OD0004",
    date: "17/12/2021",
    receivePointStatus: "CHƯA NHẬN",
    usePointStatus: "KHÔNG DÙNG",
    shipStatus: "CHƯA GIAO HÀNG",
    receivePoint: 3,
    usePoint: 0,
    totalQuantity: 2,
    quantity: [1, 1],
    total: 350000,
    listProduct: ["Basic Tee", "Monarch Butterflys"],
  },
];
