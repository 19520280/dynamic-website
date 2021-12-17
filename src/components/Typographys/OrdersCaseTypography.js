import * as React from 'react';
import { styled } from '@mui/material/styles';
import { SystemColor } from '../../color';



export default function OrdersCaseTypography({text, size, color}) {
  const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: "transparent",
    padding: theme.spacing(1),
    color: SystemColor.main,
    fontSize: "16px",
  }));
  return <Div>{text}</Div>;
}