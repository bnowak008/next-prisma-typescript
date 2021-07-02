import Link from 'next/link';
import { styled } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import { Logo } from '../components/Logo';

export const AuthLayout = ({ children }) => {
  return (
    <HeaderStyle>
      <Link href="/">
        <Logo />
      </Link>
      <Typography variant="body2">
        {children}
      </Typography>
    </HeaderStyle>
  );
}

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7)
  }
}));
