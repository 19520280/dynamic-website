import * as React from "react";
import { Box, Typography, ImageList, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TableInfo from "../../components/ProductDetail/TableInfo";
import RatingDetailPanel from "../../components/ProductDetail/RatingDetailPanel";
import CommentPanel from "../../components/ProductDetail/CommentPanel";
import ProductPanel from "../../components/ProductDetail/ProductPanel";
import { products } from "../../dataSources/Products";
import { SystemColor } from "../../color";
const sanPham = products[0];

const ProductDetailPage = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return sanPham ? (
    <>
      <ProductPanel sanPham={sanPham} />
      <Box
        width={1180}
        height={680}
        paddingY={4}
        paddingX={5}
        border={1}
        marginY={3}
        borderColor={SystemColor.gray}
      >
        <Box>
          <Box marginY={1}>
            <h4>THÔNG TIN SẢN PHẨM</h4>
          </Box>
          <TableInfo sanPham={sanPham} />
        </Box>
        <Box marginY={4}>
          <Box marginY={1}>
            <h4>MÔ TẢ SẢN PHẨM</h4>
          </Box>
          <Box>
            <Box marginY={1}>
              <h4>Ý tưởng</h4>
              <Typography>
                A paragraph is a series of sentences that are organized and
                coherent, and are all related to a single topic. Almost every
                piece of writing you do that is longer than a few sentences
                should be organized into paragraphs. ... One of the most
                important of these is a topic sentence.
              </Typography>
            </Box>
            <Box marginY={1}>
              <h4>Giá trị mang lại</h4>
              <Typography>
                A paragraph is a series of sentences that are organized and
                coherent, and are all related to a single topic. Almost every
                piece of writing you do that is longer than a few sentences
                should be organized into paragraphs. ... One of the most
                important of these is a topic sentence.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        width={1180}
        height={270}
        paddingY={4}
        paddingX={5}
        border={1}
        marginY={3}
        borderColor={SystemColor.gray}
        display={"flex"}
      >
        <RatingDetailPanel />
        <Box marginLeft={5}>
          <Typography>TẤT CẢ HÌNH ẢNH</Typography>
          <ImageList cols={sanPham.imgs[0].length} gap={12} variant="woven">
            {sanPham.imgs[0].map((img) => (
              <img src={img} width={170} height={164} loading="lazy" />
            ))}
          </ImageList>
        </Box>
      </Box>
      <Box width={1180} paddingY={4} marginY={3}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange}>
              <Tab label="Tất cả" value="1" />
              <Tab label="Có hình ảnh" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            {[1, 2, 3, 4, 5].map((i) => (
              <CommentPanel />
            ))}
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
        </TabContext>
      </Box>
    </>
  ) : null;
};

export default ProductDetailPage;
