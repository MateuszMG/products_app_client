import { Profiler } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { onRenderProfiler } from './helpers/profiler';
import { ErrorBoundary } from './hocs/ErrorBoundary/ErrorBoundary';
import { Routes } from './routes/Routes';
import { GlobalStyle } from './utils/theme/GlobalStyle';
import { Theme, themeVariants } from './utils/theme/themeVariants';

export const App = () => {
  return (
    <Profiler id='app' onRender={onRenderProfiler}>
      <ErrorBoundary>
        <BrowserRouter>
          <ThemeProvider theme={themeVariants[Theme.DARK]}>
            <GlobalStyle />
            <ToastContainer position='bottom-left' />
            <Routes />
          </ThemeProvider>
        </BrowserRouter>
      </ErrorBoundary>
    </Profiler>
  );
};
