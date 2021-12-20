import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import React from "react";
import Typography from "@mui/material/Typography";
import { withRouter } from "react-router-dom";
import {
  useMediaQuery,
  useTheme,
} from "@mui/material";
const Breadcrumb = (props) => {
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const {
    history,
    location: { pathname },
  } = props;
  const pathnames = pathname.split("/").filter((x) => x);
  return pathnames.length > 0 && pathnames[0] !== "Blog" && pathnames[0] !== "Bo-suu-tap" &&pathnames[0] !== "Ket-qua-tim-kiem" ? (
    <Breadcrumbs
      style={{
        paddingTop: "2%",
        paddingBottom: "1%",
        paddingLeft: isMobile? "20px":"80px",
        // margin: "5%",
        backgroundColor: "#FCFCFC",
      }}
      aria-label="breadcrumb"
    >
      <Link onClick={() => history.push("/")}>Trang chủ</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Typography key={name}>
            {name === "Best-seller"
              ? "Best seller"
              : name === "Bo-suu-tap"
              ? "Bộ sưu tập"
              : name === "Ao"
              ? "Áo"
              : name === "Quan"
              ? "Quần"
              : name === "Phu-kien"
              ? "Phụ kiện"
              : name === "Quan-dai"
              ? "Quần dài"
              : name === "Quan-ngan"
              ? "Quần ngắn"
              : name === "Phu-kien"
              ? "Phụ kiện"
              : name === "Lien-he"
              ? "Liên hệ"
              : name === "Ao-thun"
              ? "Áo thun"
              : name === "Ao-khoac"
              ? "Áo khoác"
              : name === "Ao-trum-dau"
              ? "Áo trùm đầu"
              : name === "So-mi"
              ? "Sơ mi"
              : name === "Ao-tay-dai"
              ? "Áo tay dài"
              : name === "Ba-lo"
              ? "Ba lô"
              : name === "Tui"
              ? "Túi"
              : name === "Vi"
              ? "Ví"
              : name === "Non"
              ? "Nón"
              : name === "Mua-dong-2021"
              ? "Mùa đông 2021"
              : name === "Tet-Canh-Dan-2022"
              ? "Tết Canh Dần 2022"
              : name === "Ca-nhan"
              ? "Cá nhân"
              : name === "Don-mua"
              ? "Đơn mua"
              : name === "Lien-he"
              ? "Liên hệ"
              : name === "Gio-hang"
              ? "Giỏ hàng"
              : name === "Thanh-toan"
              ? "Thanh toán"
              : name === "Diem-thuong"
              ? "Điểm thưởng"
              : name === "Ho-so"
              ? "Hồ sơ"
              : name === "Dia-chi"
              ? "Địa chỉ"
              : name === "Chi-so-co-the"
              ? "Chỉ số cơ thể"
              : name === "Doi-mat-khau"
              ? "Đổi mật khẩu"
              : name === "Danh-sach-quan-tam"
              ? "Danh sách quan tâm"
              : name}
          </Typography>
        ) : (
          <Link key={name} onClick={() => history.push(routeTo)}>
            {name === "Ao"
              ? "Áo"
              : name === "Quan"
              ? "Quần"
              : name === "Phu-kien"
              ? "Phụ kiện"
              : name === "Lien-he"
              ? "Liên hệ"
              : name === "Ca-nhan"
              ? "Cá nhân"
              : name === "Tai-khoan"
              ? "Tài khoản"
              : name}
          </Link>
        );
      })}
    </Breadcrumbs>
  ) : null;
};

export default withRouter(Breadcrumb);
