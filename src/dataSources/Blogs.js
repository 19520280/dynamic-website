const dongho = require("./../assets/images/blogs/dongho.jpg").default;
const jisoo = require("./../assets/images/blogs/jisoo.jpg").default;
const saoviet = require("./../assets/images/blogs/saoviet.jpg").default;
const tuyendung = require("./../assets/images/blogs/tuyendung.jpg").default;

export const blogs = [
  {
    type: 2,
    image: dongho,
    date: "18/12/2021",
    title: "Đồng hồ thông minh giúp phát hiện sớm ca mắc COVID-19",
    numberShare: "1k",
    body: "Đồng hồ thông minh có thể cung cấp các dữ liệu sinh học như nhịp tim, số bước đi, giấc ngủ",
  },
  {
    type: 2,
    date: "16/12/2021",
    image: jisoo,
    title: 'Học lỏm cách "sang" của Jisoo (BLACKPINK)',
    numberShare: "1.6k",
    body: "Jisoo xinh đẹp",
  },
  {
    type: 2,
    image: saoviet,
    date: "14/12/2021",
    title:
      'Loạt sao Việt tự hào khoe bản sắc dân tộc trong mẫu giày "độc bản" mới của adidas',
    numberShare: "1.3k",
    body: 'Adidas vừa hớp hồn các "đầu giày" và loạt sao Việt như Châu Bùi, Diễm My, Quỳnh Anh Shyn, Decao, Anh Tú… khi tung ra mẫu UltraBOOST DNA City Pack cực chất tràn đầy cảm hứng dân tộc.',
  },
  {
    type: 3,
    image: tuyendung,
    date: "17/12/2021",
    title: "Dynamic tìm người nhà",
    numberShare: "1.8k",
    body: "Tin tức tuyển nhân viên mới",
  },
];
