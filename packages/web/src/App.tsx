import {
  AppBar,
  Box,
  Container,
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
  Toolbar,
  Typography,
  useMediaQuery
} from '@material-ui/core';

import * as React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Routes from './router';

const useStyles = makeStyles(theme => ({
  toolbar: {
    minHeight: 128,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2)
  }
}));

export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light'
        }
      }),
    [prefersDarkMode]
  );

  const classes = useStyles({});

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar color="inherit" className={classes.toolbar}>
          <Typography variant="h5" noWrap>
            NeffDex
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box my={2}>
          <Router>
            <Routes />
          </Router>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

