import { ErrorBoundary, Route, Router as PreactRouter } from "preact-iso";
import _404 from "./pages/_404.tsx";
import Login from "./pages/login/page.tsx";
import Discover from "./pages/discover/page.tsx";
import Token from "./pages/token/page.tsx";
import Pfrax from "./pages/pFrax/page.tsx";
import SendpFrax from "./pages/pFrax/sendpFrax/page.tsx";
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
          <Route path="token" component={Token} />
          <Route path="pfrax" component={Pfrax} />
          <Route path="pfrax/send" component={SendpFrax} />

          <Route default component={_404} />
        </PreactRouter>
      </ErrorBoundary>
    </Layout>
  );
}
