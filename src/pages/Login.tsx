import RouterLink from 'next/link';
import { styled } from '@material-ui/core/styles';
import { Card, Stack, Link, Container, Typography } from '@material-ui/core';

import { AuthLayout } from '../layouts/AuthLayout';

import { Page } from '../components/Page';
import { MHidden } from '../components/@material-extend';
import { LoginForm } from '../components/authentication/login';
import AuthSocial from '../components/authentication/AuthSocial';

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

export const Login = () => (
  <RootStyle title="Login | Minimal-UI">
    <AuthLayout>
      Don’t have an account? &nbsp;
      <Link underline="none" variant="subtitle2" component={RouterLink} to="/register">
        Get started
      </Link>
    </AuthLayout>

    <MHidden width="mdDown">
      <SectionStyle>
        <Typography variant="h3" style={{ padding: 5, marginTop: 10, marginBottom: 5 }}>
          Hi, Welcome Back
        </Typography>
        <img src="/static/illustrations/illustration_login.png" alt="login" />
      </SectionStyle>
    </MHidden>

    <Container maxWidth="sm">
      <ContentStyle>
        <Stack sx={{ mb: 5 }}>
          <Typography variant="h4" gutterBottom>
            Sign in to Minimal
          </Typography>
          <Typography style={{ color: 'text.secondary' }}>Enter your details below.</Typography>
        </Stack>
        <AuthSocial />

        <LoginForm />

        <MHidden width="smUp">
          <Typography variant="body2" align="center" style={{ marginTop: 3 }}>
            Don’t have an account?&nbsp;
            <Link variant="subtitle2" component={RouterLink} to="register">
              Get started
            </Link>
          </Typography>
        </MHidden>
      </ContentStyle>
    </Container>
  </RootStyle>
);
