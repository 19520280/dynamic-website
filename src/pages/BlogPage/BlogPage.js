import { Button, Grid, Grow, Stack, Typography } from "@mui/material";

import BlogBanner from "./../../components/Banner/BlogBanner/BlogBanner";
import BlogItem from "./../../components/BlogItem/BlogItem";
import { OrderStatusState$ } from "../../redux/selectors";
import React from "react";
import TabMenu from "./../../components/Tab/TabMenu";
import { blogs } from "./../../dataSources/Blogs";
import { useSelector } from "react-redux";

const menuItems = [
  { value: 2, text: "BEAUTY & FASHION" },
  { value: 3, text: "TIN TỨC" },
];

const BlogPage = () => {
  const status = useSelector(OrderStatusState$);
  const [filterBlogs, setfilterBlogs] = React.useState(blogs);
  console.log(status.payload);
  React.useEffect(() => {
    if (status.payload) {
      if (status.payload !== "TẤT CẢ") {
        const type = status.payload === "BEAUTY & FASHION" ? 2 : 3;
        setfilterBlogs(blogs.filter((post) => post.type === type));
      } else {
        setfilterBlogs(blogs);
      }
    }
  }, [status, blogs]);
  return (
    <Stack direction="column" spacing={5}>
      <BlogBanner />

      <div className="containermain">
        <TabMenu menuItems={menuItems} />

        <Grid
          container
          spacing={{ xs: 1, md: 3 }}
          columns={{ xs: 1, sm: 6, md: 6 }}
        >
          {filterBlogs.map((post, index) => (
            <Grid item xs={1} sm={3} md={2} key={index}>
              <BlogItem
                image={post.image}
                title={post.title}
                date={post.date}
                type={post.type}
                numberShare={post.numberShare}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </Stack>
  );
};

export default BlogPage;
