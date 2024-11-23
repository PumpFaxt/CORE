import { ErrorBoundary, Route, Router as PreactRouter } from "preact-iso";
import _404 from "./pages/_404.tsx";
import Login from "./pages/login/page.tsx";
import Discover from "./pages/discover/page.tsx";
import Layout from "./Layout.tsx";
// import ProtectedRoute from "./shared/components/ProtectedRoute.tsx";

export default function Router() {
  return (
    <Layout>
      <ErrorBoundary onError={(e) => console.error(e)}>
        <PreactRouter>
          {/* <ProtectedRoute type="UnauthenticatedOnly"> */}
          <Route path="login" component={Login} />
          {/* </ProtectedRoute> */}

          <Route path="discover" component={Discover} />

          <Route default component={_404} />
        </PreactRouter>
      </ErrorBoundary>
    </Layout>
  );
}
