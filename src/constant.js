const avatarImage = require("./assets/images/avatar/doraemon.jpg").default;
export const facebook = require("./assets/images/facebook-logo.png").default;
export const google = require("./assets/images/google-logo.png").default;

export const BACKEND_URL = "http://localhost:5000";
export const FRONTEND_URL = "http://localhost:3000";

export const INIT_STATE = {
  SaleBanner: {
    isShow: false,
  },
  CollectionDialog: {
    isShow: false,
  },
  AddCollectionDialog: {
    isShow: false,
  },
  ChangeAddressDialog: {
    isShow: false,
  },
  ProductDialog: {
    isShow: false,
  },
  SizeGuideDialog: {
    isShow: false,
  },
  MixMatchDialog: {
    isShow: false,
  },
  QuickViewDialog: {
    isShow: false,
  },
  //#region Account
  AccountMenu: {
    isExpanded: true,
  },
  LoginModal: {
    isShow: false,
  },
  RegisterModal: {
    isShow: false,
  },
  OTPModal: {
    isShow: false,
  },
  WelcomeModal: {
    isShow: false,
  },
  AvatarPopover: {
    isShow: false,
  },
  Account: {
    isLoggedin: false,
    avatarImage: avatarImage,
    accountName: "Minh Đinh",
    password: "7",
    timeHasJoined: "2 năm",
    realName: "ĐINH TRẦN VĂN MINH",
    DoB: "07/06/2001",
    gender: "Nam",
    email: "19520715@gm.uit.edu.vn",
    phoneNumber: "0329092681",
    // style: [
    //   {
    //     name: "Đơn giản",
    //     isTrue: true,
    //   },
    //   {
    //     name: "Hằng ngày",
    //     isTrue: true,
    //   },
    //   {
    //     name: "Đường phố",
    //     isTrue: false,
    //   },
    //   {
    //     name: "Đi học/Đi làm",
    //     isTrue: true,
    //   },
    // ],
    style: {
      basic: {
        name: "Đơn giản",
        isTrue: true,
      },
      daily: {
        name: "Hằng ngày",
        isTrue: true,
      },
      street: {
        name: "Đường phố",
        isTrue: false,
      },
      formal: {
        name: "Đi học/Đi làm",
        isTrue: true,
      },
    },
    address: {
      isDefault: 0,
      name: [
        {
          key: 0,
          home: "Thôn A Duông",
          town: "Thị trấn P'rao",
          district: "Huyện Đông Giang",
          province: "Tỉnh Quảng Nam",
        },
        {
          key: 1,
          home: "Khu phố 6",
          town: "Phường Linh Trung",
          district: "Quận Thủ Đức",
          province: "TP. Hồ Chí Minh",
        },
      ],
    },
    // address: [
    //   {
    //     // name: "Thôn A Duông, Thị trấn P'rao, huyện Đông Giang, tỉnh Quảng Nam",
    //     name: {
    //       home: "Thôn A Duông",
    //       town: "Thị trấn P'rao",
    //       district: "Huyện Đông Giang",
    //       province: "Tỉnh Quảng Nam",
    //     },
    //     isDefault: true,
    //   },
    //   {
    //     // name: "KTX khu A, phường Linh Trung, quận Thủ Đức, TP.HCM",
    //     name: {
    //       home: "Khu phố 6",
    //       town: "Phường Linh Trung",
    //       district: "Quận Thủ Đức",
    //       province: "TP. Hồ Chí Minh",
    //     },
    //     isDefault: false,
    //   },
    // ],
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
  ShoppingCartDrawer: {
    isShow: false,
  },
  MessageModal: {
    isShow: false,
  },
 BuyMoreDialog: {
    isShow: false,
  },
  //#endregion
};
