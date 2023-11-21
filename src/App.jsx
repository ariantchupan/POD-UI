import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Suspense, useEffect } from "react";
import { allRoutes } from "./routes/all.routes";
import { getJwtToken } from "./services/tokenService";
import ThemePanelProvider from "./context/ThemeProvider";
import Layout from "./layouts/Layout";

function App() {
  const token = getJwtToken();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token && location.pathname !== "/auth/login") {
      navigate("/auth/login");
    }
    if (token && location.pathname.startsWith("/auth")) {
      navigate("/");
    }
  }, [token, navigate, location]);

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
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Layout>
    </ThemePanelProvider>
  );
}

export default App;
