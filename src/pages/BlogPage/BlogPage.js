import { Button, Grid, Stack, Typography } from "@mui/material";

import BlogBanner from "./../../components/Banner/BlogBanner/BlogBanner";
import BlogItem from "./../../components/BlogItem/BlogItem";
import React from "react";
import { blogs } from "./../../dataSources/Blogs";

const BlogPage = () => {
  return (
    <Stack direction="column" spacing={5}>
      <BlogBanner />
      <div className="containermain">
        <Grid
          container
          spacing={{ xs: 1, md: 3 }}
          columns={{ xs: 2, sm: 6, md: 6 }}
        >
          {blogs.map((post, index) => (
            <Grid item xs={1} sm={2} md={2} key={index}>
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
