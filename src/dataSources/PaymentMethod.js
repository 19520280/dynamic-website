const viettel =
  require("../assets/images/payment-brands/viettelpay.png").default;
const momo = require("../assets/images/payment-brands/momo.svg").default;
const cod = require("../assets/images/payment-brands/cod.svg").default;
const atm = require("../assets/images/payment-brands/atm.svg").default;

const bidv = require("../assets/images/payment-brands/BIDV.jpg").default;
const varb = require("../assets/images/payment-brands/VARB.jpg").default;
const scb = require("../assets/images/payment-brands/scb.png").default;
export const paymentMethods = [
  {
    name: "Thanh toán khi nhận hàng",
    img: cod,
    tag: false,
    imgList: [],
  },
  {
    name: "Thanh toán qua ViettelPay",
    img: viettel,
    tag: false,
    imgList: [],
  },
  {
    name: "Thanh toán qua MoMo",
    img: momo,
    tag: true,
    imgList: [],
  },
  {
    name: "Thẻ ATM nội địa/Internet Banking (Hỗ trợ Internet Banking)",
    img: atm,
    tag: false,
    imgList: [bidv, varb, scb],
  },
];
