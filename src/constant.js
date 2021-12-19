const avatarImage = require("./assets/images/avatar/doraemon.jpg").default;

export const BACKEND_URL = "http://localhost:5000";
export const FRONTEND_URL = "http://localhost:3000";

export const INIT_STATE = {
  SaleBanner: {
    isShow: false,
  },
  CollectionDialog: {
    isShow: false,
  },
  SizeGuideDialog: {
    isShow: false,
  },
  //#region Account
  AccountMenu: {
    isExpanded: true,
  },
  Account: {
    avatarImage: avatarImage,
    accountName: "Minh Đinh",
    password: "7",
    timeHasJoined: "2 năm",
    realName: "Đinh Trần Văn Minh",
    DoB: "07/06/2001",
    gender: "Nam",
    email: "19520715@gm.uit.edu.vn",
    phoneNumber: "0329092681",
    style: [
      {
        name: "Đơn giản",
        isTrue: true,
      },
      {
        name: "Hằng ngày",
        isTrue: true,
      },
      {
        name: "Đường phố",
        isTrue: false,
      },
      {
        name: "Đi học/Đi làm",
        isTrue: true,
      },
    ],
    address: [
      {
        name: "Thị trấn P'rao, huyện Đông Giang, tỉnh Quảng Nam",
      },
      {
        name: "KTX khu A, phường Linh Trung, quận Thủ Đức, TP.HCM",
      },
    ],
    measure: {
      canShow: true,
      firstRing: 90,
      secondRing: 67,
      thirdRing: 83,
    },
  },
  OrderStatus: {
    data: "TẤT CẢ",
  },
  //#endregion
};
