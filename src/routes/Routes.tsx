import { Profiler, Suspense } from 'react';
import { Route, Routes as Switch } from 'react-router-dom';

import { Layout } from '../components/layouts/Layout/Layout';
import { SuspenseFallback } from '../components/utils/SuspenseFallback/SuspenseFallback';

import { onRenderProfiler } from '../helpers/profiler';

import { routesConfig } from './routesConfig';

export const Routes = () => {
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <Layout>
        <Switch>
          {routesConfig.map(({ component: Component, path }) => (
            <Route
              key={path}
              path={path}
              element={
                <Profiler
                  id={Component.name || path}
                  onRender={onRenderProfiler}
                >
                  <Component />
                </Profiler>
              }
            />
          ))}
        </Switch>
      </Layout>
    </Suspense>
  );
};
