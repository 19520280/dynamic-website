const imgFeedback1 =
  require("../assets/images/products/monarch-butterfly-t-shirt-white/white01.jpg").default;
const imgFeedback2 =
  require("../assets/images/products/monarch-butterfly-t-shirt-white/white02.jpg").default;
const imgFeedback3 =
  require("../assets/images/products/monarch-butterfly-t-shirt-white/white03.jpg").default;

export const feedbacks = [
  {
    author: "Nguyễn Yến Nhi",
    tittle: "Rất hài lòng",
    content: "Sản phẩm tuyệt vời. Xứng đáng 1000 điểm",
    joined: 2,
    rate: 5,
    imgs: [imgFeedback1, imgFeedback2, imgFeedback3],
    size: "L",
    color: "Đen",
    time: 3,
    used: 10,
  },
  {
    author: "Minh Đinh",
    tittle: "Hài lòng",
    content: "Chất lượng tốt. Website đẹp.",
    joined: 1,
    rate: 4,
    imgs: [imgFeedback1, imgFeedback2, imgFeedback3],
    size: "XL",
    color: "Trắng",
    time: 10,
    used: 30,
  },
  {
    author: "Nguyễn Phương Thảo",
    tittle: "Bình thường",
    content: "Chủ shop dễ thương, hướng dẫn nhiệt tình. Sản phẩm đẹp",
    joined: 1,
    rate: 3,
    imgs: [],
    size: "M",
    color: "Đỏ",
    time: 5,
    used: 15,
  },
];
