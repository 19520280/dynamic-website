import * as React from 'react';
import { styled } from '@mui/material/styles';
import { SystemColor } from '../../color';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: "transparent",
  padding: theme.spacing(1),
  color: SystemColor.main,
  fontSize: "18px",
}));

export default function OrdersCaseTypography({text}) {
  return <Div>{text}</Div>;
}