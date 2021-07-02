import { forwardRef, ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box } from '@material-ui/core';

type Props = {
  children: ReactNode,
  title: string
}

export const Page = forwardRef(({ children, title = '', ...other }: Props, ref) => (
  <Box ref={ref} {...other}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </Box>
));
