import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import React from "react";
import Typography from "@mui/material/Typography";
import { withRouter } from "react-router-dom";

const Breadcrumb = (props) => {
  const {
    history,
    location: { pathname },
  } = props;
  const pathnames = pathname.split("/").filter((x) => x);

  return pathnames.length > 0 ? (
    <Breadcrumbs
      style={{ padding: "12px 0px 12px 80px", margin: "0px 0px 0px 12px" }}
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
              : name === "Lien-he"
              ? "Liên hệ"
              : name === "Ao-thun"
              ? "Áo thun"
              : name === "Ao-khac"
              ? "Áo khoác"
              : name === "Ao-trum-dau"
              ? "Áo trùm đầu"
              : name === "So-mi"
              ? "Sơ mi"
              : name === "Ao-tay-dai"
              ? "Áo tay dài"
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
              : name}
          </Link>
        );
      })}
    </Breadcrumbs>
  ) : null;
};

export default withRouter(Breadcrumb);
