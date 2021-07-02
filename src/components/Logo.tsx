import { styled } from '@material-ui/core';
import Image from 'next/image'
import logo from '../public/logo.svg';

export const Logo = () => {
  return <StyledImage src={logo} />;
}

const StyledImage = styled(Image)({
  width: 40,
  height: 40
});
