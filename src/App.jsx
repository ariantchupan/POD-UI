import { Route, Routes } from "react-router-dom";
import ThemePanelProvider from "./context/ThemeProvider";
import { allRoutes } from "./routes/all.routes";
import { Suspense } from "react";
import Layout from "./layouts/layout";

function App() {
  return (
    <ThemePanelProvider>
      <Layout>
        <Routes>
          {allRoutes.map(({ path, component: Component }, index) => (
            <Route
              key={index}
              path={path}
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Component />
                </Suspense>
              }
            />
          ))}
        </Routes>
      </Layout>
    </ThemePanelProvider>
  );
}

export default App;
