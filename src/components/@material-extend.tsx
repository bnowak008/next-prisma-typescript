import { ReactNode } from 'react';
import { Breakpoint, ThemeOptions, useMediaQuery } from '@material-ui/core';

type Props = {
  children: ReactNode,
  width: 'xsDown' | 'smDown' | 'mdDown' | 'lgDown' | 'xlDown' | 'xsUp' | 'smUp' | 'mdUp' | 'lgUp' | 'xlUp'
}

export const MHidden = ({ width, children }: Props) => {
  const breakpoint = width.substring(0, 2) as Breakpoint;

  const hiddenUp = useMediaQuery((theme: ThemeOptions) => theme.breakpoints.up(breakpoint));
  const hiddenDown = useMediaQuery((theme: ThemeOptions) => theme.breakpoints.down(breakpoint));

  if (width.includes('Down')) {
    return hiddenDown ? null : children;
  }

  if (width.includes('Up')) {
    return hiddenUp ? null : children;
  }

  return null;
}
