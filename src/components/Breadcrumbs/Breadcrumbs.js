import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { withRouter } from "react-router-dom";

const Breadcrumb = (props) => {
  const {
    history,
    location: { pathname },
  } = props;
  const pathnames = pathname.split("/").filter((x) => x);
  return (
    <Breadcrumbs style={{padding:"12px 0px 12px 80px", margin:"0px 0px 0px 12px", backgroundColor:"#FCFCFC"}} aria-label="breadcrumb">
      {pathnames.length > 0 ? (
        <Link onClick={() => history.push("/")}>Trang chủ</Link>
      ) : (
        <Typography> Trang chủ </Typography>
      )}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Typography key={name}>
            {name == "Best-seller"
              ? "Best seller": name == "Bo-suu-tap"?
              "Bộ sưu tập"
              : name == "Ao"
              ? "Áo"
              : name == "Quan"
              ? "Quần"
              : name == "Phu-kien"
              ? "Phụ kiện"
              : name == "Lien-he"
              ? "Liên hệ"
              : name == "Ao-thun"
              ? "Áo thun"
              : name == "Ao-khoac"
              ? "Áo khoác"
              : name == "Ao-trum-dau"
              ? "Áo trùm đầu"
              : name == "So-mi"
              ? "Sơ mi"
              : name == "Ao-tay-dai"
              ? "Áo tay dài"
              : name}
          </Typography>
        ) : (
          <Link key={name} onClick={() => history.push(routeTo)}>
            {name == "Ao"
              ? "Áo"
              : name == "Quan"
              ? "Quần"
              : name == "Phu-kien"
              ? "Phụ kiện"
              : name == "Lien-he"
              ? "Liên hệ"
              : name}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default withRouter(Breadcrumb);
