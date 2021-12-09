import CustomTag from "./CustomTag";
import React from "react";
import { Stack } from "@mui/material";

const TagProCardGroup = ({product}) => {
  return (
    <Stack direction="column" spacing={1}>
      {product.newTag ? <CustomTag text="New" /> : null}
      {product.giaCu ? (
        <CustomTag
          text= {`${Math.round((product.giaCu - product.gia) / product.giaCu *100)}%`} 
          txtColor="error"
          bgColor="warning"
        />
      ) : null}
    </Stack>
  );
};

export default TagProCardGroup;
